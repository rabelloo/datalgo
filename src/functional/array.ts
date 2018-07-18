export function removeAt<T>(array: T[], index: number, length = 1): T[] {
    const before = array.slice(0, index);
    const after = array.slice(index + length);

    return [ ...before, ...after ];
}

// TODO: refactor
export function shuffle<T>(array: T[]): T[] {
    const clone = array.slice();

    for (let i = clone.length - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[newIndex]] = [clone[newIndex], clone[i]];
    }

    return clone;
}

export function split<T>(array: T[], condition: (element: T, index: number, array: T[]) => boolean): T[][] {
    const satisfies: T[] = [];
    const rest: T[] = [];

    array.forEach((element, index) =>
        condition(element, index, array)
            ? satisfies.push(element)
            : rest.push(element),
    );

    return [ satisfies, rest ];
}
