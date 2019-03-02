/**
 * Returns the index of the specified value in a sorted array
 *
 * @param array Array to search
 * @param value Value to find
 */
export function binarySearch<T extends number>(array: T[], value: T): number {
  if (!array.length) {
    return -1;
  }

  const index = Math.floor(array.length / 2);
  const current = array[index];

  if (current === value) {
    return index;
  }

  if (value > current) {
    const innerIndex = binarySearch(array.slice(index + 1), value);
    return innerIndex < 0 ? -1 : index + innerIndex + 1;
  } else {
    return binarySearch(array.slice(0, index), value);
  }
}
