/**
 * Returns a new Array without the elements on the specified range
 *
 * @param array Array to remove elements from
 * @param index Index to start removing
 * @param length Amount of elements to remove, defaults to 1
 */
export function removeAt<T>(array: T[], index: number, length = 1): T[] {
    return [
        ...array.slice(0, index),
        ...array.slice(index + length),
    ];
}
