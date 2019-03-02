import { shuffle } from './shuffle';

describe('immutable', () => {
  describe('array', () => {
    describe('shuffle', () => {
      it('should shuffle an array', () => {
        const array = [0, 1, 2, 3];

        const actual = shuffle(array);

        expect(actual).not.toBe(array);
        expect(actual).not.toEqual(array);
        expect(actual).toHaveLength(array.length);

        array.forEach(num => expect(actual).toContain(num));
      });
    });
  });
});
