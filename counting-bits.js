// https://leetcode.com/problems/counting-bits/

const countBits = (n) => {
  // Brute force O(n2)
  const evens = [];
  const odds = [];
  const all = [];

  for (let i = 0; i <= n; i++) {
    const binaryString = i.toString(2);
    let count = 0;

    for (let j = 0; j < binaryString.length; j++) {
      binaryString[j] === '1' && count++;
    }

    i % 2 === 0 ? evens.push(count) : odds.push(count);
    all.push(count);
  }

  let iterations = 0;
  let printString = '';
  for (let num of all) {
    if (iterations < 4) {
      printString += num.toString() + ' ';
      iterations++;
    } else {
      printString += '\n' + num.toString() + ' ';
      iterations = 1;
    }
  }
  return printString;
};

const countBitsLinear = (n) => {
  // O(n) time and O(n) space
  const answer = [0];
  for (let i = 1; i <= n; i++) {
    const moduloFour = i % 4;
    if (moduloFour === 0) answer.push(answer[i / 4]);
    if (moduloFour === 1 || moduloFour === 2)
      answer.push(answer[i - moduloFour] + 1);
    if (moduloFour === 3) answer.push(answer[i - moduloFour] + 2);
  }

  return answer;
};

console.log(countBitsLinear(100));
