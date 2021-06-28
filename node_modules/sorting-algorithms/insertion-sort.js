function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    for (let j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
      array[j] = currentValue;
    }
  }
  return array;
}

const testArray = [8, 0, 212, 5, 12, 9, 200];

console.log(insertionSort(testArray));
