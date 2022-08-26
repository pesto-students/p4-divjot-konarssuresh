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
