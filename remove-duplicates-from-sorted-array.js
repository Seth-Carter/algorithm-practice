//Link to leetcode problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const testArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = function (nums) {
  let i = 0;
  for (let j = i; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates(testArray));
