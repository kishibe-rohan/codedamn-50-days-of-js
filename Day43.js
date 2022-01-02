const cache = {};

//a = 1,b = 2,c = 3 ....
for (let i = "a".charCodeAt(), j = 1; i <= "z".charCodeAt(); i++, j++) {
  cache[i] = j;
}

function high(x) {
  let candidates = x.split(" ");
  let maxScore = 0;
  let res;

  //for every word
  candidates.map((word) => {
    let score = 0;
    let chars = word.split("");

    //calculate the score
    chars.map((char) => {
      score += cache[char.charCodeAt()];
    });

    //new highest score?
    if (score > maxScore) {
      res = word;
      maxScore = score;
    }
  });

  return res;
}
