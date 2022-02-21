// https://leetcode.com/problems/backspace-string-compare/

const backspaceCompare = (s, t) => {
  let i = s.length;
  let j = t.length;
  let back;

  while (i >= 0 && j >= 0) {
    back = 1;
    while (back > 0) {
      i--;
      i >= 0 && s[i] === '#' ? ++back : --back;
    }

    back = 1;
    while (back > 0) {
      j--;
      j >= 0 && t[j] === '#' ? ++back : --back;
    }
    if (s[i] !== t[j]) return false;
  }
  return i < 0 && j < 0;
};
