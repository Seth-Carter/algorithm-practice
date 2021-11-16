// https://leetcode.com/problems/permutation-in-string/

const checkInclusion = (s1, s2) => {
  let counts = {};
  let patternCounts = {};
  let matchTotal = 0;

  for (let i = 0; i < s1.length; i++) {
    patternCounts[s1[i]] = patternCounts[s1[i]] + 1 || 1;
  }

  for (let i = 0; i < s2.length; i++) {
    if (patternCounts[s2[i]]) {
      counts[s2[i]] = counts[s2[i]] + 1 || 1;
      matchTotal++;

      while (counts[s2[i]] > patternCounts[s2[i]]) {
        matchTotal--;
        counts[s2[i - matchTotal]] -= 1;
      }

      if (matchTotal === s1.length) return true;
    } else {
      counts = {};
      matchTotal = 0;
    }
  }
  return false;
};

console.log(checkInclusion('hello', 'ooolleoooleh'));
