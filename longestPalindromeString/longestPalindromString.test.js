const longestPalString = require("./longestPalindromString");

describe("longestPalindromSubString problem", () => {
  test("testCase 1 when string length is 1", () => {
    const input = "a";
    const output = "a";
    test(longestPalString(input)).toBe(output);
  });
  test("testCase 2 when string length is 2 different chracters", () => {
    const input = "ab";
    const output = "a";
    const output2 = "b";
    test(longestPalString(input)).toBe(output);
  });
  test("testCase 3 when string length is 2 and same characters", () => {
    const input = "aa";
    const output = "aa";
    test(longestPalString(input)).toBe(output);
  });
  test("testCase 4", () => {
    const input = "babad";
    const output = "bab";
    const output2 = "aba";
    test(longestPalString(input)).toBe(output);
  });
  test("testCase 5", () => {
    const input = "abcdcbad";
    const output = "abcdcba";
    test(longestPalString(input)).toBe(output);
  });
});
