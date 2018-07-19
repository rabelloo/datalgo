# datalgo
Data structures and algorithms in TypeScript


## Goal
Since JavaScript (or any other interpreted language, like Python, for that matter)
will inevitably be several times slower than any compiled language,
**the focus for this library is not performance**.

The goal, besides practicing Computer Science fundamentals in TypeScript,
is to implement each Algorithm or Data Structure in an **immutable**, **clean** way.

Nonetheless, performance is still prioritized at a reasonable level,
right after the two highlighted above, meaning each function
goes through a few implementation iterations and benchmarks
to make sure it is not terribly slow.
Generally, it goes like:

1. Research Algorithm or Data Structure definition
2. Read example pseudo-code and a visual representation
3. Create unit tests for the function to be implemented
4. Implement both, in the order of what makes most sense, until it passes tests:
    - Imperative programming (for loops and so on)
    - Functional alternative
6. Benchmark both and compare
7. Reach a final implementation that combines the best of each approach, prioritizing, in order:
    - Immutability
    - Cleanliness
    - Performance


### Immutability
Immutability is limited to the exposed API, which means that
each function internals may use some mutable helpers.
If every operation was done immutably, performance would be
severely affected.

**E.g. array position swap operations:**
``` JavaScript
[ array[from], array[to] ] = [ array[to], array[from] ];

// is much faster and clean than

const [ smaller, bigger ] = from < to ? [from, to] : [to, from];

[
    ...array.slice(0, smaller),
    bigger,
    ...array.slice(smaller + 1, bigger),
    smaller,
    ...array.slice(bigger + 1),
];

// the mutable (first) approach has a fixed speed of 4 operations
// the immutable approach has an exponential speed proportional to the array length
// with 100,000 elements the difference is absurd:
// > mutable: .1ms to .2ms
// > immutable: ~5000ms / ~5s
```

However, immutable operations and functions that can be used
without compromising neither performance nor code general cleanliness
are preferred, e.g. [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
