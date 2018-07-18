import { removeAt, shuffle, split } from './array';

describe('Functional', () => {
    describe('array', () => {
        describe('removeAt', () => {
            it('should remove specified number of elements at specified index', () => {
                const array = [0, 1, 2, 3, 4, 5];
                const removed = removeAt(array, 2, 2);
    
                expect(removed).not.toBe(array);
                expect(removed).toEqual([0, 1, 4, 5]);
            });
        });

        describe('shuffle', () => {
            it('should shuffle an array', () => {
                const array = [0, 1, 2];
                const shuffled = shuffle(array);
    
                expect(shuffled).not.toBe(array);
                expect(shuffled).not.toEqual(array);
                expect(shuffled).toContain(array[0]);
                expect(shuffled).toContain(array[1]);
                expect(shuffled).toContain(array[2]);
            });
        });

        describe('split', () => {
            it('should split an array in two according to specified condition', () => {
                const array = [1, 2, 3, 4];
                const splits = split(array, n => n > 2);
                const [ greater, lesser ] = splits;
    
                expect(splits).not.toBe(array);
                expect(lesser).toEqual([1, 2]);
                expect(greater).toEqual([3, 4]);
            });
        });
    });
});
