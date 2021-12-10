//Function which returns a random number in the given range

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart);
}
console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
