/*
Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
*/

const str = "XeroX";

function getTheGapX(str) {
  // write your solution here
  let posEnd = str.lastIndexOf("X");
  let posStart = str.indexOf("X");

  if (posEnd === -1 && posStart === -1) return -1;

  return posEnd - posStart;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
