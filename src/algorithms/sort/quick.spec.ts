import { shuffle } from '../../helpers/immutable/array';
import { create } from '../../helpers/utils/array';
import { quickSort } from './quick';

describe('algorithms', () => {
  describe('sort', () => {
    describe('quick', () => {
      it('should sort a shuffled array', () => {
        const array = create();
        const shuffled = shuffle(array);

        const actual = quickSort(shuffled);

        expect(actual).toEqual(array);
      });
    });
  });
});
