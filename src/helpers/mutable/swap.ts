/**
 * Swaps two elements in an Array
 *
 * @param array Array to swap elements on
 * @param from Index to swap from
 * @param to Index to swap to
 */
export function swap<T>(array: T[], from: number, to: number): void {
    [array[from], array[to]] = [array[to], array[from]];
}
