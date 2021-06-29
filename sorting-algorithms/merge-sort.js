function mergeSort(array) {
  function merge(array1, array2) {
    let i = 0;
    let j = 0;
    const mergedArray = [];
    while (i < array1.length && j < array2.length) {
      if (array1[i] <= array2[j]) {
        mergedArray.push(array1[i]);
        i++;
      }
      if (array2[j] <= array1[i]) {
        mergedArray.push(array2[j]);
        j++;
      }
    }
    if (i < array1.length) mergedArray.push(...array1.slice(i, array1.length));
    if (j < array2.length) mergedArray.push(...array2.slice(j, array2.length));
    return mergedArray;
  }

  function sort(array) {
    if (array.length <= 1) return array;
    const pivot = Math.floor(array.length / 2);
    const leftArray = array.slice(0, pivot);
    const rightArray = array.slice(pivot);
    return merge(sort(leftArray), sort(rightArray));
  }

  return sort(array);
}

const testArray = [5, 2, 9, 50, 8, 7, 6, 9, 75];
console.log(mergeSort(testArray));
