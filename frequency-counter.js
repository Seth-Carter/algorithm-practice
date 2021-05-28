// An algorithm that, given two positive integers, will find out if the two numbers
// have the same frequency of digits.

function frequencyCounter(int1, int2) {
  const digits1 = String(int1);
  const digits2 = String(int2);
  if (digits1.length !== digits2.length) return false;
  const digitMap1 = {};
  const digitMap2 = {};
  for (let digit of digits1 ) {
    digitMap1[digit] = ++digitMap1[digit] || 1;
  }
  for (let digit of digits2) {
    if (!digitMap1[digit]) return false;
    digitMap2[digit] = ++digitMap2[digit] || 1;
  }
  for (let key in digitMap1) {
    if (digitMap1[key] !== digitMap2[key]) return false;
  }
  return true;
}

console.log(frequencyCounter(1234, 4321));