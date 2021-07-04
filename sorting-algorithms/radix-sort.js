function radixSort(array) {
  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  function mostDigits(nums) {
    let maxDigits = 0;
    for (num of nums) {
      let digits = digitCount(num);
      maxDigits = Math.max(maxDigits, digits);
    }
    return maxDigits;
  }

  const maxDigitCount = mostDigits(array);
  for (let i = 0; i <= maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (num of array) {
      let digit = getDigit(num, i);
      digitBuckets[digit].push(num);
    }
    array = digitBuckets.flat();
  }
  return array;
}

const testArray = [2, 25, 1, 550, 2330, 952, 30, 7];

console.log(radixSort(testArray));
