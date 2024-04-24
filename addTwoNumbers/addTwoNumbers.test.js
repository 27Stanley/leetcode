const addTwoNumbers = require("./addTwoNumbers");

describe("add two numbers, linked lists", () => {
  test("first example", () => {
    const list1 = [2, 4, 3];
    const list2 = [5, 6, 4];
    const output = [7, 0, 8];
    expect(addTwoNumbers(list1, list2)).toEqual(output);
  });
  test("second example, different size lists", () => {
    const list1 = [9, 9, 9, 9, 9, 9, 9];
    const list2 = [9, 9, 9, 9];
    const output = [8, 9, 9, 9, 0, 0, 0, 1];
    expect(addTwoNumbers(list1, list2)).toEqual(output);
  });
  test("array of 0's", () => {
    const list1 = [0];
    const list2 = [0];
    const output = [0];
    expect(addTwoNumbers(list1, list2)).toEqual(output);
  });
});
