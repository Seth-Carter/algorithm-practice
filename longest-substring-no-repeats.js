// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s) => {
  let hash = {};
  let left = 0;
  let right = 0;
  let max = 0;
  for (right; right < s.length; right++) {
    if (hash[s[right]] >= left) {
      left = hash[s[right]] + 1;
    }
    hash[s[right]] = right;
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring('dvdf'));
