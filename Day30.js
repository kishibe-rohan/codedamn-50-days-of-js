//Create a function that turns a string into a Mexican Wave

function wave(str) {
  // Your Code goes below
  let results = [];

  for (let i = 0; i < str.length; i++) {
    //create a temp array of the chars in string
    let temp = str.split("");

    //capitalize the letter
    if (temp[i] !== " ") {
      temp[i] = temp[i].toUpperCase();
      results.push(temp.join(""));
    }
  }

  return results;
}

console.log(wave("hello"));
