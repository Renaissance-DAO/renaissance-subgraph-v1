import { BigDecimal, BigInt } from '@graphprotocol/graph-ts';
import { DEFAULT_DECIMALS } from './constants'

export function pow(base: BigDecimal, exponent: number): BigDecimal {
  let result = base;

  if (exponent == 0) {
    return BigDecimal.fromString('1');
  }

  for (let i = 2; i <= exponent; i++) {
    result = result.times(base);
  }

  return result;
}

export function toDecimal(
  value: BigInt,
  decimals: number = DEFAULT_DECIMALS,
): BigDecimal {
  let precision = BigInt.fromI32(10)
    .pow(<u8>decimals)
    .toBigDecimal();

  return value.divDecimal(precision);
}

// create a composite ID by joining multiple IDs with a hyphen. e.g. Epoch-Member
export function generateId(fields: Array<string>): string {
  return fields.join('-');
}