function toWeirdCase(s) {
  // Your code goes
  return [...s]
    .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
    .join("");
}
