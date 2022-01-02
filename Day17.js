/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (input) => {
  // Your code here
  if (!input.length) return 0;

  const set = new Set(input);
  let lcs = 1;

  for (const num of input) {
    //make sure to start from the smallest number of the sequence
    if (set.has(num - 1)) continue;

    let candidate = num;
    let currMax = 1;

    while (set.has(candidate + 1)) {
      candidate++;
      currMax++;
    }

    lcs = Math.max(lcs, currMax);
  }

  return lcs;
};
