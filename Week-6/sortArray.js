// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder.
// Example 1:Input:N = 5arr[]= {0 2 1 2 0}Output:0 0 1 2 2Explanation: 0's 1's and 2's are segregated into ascending order.
// Example 2:Input:N = 3arr[] = {0 1 0}Output:0 0 1Explanation: 0s 1s and 2s are segregated into ascending order.
// Time Complexity: O(N)Expected Auxiliary Space: O(1)Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2

// time complexity - o(n) space complexity- o(1)
const sortArray = (arr) => {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  arr.forEach((num) => {
    if (num === 0) zeroCount += 1;
    if (num === 1) oneCount += 1;
    if (num === 2) twoCount += 1;
  });
  for (i = 0; i < zeroCount; i++) {
    arr[i] = 0;
  }
  for (i = zeroCount; i < zeroCount + oneCount; i++) {
    arr[i] = 1;
  }
  for (i = zeroCount + oneCount; i < zeroCount + oneCount + twoCount; i++) {
    arr[i] = 2;
  }
  return arr;
};

const inputArr = [1, 2, 0, 1, 2, 0, 1, 0, 0, 1, 0, 2, 0, 1, 0];
console.log(inputArr);
console.log(inputArr.length);
console.log(sortArray(inputArr));
console.log(sortArray(inputArr).length);
