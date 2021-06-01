// An algorithm that determines whether any pair of numbers in the
// array (arg 1) average to the same number in arg 2

function averagePair(array, average){
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let calculatedAverage = (array[start] + array[end]) / 2;
    if (calculatedAverage === average) {
      return true;
    } else if (calculatedAverage < average) {
      ++start;
    } else --end;
  }
  return false;
}

console.log(averagePair([1,2,3,3,4,5], 4.5))