// Solution to the common anagram algorithm problem

function anagramChecker(word1, word2) {
  if (word1.length !== word2.length) return false;
  let counter1 = {};
  let counter2 = {};
  for (let letter of word1) {
    let lowerLetter = letter.toLowerCase();
    counter1[lowerLetter] = ++counter1[lowerLetter] || 1;
  }
  for (let letter of word2) {
    let lowerLetter = letter.toLowerCase();
    counter2[lowerLetter] = ++counter2[lowerLetter] || 1;
  }
  console.log(counter1, counter2);
  for (let key in counter1) {
    if (!counter2[key]) return false;
    if (counter1[key] !== counter2[key]) return false;
  }
  return true;
}
