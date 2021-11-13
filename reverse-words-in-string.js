// https://leetcode.com/problems/reverse-words-in-a-string-iii/

const reverseWords = (s) => {
  return s
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
