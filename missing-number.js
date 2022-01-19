// https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
  // Naive with sorting
  // const sortedNums = nums.sort((a,b) => a - b);
  // if (sortedNums[0] !== 0) return 0
  // for (let i = 0; i < sortedNums.length; i++) {
  //     if (sortedNums[i] + 1 !== sortedNums[i+1]) return (sortedNums[i] + 1)
  // }
  
  // Hash table O(n) space, O(n) time
  // const set = new Set(nums)
  // const array = [...Array(nums.length + 1).keys()]
  // for (num of array) {
  //     if (!set.has(num)) return num 
  // }
  
  // Bitwise math; O(1) space, O(n) time
  [2,0,1]
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
      result ^= (i ^ nums[i]);  
  }
  return result
}
