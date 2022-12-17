// Find the contiguous subarray within an array, A of length N which has the largest sum.
// Input Format:The first and the only argument contains an integer array, A.
//  Output Format: Return aninteger representing the maximum possible sum of the contiguous subarray.
//  Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000For example:
//  Input 1: A = [1, 2, 3, 4, -10] Output 1: 10 Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
// Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 2: 6Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6.

// time complexity - o(n) space complexity o(1)
const maxSumSubArray = (nums = []) => {
  let maxSum = 0;
  let maxSumUptoNow = nums[0];

  nums.forEach((num) => {
    maxSum += num;
    if (maxSum > maxSumUptoNow) {
      maxSumUptoNow = maxSum;
    }
    if (maxSum < 0) {
      maxSum = 0;
    }
  });

  return maxSumUptoNow;
};

console.log(maxSumSubArray([1]));
