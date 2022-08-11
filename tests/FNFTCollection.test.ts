import { test, assert, clearStore, createMockedFunction } from 'matchstick-as/assembly/index'
import { handleVaultCreated, handleMinted, handleRedeemed, handleTransfer, handleAuctionStarted, handleBidMade, handleAuctionWon } from "../src/FNFTCollection";
import {
  ADDRESSES,
  FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY,
  FNFT_COLLECTION_ENTITY,
  FNFT_COLLECTION_ITEM_ENTITY,
  USER_FNFT_COLLECTION_ENTITY
} from './utils/constants';
import {
  VaultCreatedMockEvent,
  MintedMockEvent,
  RedeemedMockEvent,
  TransferMockEvent,
  AuctionStartedMockEvent,
  BidMadeMockEvent,
  AuctionWonMockEvent
} from './utils/FNFTCollectionEvents';
import { AUCTION, BIGINT_ZERO, PUBLIC, REDEEMED, ZERO_ADDRESS } from '../utils/constants';
import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts';
import { generateId, toDecimal } from '../utils/helper';
import { log } from "matchstick-as/assembly/log";

function createMockedFunctionTokenURI(assetAddress: string, tokenId: BigInt, uri: string): void {
  createMockedFunction(Address.fromString(assetAddress), 'tokenURI', 'tokenURI(uint256):(string)')
    .withArgs([ethereum.Value.fromUnsignedBigInt(tokenId)])
    .returns([ethereum.Value.fromString(uri)])
}

test("FNFTCollectionFactory should create FNFTCollection", () => {
  const vaultId = BigInt.fromI32(0);
  const curator = ADDRESSES[0];
  const vaultAddress = ADDRESSES[1];
  const assetAddress = ADDRESSES[2];
  const name = "Fractional Punk"
  const symbol = "fPUNK"

  const vaultCreatedEvent = VaultCreatedMockEvent(
    vaultId, curator, vaultAddress, assetAddress, name, symbol
  );

  handleVaultCreated(vaultCreatedEvent);

  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "vaultId", vaultId.toString());
  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "curator", curator);
  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "nftAddress", assetAddress);
  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "name", name);
  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "symbol", symbol);
  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "count", "0");
  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "state", PUBLIC);

  clearStore();
});

test("Mint should create FNFTCollectionItem", () => {
  const vaultId = BigInt.fromI32(0);
  const curator = ADDRESSES[0];
  const vaultAddress = ADDRESSES[1];
  const assetAddress = ADDRESSES[2];
  const name = "Fractional Punk"
  const symbol = "fPUNK"

  const vaultCreatedEvent = VaultCreatedMockEvent(
      vaultId, curator, vaultAddress, assetAddress, name, symbol
  );

  handleVaultCreated(vaultCreatedEvent);

  const nftIds = [BigInt.fromI32(0), BigInt.fromI32(2)];
  const tokenURIs = ["ipfs://uri1", "ipfs://uri2"];
  const amounts = [] as Array<BigInt>;
  const to = ADDRESSES[3];

  const mintedEvent = MintedMockEvent(
    nftIds, amounts, to
  );
  mintedEvent.transaction.from = Address.fromString(vaultAddress);
  createMockedFunctionTokenURI(assetAddress, nftIds[0], tokenURIs[0]);
  createMockedFunctionTokenURI(assetAddress, nftIds[1], tokenURIs[1]);
  handleMinted(mintedEvent);

  for (let i = 0; i < nftIds.length; i++) {
    const itemId = generateId([vaultAddress, nftIds[i].toString()]);
    assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "vault", vaultAddress);
    assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "depositor", to);
    assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "createdAt", mintedEvent.block.number.toString());
    assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "tokenId", nftIds[i].toString());
    assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "latestBid", "0");
    assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "highestBid", "0");
    assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "state", PUBLIC);
    assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "latestBidAt", "0");
    assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "tokenURI", tokenURIs[i]);

    createMockedFunctionTokenURI(assetAddress, nftIds[i], "ipfs://uri");
  }

  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "count", "2");

  clearStore();
});

