function findOdd(arr) {
  //happy coding!
  let map = new Map();

  arr.forEach((a) => {
    if (map.has(a)) {
      map.set(a, map.get(a) + 1);
    } else map.set(a, 1);
  });

  for (let [key, value] of map) {
    if (map.get(key) % 2 == 1) return key;
  }
}
