// Given an one-dimensional unsorted array A containing N integers.You are also given aninteger B, find if there exists a pair of elements in the array whose difference is B.
// Return1 if any such pair exists else return 0.
// Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
// Input Format First argument is an integer array A of size N. Second argument is aninteger B.
// Output Format Return 1 if any such pair exists else return 0.
// Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 Input 2: A = [-10, 20] B = 30
// Example Output
// Output 1: 1 Output 2: 1Example Explanation Explanation 1: Pair (80, 2) gives a difference of 78. Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30

// time Complexity - o(n square)  space Complexity - o(1)
const pairWithDifference = (array, difference) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        const diff = array[i] - array[j];
        if (diff === difference || diff * -1 === difference) {
          return 1;
        }
      }
    }
  }
  return 0;
};

// time complexity - o(n) space complexity o(n)
const pairWithDifference1 = (array, target) => {
  const s = new Set();
  for (let num of array) {
    const possibleNumber = target + num;
    const otherPossibleNumber = -target + num;
    if (s.has(num)) {
      return 1;
    } else {
      s.add(possibleNumber);
      s.add(otherPossibleNumber);
    }
  }
  return 0;
};
console.log(pairWithDifference1([-10, 20], 30));
