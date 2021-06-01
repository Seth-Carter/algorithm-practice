// An algorithm that determines whether the first argument is a subsequence
// of the second, respecing their order

function isSubsequence(subsequence, sequence) {
  let i = 0;
  let j = 0;
  while (j < sequence.length) {
    if (subsequence[i] === sequence[j]) {
      ++i;
      ++j;
    } else ++j;
    if (i === subsequence.length - 1) {
      return true;
    }
  };
  return false;
}

console.log(isSubsequence('sing', 'sting')); // returns true