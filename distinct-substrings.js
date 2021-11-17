// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

const countGoodSubstrings = (s) => {
  const sArray = Array.from(s);
  const resultArray = [];
  for (let i = 0; i <= s.length - 2; i++) {
    const subSet = new Set(sArray.slice(i, i + 3));
    if (subSet.size === 3) resultArray.push(subSet);
  }
  return resultArray.length;
};
