//Link to leetcode problem: https://leetcode.com/problems/implement-strstr/

const strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  for (let j = 0; j < haystack.length; j++) {
    let testString = haystack.substring(j, j + needle.length);
    if (testString === needle) {
      console.log(testString);
      return j;
    }
  }
  return -1;
};

const string = 'aaabbaabbba';
const subString = 'bbb';

strStr(string, subString);
