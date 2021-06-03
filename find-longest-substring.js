// An algorithm that accepts a string and returns the length of
// the longest substring with all distinct characters

function findLongestSubstring(string) {
  let longest = 0;
  let start = 0;
  const seen = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
};

const testString = 'longestsubstring';

console.log(findLongestSubstring(testString));