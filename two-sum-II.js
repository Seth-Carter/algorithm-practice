// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let total = numbers[left] + numbers[right];
    if (total === target) return [left + 1, right + 1];
    if (total < target) left++;
    if (total > target) right--;
  }
  return -1;
};

console.log(twoSum([2, 7, 11, 15], 22));
