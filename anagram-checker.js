// Solution to the common anagram algorithm problem

function anagramChecker(word1, word2) {
  if(array1.length !== array2.length ) return false;
  let counter1 = {};
  let counter2 = {};
  for(let letter of word1) {
      counter1[letter] = ++counter1[letter] || 1;
  }
  for (let letter of word2) {
      counter2[letter] = ++counter2[letter] || 1;
  }
  for (let key in counter1) {
      if (!counter2[key]) return false;
      if (counter1[key] !== counter2[key]) return false;
  }
  return true;
}