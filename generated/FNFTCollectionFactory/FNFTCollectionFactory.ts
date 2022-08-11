// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class EligibilityManagerUpdated extends ethereum.Event {
  get params(): EligibilityManagerUpdated__Params {
    return new EligibilityManagerUpdated__Params(this);
  }
}

export class EligibilityManagerUpdated__Params {
  _event: EligibilityManagerUpdated;

  constructor(event: EligibilityManagerUpdated) {
    this._event = event;
  }

  get oldEligManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newEligManager(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class FactoryFeesUpdated extends ethereum.Event {
  get params(): FactoryFeesUpdated__Params {
    return new FactoryFeesUpdated__Params(this);
  }
}

export class FactoryFeesUpdated__Params {
  _event: FactoryFeesUpdated;

  constructor(event: FactoryFeesUpdated) {
    this._event = event;
  }

  get mintFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get randomRedeemFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get targetRedeemFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get randomSwapFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get targetSwapFee(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get flashLoanFee(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class FactoryThresholdsUpdated extends ethereum.Event {
  get params(): FactoryThresholdsUpdated__Params {
    return new FactoryThresholdsUpdated__Params(this);
  }
}

export class FactoryThresholdsUpdated__Params {
  _event: FactoryThresholdsUpdated;

  constructor(event: FactoryThresholdsUpdated) {
    this._event = event;
  }

  get maxAuctionLength(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get minAuctionLength(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get minBidIncrease(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FeeDistributorUpdated extends ethereum.Event {
  get params(): FeeDistributorUpdated__Params {
    return new FeeDistributorUpdated__Params(this);
  }
}

export class FeeDistributorUpdated__Params {
  _event: FeeDistributorUpdated;

  constructor(event: FeeDistributorUpdated) {
    this._event = event;
  }

  get oldFeeDistributor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newFeeDistributor(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class FeeExclusionUpdated extends ethereum.Event {
  get params(): FeeExclusionUpdated__Params {
    return new FeeExclusionUpdated__Params(this);
  }
}

export class FeeExclusionUpdated__Params {
  _event: FeeExclusionUpdated;

  constructor(event: FeeExclusionUpdated) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get excluded(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PriceOracleUpdated extends ethereum.Event {
  get params(): PriceOracleUpdated__Params {
    return new PriceOracleUpdated__Params(this);
  }
}

export class PriceOracleUpdated__Params {
  _event: PriceOracleUpdated;

  constructor(event: PriceOracleUpdated) {
    this._event = event;
  }

  get oldPriceOracle(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newPriceOracle(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SetIsGuardian extends ethereum.Event {
  get params(): SetIsGuardian__Params {
    return new SetIsGuardian__Params(this);
  }
}

export class SetIsGuardian__Params {
  _event: SetIsGuardian;

  constructor(event: SetIsGuardian) {
    this._event = event;
  }

  get addr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isGuardian(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class SetPaused extends ethereum.Event {
  get params(): SetPaused__Params {
    return new SetPaused__Params(this);
  }
}

export class SetPaused__Params {
  _event: SetPaused;

  constructor(event: SetPaused) {
    this._event = event;
  }

  get lockId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get paused(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get childImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class VaultCreated extends ethereum.Event {
  get params(): VaultCreated__Params {
    return new VaultCreated__Params(this);
  }
}

export class VaultCreated__Params {
  _event: VaultCreated;

  constructor(event: VaultCreated) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get curator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get vaultAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[4].value.toString();
  }

  get symbol(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class VaultFeesDisabled extends ethereum.Event {
  get params(): VaultFeesDisabled__Params {
    return new VaultFeesDisabled__Params(this);
  }
}

export class VaultFeesDisabled__Params {
  _event: VaultFeesDisabled;

  constructor(event: VaultFeesDisabled) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class VaultFeesUpdated extends ethereum.Event {
  get params(): VaultFeesUpdated__Params {
    return new VaultFeesUpdated__Params(this);
  }
}

export class VaultFeesUpdated__Params {
  _event: VaultFeesUpdated;

  constructor(event: VaultFeesUpdated) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get mintFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get randomRedeemFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get targetRedeemFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get randomSwapFee(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get targetSwapFee(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class FNFTCollectionFactory__vaultFeesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }

  getValue3(): BigInt {
    return this.value3;
  }

  getValue4(): BigInt {
    return this.value4;
  }
}

export class FNFTCollectionFactory extends ethereum.SmartContract {
  static bind(address: Address): FNFTCollectionFactory {
    return new FNFTCollectionFactory("FNFTCollectionFactory", address);
  }

  childImplementation(): Address {
    let result = super.call(
      "childImplementation",
      "childImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_childImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "childImplementation",
      "childImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createVault(
    _assetAddress: Address,
    is1155: boolean,
    allowAllItems: boolean,
    _name: string,
    _symbol: string
  ): Address {
    let result = super.call(
      "createVault",
      "createVault(address,bool,bool,string,string):(address)",
      [
        ethereum.Value.fromAddress(_assetAddress),
        ethereum.Value.fromBoolean(is1155),
        ethereum.Value.fromBoolean(allowAllItems),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_symbol)
      ]
    );

    return result[0].toAddress();
  }

  try_createVault(
    _assetAddress: Address,
    is1155: boolean,
    allowAllItems: boolean,
    _name: string,
    _symbol: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createVault",
      "createVault(address,bool,bool,string,string):(address)",
      [
        ethereum.Value.fromAddress(_assetAddress),
        ethereum.Value.fromBoolean(is1155),
        ethereum.Value.fromBoolean(allowAllItems),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_symbol)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  eligibilityManager(): Address {
    let result = super.call(
      "eligibilityManager",
      "eligibilityManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_eligibilityManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "eligibilityManager",
      "eligibilityManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  factoryMintFee(): BigInt {
    let result = super.call("factoryMintFee", "factoryMintFee():(uint64)", []);

    return result[0].toBigInt();
  }

  try_factoryMintFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "factoryMintFee",
      "factoryMintFee():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factoryRandomRedeemFee(): BigInt {
    let result = super.call(
      "factoryRandomRedeemFee",
      "factoryRandomRedeemFee():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_factoryRandomRedeemFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "factoryRandomRedeemFee",
      "factoryRandomRedeemFee():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factoryRandomSwapFee(): BigInt {
    let result = super.call(
      "factoryRandomSwapFee",
      "factoryRandomSwapFee():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_factoryRandomSwapFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "factoryRandomSwapFee",
      "factoryRandomSwapFee():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factoryTargetRedeemFee(): BigInt {
    let result = super.call(
      "factoryTargetRedeemFee",
      "factoryTargetRedeemFee():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_factoryTargetRedeemFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "factoryTargetRedeemFee",
      "factoryTargetRedeemFee():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factoryTargetSwapFee(): BigInt {
    let result = super.call(
      "factoryTargetSwapFee",
      "factoryTargetSwapFee():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_factoryTargetSwapFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "factoryTargetSwapFee",
      "factoryTargetSwapFee():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  flashLoanFee(): BigInt {
    let result = super.call("flashLoanFee", "flashLoanFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_flashLoanFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("flashLoanFee", "flashLoanFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isGuardian(param0: Address): boolean {
    let result = super.call("isGuardian", "isGuardian(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isGuardian(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isGuardian", "isGuardian(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPaused(param0: BigInt): boolean {
    let result = super.call("isPaused", "isPaused(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isPaused(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaused", "isPaused(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxAuctionLength(): BigInt {
    let result = super.call(
      "maxAuctionLength",
      "maxAuctionLength():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxAuctionLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxAuctionLength",
      "maxAuctionLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minAuctionLength(): BigInt {
    let result = super.call(
      "minAuctionLength",
      "minAuctionLength():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minAuctionLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minAuctionLength",
      "minAuctionLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minBidIncrease(): BigInt {
    let result = super.call("minBidIncrease", "minBidIncrease():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minBidIncrease(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minBidIncrease",
      "minBidIncrease():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vaultFees(vaultId: BigInt): FNFTCollectionFactory__vaultFeesResult {
    let result = super.call(
      "vaultFees",
      "vaultFees(uint256):(uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(vaultId)]
    );

    return new FNFTCollectionFactory__vaultFeesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_vaultFees(
    vaultId: BigInt
  ): ethereum.CallResult<FNFTCollectionFactory__vaultFeesResult> {
    let result = super.tryCall(
      "vaultFees",
      "vaultFees(uint256):(uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(vaultId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FNFTCollectionFactory__vaultFeesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  vaultManager(): Address {
    let result = super.call("vaultManager", "vaultManager():(address)", []);

    return result[0].toAddress();
  }

  try_vaultManager(): ethereum.CallResult<Address> {
    let result = super.tryCall("vaultManager", "vaultManager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class __BeaconUpgradeable__initCall extends ethereum.Call {
  get inputs(): __BeaconUpgradeable__initCall__Inputs {
    return new __BeaconUpgradeable__initCall__Inputs(this);
  }

  get outputs(): __BeaconUpgradeable__initCall__Outputs {
    return new __BeaconUpgradeable__initCall__Outputs(this);
  }
}

export class __BeaconUpgradeable__initCall__Inputs {
  _call: __BeaconUpgradeable__initCall;

  constructor(call: __BeaconUpgradeable__initCall) {
    this._call = call;
  }

  get childImplementation_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class __BeaconUpgradeable__initCall__Outputs {
  _call: __BeaconUpgradeable__initCall;

  constructor(call: __BeaconUpgradeable__initCall) {
    this._call = call;
  }
}

export class __FNFTCollectionFactory_initCall extends ethereum.Call {
  get inputs(): __FNFTCollectionFactory_initCall__Inputs {
    return new __FNFTCollectionFactory_initCall__Inputs(this);
  }

  get outputs(): __FNFTCollectionFactory_initCall__Outputs {
    return new __FNFTCollectionFactory_initCall__Outputs(this);
  }
}

export class __FNFTCollectionFactory_initCall__Inputs {
  _call: __FNFTCollectionFactory_initCall;

  constructor(call: __FNFTCollectionFactory_initCall) {
    this._call = call;
  }

  get _vaultManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _fnftCollection(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class __FNFTCollectionFactory_initCall__Outputs {
  _call: __FNFTCollectionFactory_initCall;

  constructor(call: __FNFTCollectionFactory_initCall) {
    this._call = call;
  }
}

export class CreateVaultCall extends ethereum.Call {
  get inputs(): CreateVaultCall__Inputs {
    return new CreateVaultCall__Inputs(this);
  }

  get outputs(): CreateVaultCall__Outputs {
    return new CreateVaultCall__Outputs(this);
  }
}

export class CreateVaultCall__Inputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get _assetAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get is1155(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get allowAllItems(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _name(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class CreateVaultCall__Outputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DisableVaultFeesCall extends ethereum.Call {
  get inputs(): DisableVaultFeesCall__Inputs {
    return new DisableVaultFeesCall__Inputs(this);
  }

  get outputs(): DisableVaultFeesCall__Outputs {
    return new DisableVaultFeesCall__Outputs(this);
  }
}

export class DisableVaultFeesCall__Inputs {
  _call: DisableVaultFeesCall;

  constructor(call: DisableVaultFeesCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DisableVaultFeesCall__Outputs {
  _call: DisableVaultFeesCall;

  constructor(call: DisableVaultFeesCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }

  get lockId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetEligibilityManagerCall extends ethereum.Call {
  get inputs(): SetEligibilityManagerCall__Inputs {
    return new SetEligibilityManagerCall__Inputs(this);
  }

  get outputs(): SetEligibilityManagerCall__Outputs {
    return new SetEligibilityManagerCall__Outputs(this);
  }
}

export class SetEligibilityManagerCall__Inputs {
  _call: SetEligibilityManagerCall;

  constructor(call: SetEligibilityManagerCall) {
    this._call = call;
  }

  get _eligibilityManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetEligibilityManagerCall__Outputs {
  _call: SetEligibilityManagerCall;

  constructor(call: SetEligibilityManagerCall) {
    this._call = call;
  }
}

export class SetFactoryFeesCall extends ethereum.Call {
  get inputs(): SetFactoryFeesCall__Inputs {
    return new SetFactoryFeesCall__Inputs(this);
  }

  get outputs(): SetFactoryFeesCall__Outputs {
    return new SetFactoryFeesCall__Outputs(this);
  }
}

export class SetFactoryFeesCall__Inputs {
  _call: SetFactoryFeesCall;

  constructor(call: SetFactoryFeesCall) {
    this._call = call;
  }

  get _factoryMintFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _factoryRandomRedeemFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _factoryTargetRedeemFee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _factoryRandomSwapFee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _factoryTargetSwapFee(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _flashLoanFee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class SetFactoryFeesCall__Outputs {
  _call: SetFactoryFeesCall;

  constructor(call: SetFactoryFeesCall) {
    this._call = call;
  }
}

export class SetFactoryThresholdsCall extends ethereum.Call {
  get inputs(): SetFactoryThresholdsCall__Inputs {
    return new SetFactoryThresholdsCall__Inputs(this);
  }

  get outputs(): SetFactoryThresholdsCall__Outputs {
    return new SetFactoryThresholdsCall__Outputs(this);
  }
}

export class SetFactoryThresholdsCall__Inputs {
  _call: SetFactoryThresholdsCall;

  constructor(call: SetFactoryThresholdsCall) {
    this._call = call;
  }

  get _maxAuctionLength(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _minAuctionLength(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minBidIncrease(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetFactoryThresholdsCall__Outputs {
  _call: SetFactoryThresholdsCall;

  constructor(call: SetFactoryThresholdsCall) {
    this._call = call;
  }
}

export class SetIsGuardianCall extends ethereum.Call {
  get inputs(): SetIsGuardianCall__Inputs {
    return new SetIsGuardianCall__Inputs(this);
  }

  get outputs(): SetIsGuardianCall__Outputs {
    return new SetIsGuardianCall__Outputs(this);
  }
}

export class SetIsGuardianCall__Inputs {
  _call: SetIsGuardianCall;

  constructor(call: SetIsGuardianCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _isGuardian(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetIsGuardianCall__Outputs {
  _call: SetIsGuardianCall;

  constructor(call: SetIsGuardianCall) {
    this._call = call;
  }
}

export class SetVaultFeesCall extends ethereum.Call {
  get inputs(): SetVaultFeesCall__Inputs {
    return new SetVaultFeesCall__Inputs(this);
  }

  get outputs(): SetVaultFeesCall__Outputs {
    return new SetVaultFeesCall__Outputs(this);
  }
}

export class SetVaultFeesCall__Inputs {
  _call: SetVaultFeesCall;

  constructor(call: SetVaultFeesCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _mintFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _randomRedeemFee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _targetRedeemFee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _randomSwapFee(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _targetSwapFee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class SetVaultFeesCall__Outputs {
  _call: SetVaultFeesCall;

  constructor(call: SetVaultFeesCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }

  get lockId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpgradeChildToCall extends ethereum.Call {
  get inputs(): UpgradeChildToCall__Inputs {
    return new UpgradeChildToCall__Inputs(this);
  }

  get outputs(): UpgradeChildToCall__Outputs {
    return new UpgradeChildToCall__Outputs(this);
  }
}

export class UpgradeChildToCall__Inputs {
  _call: UpgradeChildToCall;

  constructor(call: UpgradeChildToCall) {
    this._call = call;
  }

  get newChildImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeChildToCall__Outputs {
  _call: UpgradeChildToCall;

  constructor(call: UpgradeChildToCall) {
    this._call = call;
  }
}
