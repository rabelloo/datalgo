/**
 * Returns an Array with halves
 * of elements that satisfy the specified condition
 * and the rest
 *
 * @param array Array to shuffle
 *
 * @example split([0, 1, 2], n => n > 0) // [ [1, 2], [0] ]
 */
export function split<T>(
  array: T[],
  condition: (element: T, index: number, array: T[]) => boolean
): T[][] {
  return array.reduce(
    (all, element, index) => (
      all[+!condition(element, index, array)].push(element), all
    ),
    [[], []] as [T[], T[]]
  );
}
