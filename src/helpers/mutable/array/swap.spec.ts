import { swap } from './swap';

describe('mutable', () => {
  describe('array', () => {
    describe('swap', () => {
      it('should swap two elements in an array', () => {
        const array = [1, 9];

        swap(array, 0, 1);

        expect(array).toEqual([9, 1]);
      });
    });
  });
});
