import { swap } from '../../mutable/array/swap';
import { random } from '../../utils';

/**
 * Returns a shuffled version of specified Array
 *
 * @param array Array to shuffle
 */
export function shuffle<T>(array: T[]): T[] {
    return array.reduce((shuffled, _, index) =>
        ( swap(shuffled, index, random(array.length - 1)), shuffled)
    , array.slice());
}
