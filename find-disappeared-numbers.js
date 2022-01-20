// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const findDisappearedNumbers = (nums) => {
  // With hashing
  // const set = new Set(nums);
  // const array = Array.from({length: nums.length}, (_,i) => i + 1);
  // const res = [];
  
  // for (num of array) {
  //     if (!set.has(num)) res.push(num)
  // }
  // return res

  // O(1) space, O(n) time
  let res = [];
    
  for (let i = 0; i < nums.length; i++) {
      let idx = Math.abs(nums[i]) - 1;
      nums[idx] = Math.abs(nums[idx]) * -1;
  }
   
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] > 0) {
           res.push(i+1);
       }
   }
   return res;
};
