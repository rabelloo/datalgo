export function perf(fn: () => any, times = 1000): number {
    const start = performance.now();

    for (let i = 0; i < times; i++) {
        fn();
    }

    return performance.now() - start;
}

export function createArray(size = 10, increment = 1): number[] {
    return Array(size)
        .fill(null)
        .map((n, i) => i * increment);
}
