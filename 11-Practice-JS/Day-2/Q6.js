// Write a JS program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.

const checkNumbers = (num1, num2) =>
  num1 === 100 || num2 === 100 || num1 + num2 === 100;

const result = checkNumbers(50, 90);
console.log(result);
