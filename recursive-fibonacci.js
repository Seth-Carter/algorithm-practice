// A recursive algorithm that returns the nth number in the
// fibonacci sequence


function recursiveFibonacci(num) {
  if (num <=2) return 1;
  return recursiveFibonacci(num - 2) + recursiveFibonacci(num - 1);
}

// An iterative algorithm that does the same thing, but with
// O(n) time instead of O(2^n)

function iterativeFibonacci(num) {
  const fibArray = [0,1];
  if(num < 2) return fibArray[num-1];
  for (let i = 2; i <= num; i++) {
    fibArray[i] = fibArray[i-2] + fibArray[i-1];
  }
  return fibArray[num];
}
console.log(iterativeFibonacci(20));