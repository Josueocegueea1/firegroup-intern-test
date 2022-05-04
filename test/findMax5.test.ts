import { findMax5 } from "../findMax5";

it("Smoke test", () => {
  const result: number = 1 + 1;
  expect(result).toEqual(2);
});

it("findMax5([3,4,5,3,2,3,10,11]) => [11,10,5,4,3]", () => {
  const result: number[] = findMax5([3, 4, 5, 3, 2, 3, 10, 11]);
  expect(result).toEqual([11, 10, 5, 4, 3]);
});

it("findMax5([14,12,38,17,10,36,12,29,45,34,48,22]) => [48, 45, 38, 36, 34]", () => {
  const result: number[] = findMax5([
    14, 12, 38, 17, 10, 36, 12, 29, 45, 34, 48, 22,
  ]);
  expect(result).toEqual([48, 45, 38, 36, 34]);
});

it("findMax5([10,11,2,30,22,6,8,9,11,12,22]) => [30, 22, 22, 12, 11]", () => {
  const result: number[] = findMax5([10, 11, 2, 30, 22, 6, 8, 9, 11, 12, 22]);
  expect(result).toEqual([30, 22, 22, 12, 11]);
});
