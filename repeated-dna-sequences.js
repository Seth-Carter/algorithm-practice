// https://leetcode.com/problems/repeated-dna-sequences/

const findRepeatedDnaSequences = (s) => {
  const hashTable = {};

  for (let i = 0; i <= s.length - 10; i++) {
    hashTable[s.slice(i, i + 10)] = hashTable[s.slice(i, i + 10)] + 1 || 1;
  }

  return Object.entries(hashTable)
    .map(([key, value]) => {
      if (value > 1) return key;
    })
    .filter(Boolean);
};

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

console.log(findRepeatedDnaSequences('AAAAAAAAAAA'));