test("Redeem should redeem FNFTCollectionItem", () => {

  // CREATE FNFTCollection

  const vaultId = BigInt.fromI32(0);
  const curator = ADDRESSES[0];
  const vaultAddress = ADDRESSES[1];
  const assetAddress = ADDRESSES[2];
  const name = "Fractional Punk"
  const symbol = "fPUNK"

  const vaultCreatedEvent = VaultCreatedMockEvent(
      vaultId, curator, vaultAddress, assetAddress, name, symbol
  );

  handleVaultCreated(vaultCreatedEvent);

  // MINT

  const mintNFTIds = [BigInt.fromI32(0), BigInt.fromI32(1), BigInt.fromI32(2)];
  const amounts = [] as Array<BigInt>;
  const mintTo = ADDRESSES[3];

  const mintedEvent = MintedMockEvent(
    mintNFTIds, amounts, mintTo
  );
  mintedEvent.transaction.from = Address.fromString(vaultAddress);
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[0], "ipfs://uri1");
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[1], "ipfs://uri2");
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[2], "ipfs://uri3");
  handleMinted(mintedEvent);

  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "count", "3");

  // REDEEM

  const redeemNFTIds = [BigInt.fromI32(0), BigInt.fromI32(1)];
  const specificIds = [] as Array<BigInt>;
  const to = ADDRESSES[3];

  const redeemedEvent = RedeemedMockEvent(
    redeemNFTIds, specificIds, to
  );
  redeemedEvent.transaction.from = Address.fromString(vaultAddress);
  handleRedeemed(redeemedEvent);

  const itemId0 = generateId([vaultAddress, redeemNFTIds[0].toString()]);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId0, "state", REDEEMED);
  const itemId1 = generateId([vaultAddress, redeemNFTIds[1].toString()]);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId1, "state", REDEEMED);
  const itemId2 = generateId([vaultAddress, mintNFTIds[2].toString()]);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId2, "state", PUBLIC);

  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "count", "1");

  clearStore();
});

test("AuctionStart should start and bid on FNFTCollectionItem", () => {

  // CREATE FNFTCollection

  const vaultId = BigInt.fromI32(0);
  const curator = ADDRESSES[0];
  const vaultAddress = ADDRESSES[1];
  const assetAddress = ADDRESSES[2];
  const name = "Fractional Punk"
  const symbol = "fPUNK"

  const vaultCreatedEvent = VaultCreatedMockEvent(
      vaultId, curator, vaultAddress, assetAddress, name, symbol
  );

  handleVaultCreated(vaultCreatedEvent);

  // MINT

  const mintNFTIds = [BigInt.fromI32(0), BigInt.fromI32(1), BigInt.fromI32(2)];
  const amounts = [] as Array<BigInt>;
  const mintTo = ADDRESSES[3];

  const mintedEvent = MintedMockEvent(
    mintNFTIds, amounts, mintTo
  );
  mintedEvent.transaction.from = Address.fromString(vaultAddress);
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[0], "ipfs://uri1");
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[1], "ipfs://uri2");
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[2], "ipfs://uri3");
  handleMinted(mintedEvent);

  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "count", "3");

  // START AUCTION

  const buyer = ADDRESSES[3];
  const tokenId = BigInt.fromI32(0);
  const price = BigInt.fromI32(200);

  const auctionStartedEvent = AuctionStartedMockEvent(
    buyer, tokenId, price
  );
  auctionStartedEvent.transaction.from = Address.fromString(vaultAddress);
  handleAuctionStarted(auctionStartedEvent);

  const bidCreatedAt = auctionStartedEvent.block.timestamp.toString();
  const bidId = generateId([vaultAddress, tokenId.toString(), buyer, auctionStartedEvent.transaction.hash.toHex()]);
  const itemId = generateId([vaultAddress, tokenId.toString()]);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "user", buyer);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "item", itemId);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "amount", toDecimal(price).toString());
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "createdAt", bidCreatedAt);

  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "latestBid", toDecimal(price).toString());
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "highestBid", toDecimal(price).toString());
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "state", AUCTION);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "latestBidAt", bidCreatedAt);

  clearStore();
});

