//Link to leetcode problem: https://leetcode.com/problems/search-insert-position/

// O(n) time
const naiveSearchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
};

// O(log(n)) time
const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let pivot;
  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (target === nums[pivot]) return pivot;
    if (target < nums[pivot]) right = pivot - 1;
    if (target > nums[pivot]) left = pivot + 1;
  }
  return target > nums[pivot] ? pivot + 1 : pivot;
};

console.log(searchInsert([1, 3, 5, 6], 0));
