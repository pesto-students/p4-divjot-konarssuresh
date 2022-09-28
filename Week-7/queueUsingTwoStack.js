import {Stack} from "./stack.js";

// Implement a Queue using 2 stacks s1 and s2 .
// A Query Q is of 2 Types
// (i) 1 x (a queryof this type means pushing 'x' into the queue)
// (ii) 2 (a query of this type means to popelement from queue and print the poped element

// Example 1:Input:
// 5
// 1 2 1 3 2 1 4 2
// Output:2 3
// Explanation:
// In the first testcase
// 1 2 the queue will be {2}
// 1 3 the queue will be {2 3}
// 2   poped element will be 2 the queue will be {3}
// 1 4 the queue will be {3 4}
// 2   poped element will be 3.

// expected time complexity -  O(1) for push() and O(N) for pop() or O(N) for push() andO(1) for pop()
// expected space complexity - o(1)

// time complexity -  O(1) for push() and O(N) for pop()
function queue() {
  const stack1 = new Stack();
  const stack2 = new Stack();
  this.push = function (value) {
    stack1.push(value);
  };
  this.pop = function () {
    while (stack1.peek() !== undefined) {
      const poppedValue = stack1.pop();
      poppedValue && stack2.push(poppedValue);
    }

    const valueToReturn = stack2.pop();
    while (stack2.peek() !== undefined) {
      const poppedValue = stack2.pop();
      poppedValue && stack1.push(poppedValue);
    }
    return valueToReturn;
  };
}

const getQueueValue = (query) => {
  let shouldPush = false;
  let resultQueue = new queue();
  let outputString = "";

  for (let val of query) {
    if (!shouldPush && val === "1") {
      shouldPush = true;
    } else if (!shouldPush && val === "2") {
      const poppedValue = resultQueue.pop();
      const valueToConcatenate = poppedValue === undefined ? -1 : poppedValue;
      outputString =
        outputString.length > 0
          ? `${outputString} ${valueToConcatenate}`
          : valueToConcatenate;
    } else if (shouldPush) {
      resultQueue.push(val);
      shouldPush = false;
    }
  }
  return outputString;
};

console.log(getQueueValue("12132142"));

console.log(getQueueValue("122214"));
