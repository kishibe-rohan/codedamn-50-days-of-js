function openOrSenior(data) {
  // your code goes below

  return data.map((item) => {
    if (item[0] >= 55 && item[1] > 7) return "Senior";
    else return "Open";
  });
}
