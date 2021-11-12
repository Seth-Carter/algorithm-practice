// https://leetcode.com/problems/move-zeroes/

// Naive approach
const moveZeroes = (nums) => {
  let i = 0;
  let iterationCount = 0;
  while (i < nums.length) {
    if (iterationCount >= nums.length) break;
    if (nums[i] === 0) {
      for (let j = i; j < nums.length - 1; j++) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    } else i++;
    iterationCount++;
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1]));
