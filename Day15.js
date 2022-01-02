const isPangram = (input) => {
  // Code here
  input = input.toLowerCase();
  const words = input.split(" ");
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  words.forEach((word) => {
    let chars = word.split("");
    chars.forEach((char) => {
      if (letters.includes(char)) letters.splice(letters.indexOf(char), 1);
    });
  });
  return letters.length === 0;
};
