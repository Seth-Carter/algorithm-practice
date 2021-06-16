// A function which accepts a variable number of arguments
// and checks whether any of the arguments are duplicates

function areThereDuplicates(...args) {
  const counter = {};
  for (let arg of args) {
    if (!counter[arg]) {
      counter[arg] = 1;
    } else return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 3, 5, 4, 5, 6, 7, 9));
