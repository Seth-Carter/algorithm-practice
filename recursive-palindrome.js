// A recursive algorithm that returns true if the passed string is
// a palindrome

// A naive method that uses a simple reverse algorithm within a
// closure

function recursivePalindrome(string) {
  function reverse(str) {
    if (str.length <= 1) return str[0];
    return str[str.length - 1] + reverse(str.substring(0,str.length - 1));
  }
  const reversedString = reverse(string);
  if (string === reversedString) return true;
  return false;
}

// A closure-less method that combines the sliding window pattern with recursion

function recursivePalindrome2(string) {
  if (string.length < 2) return true;
  if (string[0] === string[string.length - 1]) {
    return recursivePalindrome2(string.substring(1, string.length - 1));
  } else return false;
}

console.log(recursivePalindrome2('foobaaboof'));