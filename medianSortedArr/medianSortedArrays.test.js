const medianSortedArr = require("./medianSortedArrays");

describe("median for two sorted arrays", () => {
  test("first test", () => {
    const inputArr1 = [1, 3];
    const inputArr2 = [2];
    const output = 2;
    expect(medianSortedArr(inputArr1, inputArr2)).toEqual(output);
  });
  test("first test", () => {
    const inputArr1 = [1, 2];
    const inputArr2 = [3, 4];
    const output = 2.5;
    expect(medianSortedArr(inputArr1, inputArr2)).toEqual(output);
  });
});
