import { quickSort } from './quicksort';
import { createArray } from '../utils';
import { shuffle } from '../functional/array';

describe('Quicksort algorithm', () => {
    it('should sort a shuffled array', () => {
        const array = createArray();
        const shuffled = shuffle(array);

        expect(array).not.toEqual( shuffled );
        expect(array).toEqual( quickSort(shuffled) );
    });
});
