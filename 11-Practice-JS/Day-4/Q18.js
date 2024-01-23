// Write a JS program to check whether a given array of integers is sorted in ascending order.

const checkAscending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

console.log(checkAscending([1, 2, 3, 4, 5]));
console.log(checkAscending([1, 2, 3, 7, 5]));
console.log(checkAscending([1, 2, 3, 4, 5, 5]));
