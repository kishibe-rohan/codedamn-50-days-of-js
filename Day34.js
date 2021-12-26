function mostFreq(arr) {
  // write your code here
  if (arr.length === 0) return null;

  let map = {};
  let maxEl = arr[0];
  let maxCount = 1;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (map[el] == null) map[el] = 1;
    else map[el]++;

    if (map[el] > maxCount) {
      maxEl = el;
      maxCount = map[el];
    }
  }

  return [maxEl, maxCount];
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));
