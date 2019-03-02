import { createEmpty } from './createEmpty';

describe('utils', () => {
  describe('array', () => {
    describe('createEmpty', () => {
      it('should return an empty array of length 10 (default)', () => {
        const actual = createEmpty();

        expect(actual).toHaveLength(10);
        expect(Object.keys(actual)).toHaveLength(0);
      });

      it('should return an empty array of specified length', () => {
        const length = 5;

        const actual = createEmpty(length);

        expect(actual).toHaveLength(length);
        expect(Object.keys(actual)).toHaveLength(0);
      });
    });
  });
});
