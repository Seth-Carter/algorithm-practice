// An algorithm which takes a number and returns its factorial recursively

function factorial(num){
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
 }

 console.log(factorial(5));