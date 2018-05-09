export function removeAt(array, index, length = 1) {
    const before = array.slice(0, index);
    const after = array.slice(index + 1);

    return before.concat(after);
}

export function split(array, condition) {
    const satisfies = [];
    const rest = [];

    array.forEach((element, index) =>
        condition(element, index, array)
            ? satisfies.push(element)
            : rest.push(element)
    );

    return [satisfies, rest];
}

// TODO: refactor
export function shuffle(a) {
    const array = a.slice();

    for (let i = array.length - 1; i > 0; i--) {
        let newIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[newIndex]] = [array[newIndex], array[i]];
    }
    
    return array;
}
