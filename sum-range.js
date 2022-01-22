class NumArray {
  constructor(nums) {
      this.nums = nums;
  }
  sumRange(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }
    return sum;
  }
};
const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0,2))
console.log(obj.sumRange(2,5))
console.log(obj.sumRange(0,5))