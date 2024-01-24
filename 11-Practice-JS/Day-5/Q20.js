// Write a JS Program to get the largest even number from an array of integers.

const findLargestEven = (arr) =>
  Math.max(...arr.filter((num) => num % 2 === 0));
// The spread operator can be used to pass elements of an array as individual arguments to a function:

console.log(findLargestEven([1, 2, 3, 4, 5, 6]));
console.log(findLargestEven([10, 2, 3, 4, 5, 6]));
console.log(findLargestEven([100, 2, 300, 4, 5, 6]));
console.log(findLargestEven([1, 3, 5, 7]));
