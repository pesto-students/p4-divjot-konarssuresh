import {Stack} from "./stack.js";
// Given an array arr{} of size N having distinct elements, the task is to find the nextgreater element for each element of the array in order of their appearance in the array.
// Next greater element of an element in the array is the nearest element on the rightwhich is greater than the current element.
// If there does not exist next greater of currentelement, then next greater element for current element is -1. For example, next greaterof the last element is always -1.

//time complexity o(n) ,space complexity o(n2)
const nextGreaterElement = (arr) => {
  const checkerStack = new Stack();
  const greaterValueMap = new Map();
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      checkerStack.push(arr[i]);
      continue;
    }

    if (checkerStack.peek() < arr[i]) {
      while (checkerStack.peek() < arr[i]) {
        const topValue = checkerStack.pop();
        greaterValueMap.set(topValue, arr[i]);
      }
      checkerStack.push(arr[i]);
    } else {
      checkerStack.push(arr[i]);
    }
  }

  while (checkerStack.peek() !== undefined) {
    const topValue = checkerStack.pop();
    greaterValueMap.set(topValue, -1);
  }

  for (let num of arr) {
    if (str === "") {
      str = greaterValueMap.get(num);
    } else {
      str = `${str} ${greaterValueMap.get(num)}`;
    }
  }

  return str;
};

console.log(nextGreaterElement([1, 3, 2, 4]));
