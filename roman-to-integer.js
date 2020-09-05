//Link to leetcode problem: https://leetcode.com/problems/roman-to-integer/
const romanToInt = function(s) {
  const key = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let sum = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i+1]) {
      if (key[s[i]] >= key[s[i+1]]) {
        sum += key[s[i]]
      } else {
        sum -= key[s[i]]
      }
      } else {
        sum += key[s[i]]
    }
  }

  return sum
}

