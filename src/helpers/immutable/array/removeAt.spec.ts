import { removeAt } from './removeAt';

describe('immutable', () => {
    describe('array', () => {
        describe('removeAt', () => {
            it('should remove specified number of elements at specified index', () => {
                const array = [0, 1, 2, 3, 4, 5];
                const removed = removeAt(array, 2, 2);

                expect(removed).not.toBe(array);
                expect(removed).toEqual([0, 1, 4, 5]);
            });
        });
    });
});
