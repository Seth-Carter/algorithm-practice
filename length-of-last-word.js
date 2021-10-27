// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = (s) => {
  const stringArray = s.split(' ').filter(Boolean);
  return stringArray[stringArray.length - 1].length;
};

console.log(lengthOfLastWord('a'));
