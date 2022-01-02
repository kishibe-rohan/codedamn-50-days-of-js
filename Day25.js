function spinWords(string) {
  //TODO Have fun :)
  return string
    .split(" ")
    .map((word) => (word.length < 5 ? word : word.split("").reverse().join("")))
    .join(" ");
}
