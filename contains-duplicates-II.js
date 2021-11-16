// https://leetcode.com/problems/contains-duplicate-ii/

const containsNearbyDuplicate = (nums, k) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] >= 0 && Math.abs(hash[nums[i]] - i) <= k) return true;
    hash[nums[i]] = i;
  }
  return false;
};

// nums = [1,2,3,1]
// k = 3

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
