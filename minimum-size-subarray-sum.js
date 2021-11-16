// https://leetcode.com/problems/minimum-size-subarray-sum/

// Brute force
const naiveMinSubArrayLen = (target, nums) => {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        min = Math.min(min, j - i + 1);
        break;
      }
    }
  }
  return min === Infinity ? 0 : min;
};

// Sliding window
const minSubArrayLen = (target, nums) => {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = Infinity;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }

    right++;
  }
  return minLength === Infinity ? 0 : minLength;
};

// target = 7, nums = [2,3,1,2,4,3]

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