test("BidMade should update and bid on FNFTCollectionItem", () => {

  // CREATE FNFTCollection

  const vaultId = BigInt.fromI32(0);
  const curator = ADDRESSES[0];
  const vaultAddress = ADDRESSES[1];
  const assetAddress = ADDRESSES[2];
  const name = "Fractional Punk"
  const symbol = "fPUNK"

  const vaultCreatedEvent = VaultCreatedMockEvent(
      vaultId, curator, vaultAddress, assetAddress, name, symbol
  );

  handleVaultCreated(vaultCreatedEvent);

  // MINT

  const mintNFTIds = [BigInt.fromI32(0), BigInt.fromI32(1), BigInt.fromI32(2)];
  const amounts = [] as Array<BigInt>;
  const mintTo = ADDRESSES[3];

  const mintedEvent = MintedMockEvent(
    mintNFTIds, amounts, mintTo
  );
  mintedEvent.transaction.from = Address.fromString(vaultAddress);
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[0], "ipfs://uri1");
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[1], "ipfs://uri2");
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[2], "ipfs://uri3");
  handleMinted(mintedEvent);

  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "count", "3");

  // START AUCTION

  const buyer = ADDRESSES[3];
  const tokenId = BigInt.fromI32(0);
  const price = BigInt.fromI32(200);

  const auctionStartedEvent = AuctionStartedMockEvent(
    buyer, tokenId, price
  );
  auctionStartedEvent.transaction.from = Address.fromString(vaultAddress);
  handleAuctionStarted(auctionStartedEvent);

  // MAKE BID

  const bider = ADDRESSES[3];
  const bidPrice = BigInt.fromI32(201);

  const bidMadeEvent = BidMadeMockEvent(
    bider, tokenId, bidPrice
  );
  bidMadeEvent.transaction.from = Address.fromString(vaultAddress);
  handleBidMade(bidMadeEvent);

  const bidCreatedAt = bidMadeEvent.block.timestamp.toString();
  const bidId = generateId([vaultAddress, tokenId.toString(), bider, bidMadeEvent.transaction.hash.toHex()]);
  const itemId = generateId([vaultAddress, tokenId.toString()]);

  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "user", bider);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "item", itemId);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "amount", toDecimal(bidPrice).toString());
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "createdAt", bidCreatedAt);

  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "latestBid", toDecimal(bidPrice).toString());
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "highestBid", toDecimal(bidPrice).toString());
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "state", AUCTION);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "latestBidAt", bidCreatedAt);

  clearStore();
});

test("AuctionWon should update and redeem FNFTCollectionItem", () => {

  // CREATE FNFTCollection

  const vaultId = BigInt.fromI32(0);
  const curator = ADDRESSES[0];
  const vaultAddress = ADDRESSES[1];
  const assetAddress = ADDRESSES[2];
  const name = "Fractional Punk"
  const symbol = "fPUNK"

  const vaultCreatedEvent = VaultCreatedMockEvent(
      vaultId, curator, vaultAddress, assetAddress, name, symbol
  );

  handleVaultCreated(vaultCreatedEvent);

  // MINT

  const mintNFTIds = [BigInt.fromI32(0), BigInt.fromI32(1), BigInt.fromI32(2)];
  const amounts = [] as Array<BigInt>;
  const mintTo = ADDRESSES[3];

  const mintedEvent = MintedMockEvent(
    mintNFTIds, amounts, mintTo
  );
  mintedEvent.transaction.from = Address.fromString(vaultAddress);
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[0], "ipfs://uri1");
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[1], "ipfs://uri2");
  createMockedFunctionTokenURI(assetAddress, mintNFTIds[2], "ipfs://uri3");
  handleMinted(mintedEvent);

  assert.fieldEquals(FNFT_COLLECTION_ENTITY, vaultAddress, "count", "3");

  // START AUCTION

  const buyer = ADDRESSES[3];
  const tokenId = BigInt.fromI32(0);
  const price = BigInt.fromI32(200);

  const auctionStartedEvent = AuctionStartedMockEvent(
    buyer, tokenId, price
  );
  auctionStartedEvent.transaction.from = Address.fromString(vaultAddress);
  handleAuctionStarted(auctionStartedEvent);

  // END AUCTION

  const bider = ADDRESSES[3];
  const bidPrice = BigInt.fromI32(201);

  const auctionWonEvent = AuctionWonMockEvent(
    bider, tokenId, bidPrice
  );
  auctionWonEvent.transaction.from = Address.fromString(vaultAddress);
  handleAuctionWon(auctionWonEvent);

  const bidCreatedAt = auctionWonEvent.block.timestamp.toString();
  const bidId = generateId([vaultAddress, tokenId.toString(), bider, auctionWonEvent.transaction.hash.toHex()]);
  const itemId = generateId([vaultAddress, tokenId.toString()]);

  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "user", bider);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "item", itemId);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "amount", toDecimal(bidPrice).toString());
  assert.fieldEquals(FNFT_COLLECTION_ITEM_BID_HISTORY_ENTITY, bidId, "createdAt", bidCreatedAt);

  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "latestBid", toDecimal(bidPrice).toString());
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "highestBid", toDecimal(bidPrice).toString());
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "state", REDEEMED);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "latestBidAt", bidCreatedAt);
  assert.fieldEquals(FNFT_COLLECTION_ITEM_ENTITY, itemId, "auctionWinner", bider);

  clearStore();
});

