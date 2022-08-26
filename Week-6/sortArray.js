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
