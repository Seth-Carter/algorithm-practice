function bubbleSort(array) {
  let noSwap;
  for (let i = array.length - 1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return array;
}

const testArray = [2, 10, 1, 4, 5, 9, 6, 25, 50, 0];

console.log(bubbleSort(testArray));
