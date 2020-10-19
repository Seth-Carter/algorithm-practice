//Link to leetcode problem: https://leetcode.com/problems/search-insert-position/

const searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++){
      if (nums[i] === target) {
          return i
      } else if (nums[i] > target) {
          return i
      }
  } return nums.length
}
