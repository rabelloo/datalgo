import { removeAt, split } from '../functional/array';

export function quickSort<T>(array: T[]): T[] {
    if (array.length < 2) {
        return array;
    }

    const pivotIndex = findPivotIndex(array);
    const [ pivot, smaller, bigger ] = partition(array, pivotIndex);

    return [
        ...quickSort(smaller),
        pivot,
        ...quickSort(bigger),
    ];
}

function findPivotIndex<T>(array: T[]): number {
    return Math.floor(array.length / 2);
}

function partition<T>(array: T[], pivotIndex: number): any[] {
    const pivot = array[pivotIndex];
    const exceptPivot = removeAt(array, pivotIndex);
    const [ smaller, bigger ] = split(exceptPivot, (e) => e < pivot);

    return [ pivot, smaller, bigger ];
}
