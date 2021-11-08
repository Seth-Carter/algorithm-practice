// https://leetcode.com/problems/binary-search/

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);
    if (target === nums[pivot]) return pivot;
    if (target < nums[pivot]) {
      right = pivot - 1;
    } else left = pivot + 1;
  }
  return -1;
};
const testArray = [5, 9, 10];
console.log(search(testArray, 10));
