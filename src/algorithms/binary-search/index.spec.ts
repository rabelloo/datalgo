import { binarySearch } from './index';

describe('algorithms', () => {
  describe('binary-search', () => {
    it('should return -1 when the array is empty', () => {
      const index = binarySearch([], 1);

      expect(index).toBe(-1);
    });

    it('should return -1 when the array does not contain the value', () => {
      const value = 5;
      const array = [1, 2, 3, 4, 6, 7, 8, 9];

      const index = binarySearch(array, value);

      expect(index).toBe(-1);
    });

    it('should return the index of the value in the array when found', () => {
      const array = [-5321, -35, 3, 12, 53, 123, 859, 53218];
      const value = array[3];

      const index = binarySearch(array, value);

      expect(index).toBe(array.indexOf(value));
    });
  });
});
