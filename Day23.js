//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  //Code goes here!
  let leftSum = [];
  let rightSum = [];

  let len = arr.length;

  leftSum[0] = 0;
  rightSum[len - 1] = 0;

  for (let i = 1; i < len; i++) leftSum[i] = leftSum[i - 1] + arr[i - 1];

  for (let i = len - 2; i >= 0; i--) rightSum[i] = rightSum[i + 1] + arr[i + 1];

  for (let i = 0; i < len; i++) {
    if (leftSum[i] === rightSum[i]) return i;
  }

  return -1;
}
