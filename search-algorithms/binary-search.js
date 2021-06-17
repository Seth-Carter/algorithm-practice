function binarySearch(sortedArray, value) {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (value === sortedArray[middle]) return middle;
    if (value < sortedArray[middle]) {
      right = middle - 1;
    } else if (value > sortedArray[middle]) {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 7));
