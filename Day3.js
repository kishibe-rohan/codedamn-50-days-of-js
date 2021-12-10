//Write a program to reverse a given integer number

const num = 1002;

function reverseGivenInteger(n) {
  // write your solution here
  n = n + "";
  return n.split("").reverse().join("");
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
