// Given an array of integers and a number, this algorithm finds
// the maximum sum of a contiguous subarray with the length of the 
// number passed to the function

function maxSubarraySum(array, length) {
  if (array.length < length) return null;
  let maxValue = -Infinity;
  let subarraySum = 0;
  for (let i = 0; i < length; i++) {
    subarraySum += array[i];
  }
  for (let i = 0; i < array.length - length; i++) {
    subarraySum -= array[i];
    subarraySum += array[i + length];
    if (subarraySum > maxValue) {
      maxValue = subarraySum;
    }
  }
  return maxValue;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));