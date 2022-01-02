function getCount(str) {
  let vowelsCount = 0;
  // enter your magic here
  str = str.toLowerCase();
  let words = str.split(" ");

  words.forEach((word) => {
    let chars = word.split("");
    chars.forEach((char) => {
      if (
        char == "a" ||
        char == "e" ||
        char == "i" ||
        char == "o" ||
        char == "u"
      )
        vowelsCount++;
    });
  });

  return vowelsCount;
}
