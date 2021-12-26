//Print unique values from an array

function set(arr) {
  return arr.filter((num, i, a) => a.indexOf(num) === i);
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));
