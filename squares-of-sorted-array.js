// https://leetcode.com/problems/squares-of-a-sorted-array/

const sortedSquares = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  const squaredArray = [];
  while (left <= right) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      squaredArray.push(nums[left] ** 2);
      left++;
    } else {
      squaredArray.push(nums[right] ** 2);
      right--;
    }
  }
  return squaredArray.reverse();
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
