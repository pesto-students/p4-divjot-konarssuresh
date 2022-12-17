// Given an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.
// Return the sum of the three integers.
// Assume that there will only beone solution
// Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to thetarget is 2. (-1 + 2 + 1 = 2)

const modulo = (n) => (n < 0 ? -n : n);

// time complexity - o(nsquare) space complexity o(1)
const threeSum = (array, target) => {
  array = array.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  let diff = Infinity;
  let ans = 0;
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const temp = array[i] + array[left] + array[right];
      const currentDiff = modulo(target - temp);
      if (currentDiff < diff) {
        diff = currentDiff;
        ans = temp;
      }
      if (temp === target) return temp;
      else if (temp > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return ans;
};
console.log(threeSum([-1, 2, 1, -4], 1));
