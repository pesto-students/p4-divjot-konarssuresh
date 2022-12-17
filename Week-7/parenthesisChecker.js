import {Stack} from "./stack.js";
// Given an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”

// time complexity o(n) space complexity o(1)
const parenthesisChecker = (inputString = "") => {
  const CURLY_BRACKET_OPEN = "{";
  const CURLY_BRACKET_CLOSE = "}";
  const NORMAL_BRACKET_OPEN = "(";
  const NORMAL_BRACKET_CLOSE = ")";
  const SQUARE_BRACKET_OPEN = "[";
  const SQUARE_BRACKET_CLOSE = "]";
  const checkerStack = new Stack();

  for (let bracket of inputString) {
    if (
      [CURLY_BRACKET_OPEN, NORMAL_BRACKET_OPEN, SQUARE_BRACKET_OPEN].includes(
        bracket
      )
    ) {
      checkerStack.push(bracket);
    } else {
      switch (bracket) {
        case CURLY_BRACKET_CLOSE:
          if (checkerStack.pop() !== CURLY_BRACKET_OPEN) {
            return false;
          }
          break;
        case NORMAL_BRACKET_CLOSE:
          if (checkerStack.pop() !== NORMAL_BRACKET_OPEN) {
            return false;
          }
          break;
        case SQUARE_BRACKET_CLOSE:
          if (checkerStack.pop() !== SQUARE_BRACKET_OPEN) {
            return false;
          }
          break;
      }
    }
  }
  if (checkerStack.peek()) {
    return false;
  } else {
    return true;
  }
};

console.log(parenthesisChecker("([)]"));
