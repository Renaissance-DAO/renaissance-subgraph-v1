// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class FNFTCollection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FNFTCollection entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FNFTCollection must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FNFTCollection", id.toString(), this);
    }
  }

  static load(id: string): FNFTCollection | null {
    return changetype<FNFTCollection | null>(store.get("FNFTCollection", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vaultId(): BigInt {
    let value = this.get("vaultId");
    return value!.toBigInt();
  }

  set vaultId(value: BigInt) {
    this.set("vaultId", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get curator(): string {
    let value = this.get("curator");
    return value!.toString();
  }

  set curator(value: string) {
    this.set("curator", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get nftAddress(): string {
    let value = this.get("nftAddress");
    return value!.toString();
  }

  set nftAddress(value: string) {
    this.set("nftAddress", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value!.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }

  get state(): string {
    let value = this.get("state");
    return value!.toString();
  }

  set state(value: string) {
    this.set("state", Value.fromString(value));
  }
}

export class FNFTCollectionItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FNFTCollectionItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FNFTCollectionItem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FNFTCollectionItem", id.toString(), this);
    }
  }

  static load(id: string): FNFTCollectionItem | null {
    return changetype<FNFTCollectionItem | null>(
      store.get("FNFTCollectionItem", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value!.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get depositor(): string {
    let value = this.get("depositor");
    return value!.toString();
  }

  set depositor(value: string) {
    this.set("depositor", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get latestBid(): BigDecimal {
    let value = this.get("latestBid");
    return value!.toBigDecimal();
  }

  set latestBid(value: BigDecimal) {
    this.set("latestBid", Value.fromBigDecimal(value));
  }

  get highestBid(): BigDecimal {
    let value = this.get("highestBid");
    return value!.toBigDecimal();
  }

  set highestBid(value: BigDecimal) {
    this.set("highestBid", Value.fromBigDecimal(value));
  }

  get state(): string {
    let value = this.get("state");
    return value!.toString();
  }

  set state(value: string) {
    this.set("state", Value.fromString(value));
  }

  get latestBidAt(): BigInt {
    let value = this.get("latestBidAt");
    return value!.toBigInt();
  }

  set latestBidAt(value: BigInt) {
    this.set("latestBidAt", Value.fromBigInt(value));
  }

  get auctionWinner(): string | null {
    let value = this.get("auctionWinner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auctionWinner(value: string | null) {
    if (!value) {
      this.unset("auctionWinner");
    } else {
      this.set("auctionWinner", Value.fromString(<string>value));
    }
  }
}

export class FNFTCollectionItemBidHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save FNFTCollectionItemBidHistory entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FNFTCollectionItemBidHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FNFTCollectionItemBidHistory", id.toString(), this);
    }
  }

  static load(id: string): FNFTCollectionItemBidHistory | null {
    return changetype<FNFTCollectionItemBidHistory | null>(
      store.get("FNFTCollectionItemBidHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get item(): string {
    let value = this.get("item");
    return value!.toString();
  }

  set item(value: string) {
    this.set("item", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class UserFNFTCollection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserFNFTCollection entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserFNFTCollection must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserFNFTCollection", id.toString(), this);
    }
  }

  static load(id: string): UserFNFTCollection | null {
    return changetype<UserFNFTCollection | null>(
      store.get("UserFNFTCollection", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value!.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value!.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }
}
