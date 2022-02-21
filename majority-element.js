// https://leetcode.com/problems/majority-element/

const majorityElement = (nums) => {
  let count = 0;
  let candidate;
  for (let num of nums) {
    if (count === 0) candidate = num;
    candidate === num ? count++ : count--;
  }
  return candidate;
};
