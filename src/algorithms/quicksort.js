import { removeAt, split } from '../functional/array';

export function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    const pivotIndex = findPivotIndex(array);
    const [ pivot, smaller, bigger ] = partition(array, pivotIndex);

    return quickSort(smaller)
        .concat(
            pivot,
            quickSort(bigger)
        );
}

function findPivotIndex(array) {
    return Math.floor(array.length / 2);
}

function partition(array, pivotIndex) {
    const pivot = array[pivotIndex];
    const exceptPivot = removeAt(array, pivotIndex);
    const [ smaller, bigger ] = split(exceptPivot, e => e < pivot);

    return [ pivot, smaller, bigger ];
}