test("Transfer updates holder", () => {
  const from = ADDRESSES[0];
  const to = ADDRESSES[1];

  const preValue = BigInt.fromI32(2);

  const preTransferEvent = TransferMockEvent(
    ZERO_ADDRESS, from, preValue
  );

  const vaultAddress = preTransferEvent.address.toHexString();
  const fromUserId = generateId([from, vaultAddress]);
  const toUserId = generateId([to, vaultAddress]);


  //Mint 2 to from
  handleTransfer(preTransferEvent);

  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "vault", vaultAddress);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "user", from);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "amount", toDecimal(preValue).toString());

  const value = BigInt.fromI32(1);

  const transferEvent = TransferMockEvent(
    from, to, value
  );

  //Transfer 1 from from to to
  handleTransfer(transferEvent);

  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "vault", vaultAddress);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "user", from);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "amount", toDecimal(value).toString());

  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, toUserId, "vault", vaultAddress);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, toUserId, "user", to);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, toUserId, "amount", toDecimal(value).toString());

  const value2 = BigInt.fromI32(1);

  const transferEvent2 = TransferMockEvent(
    to, from, value2
  );

  //Transfer 1 back from to to from
  handleTransfer(transferEvent2);

  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "vault", vaultAddress);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "user", from);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "amount", toDecimal(preValue).toString());

  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, toUserId, "vault", vaultAddress);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, toUserId, "user", to);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, toUserId, "amount", toDecimal(BIGINT_ZERO).toString());

  clearStore();
})

test("Transfer from zero address does not update sender", () => {
  const to = ADDRESSES[1];

  const value = BigInt.fromI32(2);

  const mintEvent = TransferMockEvent(
    ZERO_ADDRESS, to, value
  );

  const vaultAddress = mintEvent.address.toHexString();
  const toUserId = generateId([to, vaultAddress]);


  //Mint 2 to to
  handleTransfer(mintEvent);

  assert.notInStore(USER_FNFT_COLLECTION_ENTITY, ZERO_ADDRESS)

  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, toUserId, "vault", vaultAddress);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, toUserId, "user", to);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, toUserId, "amount", toDecimal(value).toString());

  clearStore();
})

test("Transfer to zero address does not update receiver", () => {
  const from = ADDRESSES[0];

  const preValue = BigInt.fromI32(2);

  const preTransferEvent = TransferMockEvent(
    ZERO_ADDRESS, from, preValue
  );

  const vaultAddress = preTransferEvent.address.toHexString();
  const fromUserId = generateId([from, vaultAddress]);

  //Mint 2 to from
  handleTransfer(preTransferEvent);

  const value = BigInt.fromI32(2);

  const burnEvent = TransferMockEvent(
    from, ZERO_ADDRESS, value
  );

  //Burn 2 from from
  handleTransfer(burnEvent);

  assert.notInStore(USER_FNFT_COLLECTION_ENTITY, ZERO_ADDRESS)

  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "vault", vaultAddress);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "user", from);
  assert.fieldEquals(USER_FNFT_COLLECTION_ENTITY, fromUserId, "amount", toDecimal(BIGINT_ZERO).toString());

  clearStore();
})