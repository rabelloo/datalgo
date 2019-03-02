import { shuffle } from '../../helpers/immutable/array';
import { create } from '../../helpers/utils/array';
import { insertionSort } from './insertion';

describe('algorithms', () => {
  describe('sort', () => {
    describe('insertion', () => {
      it('should sort a shuffled array', () => {
        const array = create();
        const shuffled = shuffle(array);

        const sorted = insertionSort(shuffled);

        expect(sorted).toEqual(array);
      });
    });
  });
});
