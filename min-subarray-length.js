// This algorithm returns the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed
// to the function.

function minSubarrayLen(array, sum) {
  let i = 0;
  let j = 0;
  let total = 0;
  let minLen = Infinity;

  while (i < array.length) {
    if ( total < sum && j < array.length) {
      total += array[j];
      j++;
    } else if ( total >= sum ) {
      minLen = Math.min(minLen, j - i);
      total -= array[i];
      i++;
    } else break;

  }
  return minLen === Infinity ? 0 : minLen;
}

const testArray = [1,1,1,1,3,2]

console.log(minSubarrayLen(testArray, 3))