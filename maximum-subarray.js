// https://leetcode.com/problems/maximum-subarray/
// Solution implementing Kadane's algorithm

const maxSubArray = (nums) => {
  let currentMax = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    max = Math.max(currentMax, max);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
