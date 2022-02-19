// https://leetcode.com/problems/range-sum-query-immutable/

class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.sums = this.getSums();
  }
  getSums() {
    let sum = 0;
    const sums = [0];

    for (let i = 0; i < this.nums.length; i++) {
      sum += this.nums[i];
      sums.push(sum);
    }

    return sums;
  }
  sumRange(left, right) {
    return this.sums[right + 1] - this.sums[left];
  }
}
const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));
