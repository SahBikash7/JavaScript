// Write a JS program to find the number of even digits in an array of integres:

const countEvenDigits = (arr) => arr.filter((num) => num % 2 === 0).length;

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(countEvenDigits(arrNum));
console.log(countEvenDigits([1, 2, 4, 6]));
console.log(countEvenDigits([2, 2, 2, 2, 2]));
