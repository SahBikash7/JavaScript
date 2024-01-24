// Write a JS program to find the common items in any given two arrays using callback function..

const findCommonItems = (arr1, arr2) => {
  const commonAr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        commonAr.push(arr1[i]);
      }
    }
  }
  return commonAr;
};

const arr1 = ["pasta", "pizza", "iceCream"];
const arr2 = ["pasta", "cake", "iceCream"];
console.log(findCommonItems(arr1, arr2));
