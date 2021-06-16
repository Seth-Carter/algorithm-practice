//Link to leetcode problem: https://leetcode.com/problems/remove-element/

const removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

const testArray = [2, 3, 3, 2];

removeElement(testArray, 3);
