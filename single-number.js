//https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
  let result = 0;
  for (num of nums) {
      result ^= num;
  }
  return result
};
