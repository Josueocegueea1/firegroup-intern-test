export function findMax5(numbers: number[]): number[] {
  return numbers.sort(decendinglyCompare).slice(0, 5);
}

function decendinglyCompare(a: number, b: number) {
  return b - a;
}
