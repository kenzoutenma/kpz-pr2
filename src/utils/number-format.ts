import { config } from '../config';
import type { NumberFormatOptions } from '../types/number-format';

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? config.APP_PRECISION;
  return value.toFixed(precision);
}
