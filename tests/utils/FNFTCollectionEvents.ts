import { newMockEvent } from 'matchstick-as/assembly/index'
import { VaultCreated } from "../../generated/FNFTCollectionFactory/FNFTCollectionFactory";
import { Minted, Redeemed, Transfer, AuctionStarted, BidMade, AuctionWon } from "../../generated/templates/FNFTCollection/FNFTCollection";
import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";

export function VaultCreatedMockEvent(
  vaultId: BigInt,
  curator: string,
  vaultAddress: string,
  assetAddress: string,
  name: string,
  symbol: string
): VaultCreated {
  let mockEvent = newMockEvent();
  let vaultCreatedEvent = new VaultCreated(mockEvent.address, mockEvent.logIndex, mockEvent.transactionLogIndex,
    mockEvent.logType, mockEvent.block, mockEvent.transaction, mockEvent.parameters, mockEvent.receipt);

  let vaultIdParam = new ethereum.EventParam("vaultId", ethereum.Value.fromUnsignedBigInt(vaultId));
  let curatorParam = new ethereum.EventParam("curator", ethereum.Value.fromAddress(Address.fromString(curator)));
  let vaultAddressParam = new ethereum.EventParam("vaultAddress", ethereum.Value.fromAddress(Address.fromString(vaultAddress)));
  let assetAddressParam = new ethereum.EventParam("assetAddress", ethereum.Value.fromAddress(Address.fromString(assetAddress)));
  let nameParam = new ethereum.EventParam("name", ethereum.Value.fromString(name));
  let symbolParam = new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol));

  vaultCreatedEvent.parameters = new Array();
  vaultCreatedEvent.parameters.push(vaultIdParam);
  vaultCreatedEvent.parameters.push(curatorParam);
  vaultCreatedEvent.parameters.push(vaultAddressParam);
  vaultCreatedEvent.parameters.push(assetAddressParam);
  vaultCreatedEvent.parameters.push(nameParam);
  vaultCreatedEvent.parameters.push(symbolParam);

  return vaultCreatedEvent
}

export function MintedMockEvent(nftIds: Array<BigInt>, amounts: Array<BigInt>, to: string): Minted {
  let mockEvent = newMockEvent();
  let mintedEvent = new Minted(mockEvent.address, mockEvent.logIndex, mockEvent.transactionLogIndex,
    mockEvent.logType, mockEvent.block, mockEvent.transaction, mockEvent.parameters, mockEvent.receipt);

  let nftIdsParam = new ethereum.EventParam("nftIds", ethereum.Value.fromUnsignedBigIntArray(nftIds));
  let amountsParams = new ethereum.EventParam("amounts", ethereum.Value.fromUnsignedBigIntArray(amounts));
  let toParam = new ethereum.EventParam("to", ethereum.Value.fromAddress(Address.fromString(to)));

  mintedEvent.parameters = new Array();
  mintedEvent.parameters.push(nftIdsParam);
  mintedEvent.parameters.push(amountsParams);
  mintedEvent.parameters.push(toParam);

  return mintedEvent
}

export function RedeemedMockEvent(nftIds: Array<BigInt>, specificIds: Array<BigInt>, to: string): Redeemed {
  let mockEvent = newMockEvent();
  let redeemedEvent = new Redeemed(mockEvent.address, mockEvent.logIndex, mockEvent.transactionLogIndex,
    mockEvent.logType, mockEvent.block, mockEvent.transaction, mockEvent.parameters, mockEvent.receipt);

  let nftIdsParam = new ethereum.EventParam("nftIds", ethereum.Value.fromUnsignedBigIntArray(nftIds));
  let specificIdsParam = new ethereum.EventParam("specificIds", ethereum.Value.fromUnsignedBigIntArray(specificIds));
  let toParam = new ethereum.EventParam("to", ethereum.Value.fromAddress(Address.fromString(to)));

  redeemedEvent.parameters = new Array();
  redeemedEvent.parameters.push(nftIdsParam);
  redeemedEvent.parameters.push(specificIdsParam);
  redeemedEvent.parameters.push(toParam);

  return redeemedEvent
}

