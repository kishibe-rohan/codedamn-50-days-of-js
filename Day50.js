function getMiddle(s) {
  // your code here
  const len = s.length;
  return len % 2 === 1
    ? s.charAt(len / 2)
    : s.charAt(len / 2 - 1).concat(s.charAt(len / 2));
}
