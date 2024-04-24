function addTwoNumbers(list1, list2) {
  let firstNumber = list1.reverse().join("");
  let secondNumber = list2.reverse().join("");
  let sumNumber = Number(firstNumber) + Number(secondNumber);

  let sumArray = Array.from(String(sumNumber), Number);
  let answer = sumArray.reverse();
  return answer;
}

module.exports = addTwoNumbers;

//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

//example:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
