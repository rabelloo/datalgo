import { shuffle } from '../functional/array';
import { createArray } from '../../utils';
import { quickSort } from './quicksort';

describe('Algorithms', () => {
    describe('quick sort', () => {
        it('should sort a shuffled array', () => {
            const array = createArray();
            const shuffled = shuffle(array);
            const sorted = quickSort(shuffled);
    
            expect(shuffled).not.toEqual(array);
            expect(sorted).toEqual(array);
        });
    });
});
