function quickSort(array) {
  function pivot(array, start = 0, endIndex = array.length - 1) {
    const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    let swapIndex = start;
    for (let i = start + 1; i <= endIndex; i++) {
      if (array[i] <= array[start]) {
        swapIndex++;
        swap(array, swapIndex, i);
      }
    }
    swap(array, start, swapIndex);
    return swapIndex;
  }

  function sort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(array, left, right);
      sort(array, left, pivotIndex - 1);
      sort(array, pivotIndex + 1, right);
    }
    return array;
  }
  return sort(array);
}

const testArray = [8, 2, 12, 7, 4, 3, 9, 100, 1, 0];

console.log(quickSort(testArray));
