import { random } from './random';

describe('utils', () => {
    describe('random', () => {
        it('should return a random number between 0 and 1 (default)', () => {
            const num = random();

            expect(num).toBeGreaterThanOrEqual(0);
            expect(num).toBeLessThanOrEqual(1);
        });

        it('should return a random number between 0 and specified limit', () => {
            const limit = 10;

            const num = random(limit);

            expect(num).toBeGreaterThanOrEqual(0);
            expect(num).toBeLessThanOrEqual(limit);
        });
    });
});
