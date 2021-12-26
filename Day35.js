//Return n-th highest number from unsorted array

function nthlargest(arr, highest) {
  // write your code here

  //Sort in descending order
  let sorted = arr.sort((a, b) => b - a);
  return sorted[highest - 1];
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));
