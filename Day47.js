function isIsogram(str) {
  // your code here
  str = str.toLowerCase();
  return str.split("").every((c, i) => str.indexOf(c) == i);
}
