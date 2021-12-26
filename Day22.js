//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

let uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array

  //check whether array or string
  let myList = Array.isArray(iterable) ? iterable : iterable.split("");

  let result = myList.filter((ele, i) => {
    return myList[i] != myList[i + 1];
  });

  return result;
};
