export function perf(fn, times = 1000) {
    const start = performance.now();

    for (let i = 0; i < times; i++) {
        fn();
    }

    return performance.now() - start;
}

export function createArray(size = 10, increment = 1) {
    return Array(size)
        .fill(null)
        .map((n, i) => i * increment);
}
