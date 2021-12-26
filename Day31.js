//Find factorial of given number

function factorial(n) {
  // write your code here
  return n === 0 ? 1 : n * factorial(n - 1);
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));
