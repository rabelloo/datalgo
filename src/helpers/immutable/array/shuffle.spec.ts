import { create } from '../../utils/array';
import { shuffle } from './shuffle';

describe('immutable', () => {
  describe('array', () => {
    describe('shuffle', () => {
      it('should shuffle an array', () => {
        const array = create(10);

        // do it twice to reduce the probability of an equal array
        const actual = shuffle(shuffle(array));

        expect(actual).not.toBe(array);
        expect(actual).not.toEqual(array);
        expect(actual).toHaveLength(array.length);

        array.forEach(num => expect(actual).toContain(num));
      });
    });
  });
});
