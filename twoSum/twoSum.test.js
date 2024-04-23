const twoSum = require("./twoSum");

describe("twoSum problem", () => {
  test("for nums = [3,3], target = 6", () => {
    const input1 = [3, 3];
    const input2 = 6;
    const output = [0, 1];
    expect(twoSum(input1, input2)).toEqual(output);
  });
  test("for nums = [3,2,4], target = 6", () => {
    const input1 = [3, 2, 4];
    const input2 = 6;
    const output = [1, 2];
    expect(twoSum(input1, input2)).toEqual(output);
  });
  test("for nums = [2,7,11,15], target = 9", () => {
    const input1 = [2, 7, 11, 15];
    const input2 = 9;
    const output = [0, 1];
    expect(twoSum(input1, input2)).toEqual(output);
  });
});
