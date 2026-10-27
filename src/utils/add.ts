export function add(values: number[]): number {
  return values.reduce((acc, x) => acc + x, 0);
}
