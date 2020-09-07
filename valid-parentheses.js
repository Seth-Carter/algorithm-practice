//Link to leetcode problem: https://leetcode.com/problems/valid-parentheses/

const isValid = function(s) {
    const key = {
      '(': ')',
      '{': '}',
      '[': ']'
    }
    const sArray = Array.from(s)
    if (sArray.length < 2) {
     return false
   }
    for(let i = 0; i < sArray.length -1; i++){
      if (key[sArray[i]] === sArray[i+1]) {
        sArray.splice(i,2)
        console.log(sArray)
        i=-1; 
      }
    }
    return sArray.length === 0
};
