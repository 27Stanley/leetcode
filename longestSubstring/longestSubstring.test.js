const longestSubstring = require("./longestSubstring");

describe("longest substring problem", () => {
  test("for string with 1 chracter", () => {
    const input = "a";
    const output = 1;
    expect(longestSubstring(input)).toBe(output);
  });
  test("for string with 2 characters", () => {
    const input = "ab";
    const output = 2;
    expect(longestSubstring(input)).toBe(output);
  });
  test("for string with 5 characters", () => {
    const input = "abcda";
    const output = 4;
    expect(longestSubstring(input)).toBe(output);
  });
  test("for string with 4 same characters", () => {
    const input = "bbbbb";
    const output = 1;
    expect(longestSubstring(input)).toBe(output);
  });
  test("for string with 4 same characters", () => {
    const input = "pwwkew";
    const output = 3;
    expect(longestSubstring(input)).toBe(output);
  });
});
