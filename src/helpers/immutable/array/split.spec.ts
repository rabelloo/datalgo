import { split } from './split';

describe('immutable', () => {
    describe('array', () => {
        describe('split', () => {
            it('should split an array in halves according to specified condition', () => {
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
