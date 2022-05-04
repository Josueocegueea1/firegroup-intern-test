import findFrequent from "../findFrequent";

it("findFrequent([3, 7, 3]) ➞ 3", () => {
  const result: any = findFrequent([3, 7, 3]);
  expect(result).toEqual(3);
});

it(`findFrequent([null, "hello", true, null]) ➞ null`, () => {
  const result: any = findFrequent([null, "hello", true, null]);
  expect(result).toEqual(null);
});

it(`findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false`, () => {
  const result: any = findFrequent([
    false,
    "up",
    "down",
    "left",
    "right",
    true,
    false,
  ]);
  expect(result).toEqual(false);
});
