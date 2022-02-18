// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  }
  return null;
};
