// https://leetcode.com/problems/rotate-array/

// Non-mutative method

const rotate = (nums, k) => {
  const rotatedArray = [];
  k %= nums.length;
  for (let i = nums.length - k; i < nums.length + (nums.length - k); i++) {
    rotatedArray.push(nums[i % nums.length]);
  }
  return rotatedArray;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
