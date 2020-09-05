//Link to leetcode problem: https://leetcode.com/problems/running-sum-of-1d-array/
const runningSum = function(nums){
const sumArray = [...nums]
for (let i = 1; i < nums.length; i++) {
  sumArray[i] += sumArray[i-1]
}
return sumArray
}
