import { create } from './create';

describe('utils', () => {
    describe('array', () => {
        describe('create', () => {
            it('should return an array of length 10 (default) that increments by 1 (default)', () => {
                const actual = create();

                expect(actual).toHaveLength(10);

                actual.forEach((num, index) =>
                    expect(num).toBe(index));
            });

            it('should return an array of length 5 that increments by 1 (default)', () => {
                const length = 5;

                const actual = create(length);

                expect(actual).toHaveLength(length);

                actual.forEach((num, index) =>
                    expect(num).toBe(index));
            });

            it('should return an array of length 5 that increments by 2', () => {
                const length = 5;
                const increment = 2;

                const actual = create(length, increment);

                expect(actual).toHaveLength(length);

                actual.forEach((num, index) =>
                    expect(num).toBe(index * 2));
            });
        });
    });
});
