/**
 * Returns a random number between 0 and the specified limit
 *
 * @param limit Maximum number allowed, defaults to 1
 */
export function random(limit = 1): number {
    return Math.round(Math.random() * limit);
}
