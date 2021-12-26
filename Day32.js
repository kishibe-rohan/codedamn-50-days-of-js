//Write a program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(a, b) {
  // write your code here
  let result = 1;
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) result = i;
  }

  return result;
}

const a = 2154;
const b = 458;

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));
