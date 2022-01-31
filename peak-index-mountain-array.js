// https://leetcode.com/problems/peak-index-in-a-mountain-array/

const peakIndexInMountainArray = (arr) => {
  // O(n) time
  // let i = 0
  // while (i < arr.length) {
  //     if (arr[i] > arr[i + 1]) return i;
  //     i++;
  // }

  // O(log(n)) time with binary search

  let left = 0;
  let right = arr.length;
  while (left <= right) {
      let pivot = Math.floor((left + right) / 2);
      if (arr[pivot] > arr[pivot - 1] && arr[pivot] > arr[pivot + 1]) return pivot;
      if (pivot === 0 || arr[pivot] > arr[pivot - 1]) {
          left = pivot + 1;
      } else right = pivot - 1;
  }
  return null;
};