export function AuctionStartedMockEvent(buyer: string, tokenId: BigInt, price: BigInt): AuctionStarted {
  let mockEvent = newMockEvent();
  let auctionStartedEvent = new AuctionStarted(mockEvent.address, mockEvent.logIndex, mockEvent.transactionLogIndex,
    mockEvent.logType, mockEvent.block, mockEvent.transaction, mockEvent.parameters, mockEvent.receipt);

  let buyerParam = new ethereum.EventParam("buyer", ethereum.Value.fromAddress(Address.fromString(buyer)));
  let tokenIdParam = new ethereum.EventParam("tokenId", ethereum.Value.fromUnsignedBigInt(tokenId));
  let priceParam = new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price));

  auctionStartedEvent.parameters = new Array();
  auctionStartedEvent.parameters.push(buyerParam);
  auctionStartedEvent.parameters.push(tokenIdParam);
  auctionStartedEvent.parameters.push(priceParam);

  return auctionStartedEvent
}

export function BidMadeMockEvent(buyer: string, tokenId: BigInt, price: BigInt): BidMade {
  let mockEvent = newMockEvent();
  let bidMadeEvent = new BidMade(mockEvent.address, mockEvent.logIndex, mockEvent.transactionLogIndex,
    mockEvent.logType, mockEvent.block, mockEvent.transaction, mockEvent.parameters, mockEvent.receipt);

  let buyerParam = new ethereum.EventParam("buyer", ethereum.Value.fromAddress(Address.fromString(buyer)));
  let tokenIdParam = new ethereum.EventParam("tokenId", ethereum.Value.fromUnsignedBigInt(tokenId));
  let priceParam = new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price));

  bidMadeEvent.parameters = new Array();
  bidMadeEvent.parameters.push(buyerParam);
  bidMadeEvent.parameters.push(tokenIdParam);
  bidMadeEvent.parameters.push(priceParam);

  return bidMadeEvent
}

export function AuctionWonMockEvent(buyer: string, tokenId: BigInt, price: BigInt): AuctionWon {
  let mockEvent = newMockEvent();
  let auctionWonEvent = new AuctionWon(mockEvent.address, mockEvent.logIndex, mockEvent.transactionLogIndex,
    mockEvent.logType, mockEvent.block, mockEvent.transaction, mockEvent.parameters, mockEvent.receipt);

  let buyerParam = new ethereum.EventParam("buyer", ethereum.Value.fromAddress(Address.fromString(buyer)));
  let tokenIdParam = new ethereum.EventParam("tokenId", ethereum.Value.fromUnsignedBigInt(tokenId));
  let priceParam = new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price));

  auctionWonEvent.parameters = new Array();
  auctionWonEvent.parameters.push(buyerParam);
  auctionWonEvent.parameters.push(tokenIdParam);
  auctionWonEvent.parameters.push(priceParam);

  return auctionWonEvent
}

export function TransferMockEvent(from: string, to: string, value: BigInt): Transfer {
  let mockEvent = newMockEvent();
  let transferEvent = new Transfer(mockEvent.address, mockEvent.logIndex, mockEvent.transactionLogIndex,
    mockEvent.logType, mockEvent.block, mockEvent.transaction, mockEvent.parameters, mockEvent.receipt);

  let fromParam = new ethereum.EventParam("from", ethereum.Value.fromAddress(Address.fromString(from)));
  let toParam = new ethereum.EventParam("to", ethereum.Value.fromAddress(Address.fromString(to)));
  let valueParam = new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value));

  transferEvent.parameters = new Array();
  transferEvent.parameters.push(fromParam);
  transferEvent.parameters.push(toParam);
  transferEvent.parameters.push(valueParam);

  return transferEvent
}