import { createEmpty } from './createEmpty';

/**
 * Returns an Array of specified length filled incrementally from 0
 *
 * @param length Array length, defaults to 10
 * @param increment Increment per iteration, defaults to 1
 */
export function create(length = 10, increment = 1): number[] {
  return createEmpty(length)
    .fill(null)
    .map((_, i) => i * increment);
}
