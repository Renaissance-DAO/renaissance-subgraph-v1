import { VaultCreated } from "../generated/FNFTCollectionFactory/FNFTCollectionFactory";
import { FNFTCollection as FNFTCollectionTemplate } from "../generated/templates";
import { ERC721 } from '../generated/templates/FNFTCollection/ERC721';
import { FNFTCollection } from '../generated/schema';
import {
  Minted,
	Redeemed,
  AuctionStarted,
  BidMade,
  AuctionWon,
  Transfer
} from "../generated/templates/FNFTCollection/FNFTCollection";
import { AUCTION, REDEEMED, ZERO_ADDRESS } from "../utils/constants";
import {
  getOrCreateFNFTCollection,
  getOrCreateFNFTCollectionItem,
  getOrCreateFNFTCollectionItemBidHistory,
  getOrCreateUserFNFTCollection,
} from "../utils/entities";
import { generateId, toDecimal } from "../utils/helper";
import { Address, log } from "@graphprotocol/graph-ts";

export function handleVaultCreated(event: VaultCreated): void {
  const vaultId = event.params.vaultId;
  const name = event.params.name.toString();
  const symbol = event.params.symbol.toString();
  const fnftAddress = event.params.vaultAddress.toHexString();
  const nftAddress = event.params.assetAddress.toHexString();
  const curator = event.params.curator.toHexString();

  let fnft = getOrCreateFNFTCollection(fnftAddress);
  fnft.vaultId = vaultId;
  fnft.name = name;
  fnft.symbol = symbol;
  fnft.curator = curator;
  fnft.createdAt = event.block.timestamp;
  fnft.nftAddress = nftAddress;

  fnft.save();

  FNFTCollectionTemplate.create(event.params.vaultAddress);
}

export function handleMinted(event: Minted): void {
	const vault = event.transaction.from.toHexString();
	const depositor = event.params.to.toHexString();
	const createdAt = event.block.timestamp;
  const nftCount = event.params.nftIds.length;
	for (let i = 0; i < nftCount; i++) {
		const nftId = event.params.nftIds[i];
		let itemId = generateId([vault, nftId.toString()]);
  	let item = getOrCreateFNFTCollectionItem(itemId);
		item.vault = vault;
		item.depositor = depositor;
		item.createdAt = createdAt;
		item.tokenId = nftId;

    let vaultNFTAddress = FNFTCollection.load(vault);
    if (!vaultNFTAddress) return;
    let erc721 = ERC721.bind(Address.fromString(vaultNFTAddress.nftAddress));
    let tokenURICall = erc721.try_tokenURI(nftId);
    if (tokenURICall.reverted===false){
      item.tokenURI = tokenURICall.value;
    }

    item.save();
	}
  let fnft = getOrCreateFNFTCollection(vault);
  fnft.count += nftCount;
  fnft.save();
}

export function handleRedeemed(event: Redeemed): void {
	const vault = event.transaction.from.toHexString();
  const nftCount = event.params.nftIds.length;
	for (let i = 0; i < nftCount; i++) {
		const nftId = event.params.nftIds[i];
		let itemId = generateId([vault, nftId.toString()]);
  	let item = getOrCreateFNFTCollectionItem(itemId);
		item.state = REDEEMED;
		item.save();
	}
  let fnft = getOrCreateFNFTCollection(vault);
  fnft.count -= nftCount;
  fnft.save();
}

export function handleAuctionStarted(event: AuctionStarted): void {
	const vault = event.transaction.from.toHexString();
  const buyer = event.params.buyer.toHexString();
  const tokenId = event.params.tokenId;
  const price = toDecimal(event.params.price);
  const createdAt = event.block.timestamp;

  const uid = event.transaction.hash.toHex();
  const bidId = generateId([vault, tokenId.toString(), buyer, uid]);
  const collectionItemId = generateId([vault, tokenId.toString()]);
  let bid = getOrCreateFNFTCollectionItemBidHistory(bidId);
  bid.user = buyer;
  bid.item = collectionItemId;
  bid.amount = price;
  bid.createdAt = createdAt;

  bid.save();

  //update collection item

  const collectionItem = getOrCreateFNFTCollectionItem(collectionItemId);
  collectionItem.latestBid = price;
  if (price.gt(collectionItem.highestBid)) {
    collectionItem.highestBid = price;
  }
  collectionItem.state = AUCTION;
  collectionItem.latestBidAt = createdAt;

  collectionItem.save();
}

export function handleBidMade(event: BidMade): void {
	const vault = event.transaction.from.toHexString();
  const buyer = event.params.buyer.toHexString();
  const tokenId = event.params.tokenId;
  const price = toDecimal(event.params.price);
  const createdAt = event.block.timestamp;

  const uid = event.transaction.hash.toHex();
  const bidId = generateId([vault, tokenId.toString(), buyer, uid]);
  const collectionItemId = generateId([vault, tokenId.toString()]);
  let bid = getOrCreateFNFTCollectionItemBidHistory(bidId);
  bid.user = buyer;
  bid.item = collectionItemId;
  bid.amount = price;
  bid.createdAt = createdAt;

  bid.save();

  //update collection item

  const collectionItem = getOrCreateFNFTCollectionItem(collectionItemId);
  collectionItem.latestBid = price;
  if (price.gt(collectionItem.highestBid)) {
    collectionItem.highestBid = price;
  }
  collectionItem.latestBidAt = createdAt;

  collectionItem.save();
}

export function handleAuctionWon(event: AuctionWon): void {
	const vault = event.transaction.from.toHexString();
  const buyer = event.params.buyer.toHexString();
  const tokenId = event.params.tokenId;
  const price = toDecimal(event.params.price);
  const createdAt = event.block.timestamp;

  const uid = event.transaction.hash.toHex();
  const bidId = generateId([vault, tokenId.toString(), buyer, uid]);
  const collectionItemId = generateId([vault, tokenId.toString()]);
  let bid = getOrCreateFNFTCollectionItemBidHistory(bidId);
  bid.user = buyer;
  bid.item = collectionItemId;
  bid.amount = price;
  bid.createdAt = createdAt;

  bid.save();

  //update collection item

  const collectionItem = getOrCreateFNFTCollectionItem(collectionItemId);
  collectionItem.latestBid = price;
  if (price.gt(collectionItem.highestBid)) {
    collectionItem.highestBid = price;
  }
  collectionItem.state = REDEEMED;
  collectionItem.latestBidAt = createdAt;
  collectionItem.auctionWinner = buyer;

  collectionItem.save();
}

export function handleTransfer(event: Transfer): void {
  const from = event.params.from.toHexString();
  const to = event.params.to.toHexString();
  const value = toDecimal(event.params.value);
  const fnftAddress = event.address.toHexString();

  let fromUser = getOrCreateUserFNFTCollection(generateId([from, fnftAddress]));
  let toUser = getOrCreateUserFNFTCollection(generateId([to, fnftAddress]));

  if (from != ZERO_ADDRESS) {
    fromUser.vault = fnftAddress;
    fromUser.user = from;
    fromUser.amount = fromUser.amount.minus(value);
    fromUser.updatedAt = event.block.timestamp;
    fromUser.save();
  }
  if (to != ZERO_ADDRESS) {
    toUser.vault = fnftAddress;
    toUser.user = to;
    toUser.amount = toUser.amount.plus(value);
    toUser.updatedAt = event.block.timestamp;
    toUser.save();
  }
}
