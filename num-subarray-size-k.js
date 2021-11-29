// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

const numOfSubarrays = (arr, k, threshold) => {
  let num = 0;
  let sum;
  for (let i = 0; i <= arr.length - k; i++) {
    if (i === 0) {
      sum = arr.slice(0, k).reduce((avg, number) => avg + number, 0);
    } else {
      sum = sum - arr[i - 1] + arr[i + k - 1];
    }
    if (sum / k >= threshold) num++;
  }
  return num;
};

// arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
console.log(numOfSubarrays([1, 1, 1, 1, 1], 1, 0));
