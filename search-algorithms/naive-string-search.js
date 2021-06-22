function stringSearch(searchString, string) {
  let matchCount = 0;
  for (let i = 0; i < searchString.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (searchString[i + j] !== string[j]) break;
      if (j === string.length - 1) matchCount++;
    }
  }
  return matchCount;
}

const testString = 'What a wonderful world, man!';

console.log(stringSearch(testString, 'world'));
