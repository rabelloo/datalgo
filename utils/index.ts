export function perf(fn: () => any, times = 1000): number {
  const start = performance.now();

  for (let i = 0; i < times; i++) {
    fn();
  }

  return performance.now() - start;
}
