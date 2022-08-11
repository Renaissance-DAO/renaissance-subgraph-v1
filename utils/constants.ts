import { BigDecimal, BigInt } from '@graphprotocol/graph-ts';

export const DEFAULT_DECIMALS = 18;
export let BIGINT_ZERO = BigInt.fromI32(0);
export let BIGDECIMAL_ZERO = new BigDecimal(BIGINT_ZERO);
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

// FNFT state enum
export const PUBLIC = 'public'
export const AUCTION = 'auction'
export const WON = 'won'
export const REDEEMED = 'redeemed'