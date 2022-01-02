function getDivisorsCnt(num) {
  // code below
  let count = 0;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      if (num / i == i) count++;
      else count += 2;
    }
  }

  return count;
}
