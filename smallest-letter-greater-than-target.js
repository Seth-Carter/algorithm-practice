// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

const nextGreatestLetter = (letters, target) => {
  // O(log(n)) with binary search
  let left = 0;
  let right = letters.length;
  
  while (left < right) {
      let pivot = Math.floor((right + left) / 2);
      if (target < letters[pivot]) { 
          right = pivot;
      } else left = pivot + 1;
  }
  return letters[left % letters.length];
};