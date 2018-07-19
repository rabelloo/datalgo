import { swap } from '../../helpers/mutable/array';

/**
 * Returns a sorted version of the specified array
 *
 * @param array Array to sort
 */
export function insertionSort<T>(array: T[]): T[] {
    return array.reduce((all, current, index) => {
        const previous = () => all[index - 1];

        while (previous() > current) {
            swap(all, index, --index);
        }

        return all;
    }, array.slice());
}
