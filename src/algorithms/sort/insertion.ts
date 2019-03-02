/**
 * Returns a sorted version of the specified array
 *
 * @param array Array to sort
 */
export function insertionSort<T>(array: T[]): T[] {
  return array.reduce((sorted, current, index) => {
    const previous = () => sorted[index - 1];

    while (index > 0 && previous() > current) {
      sorted[index] = sorted[--index];
    }

    sorted[index] = current;

    return sorted;
  }, array.slice());
}
