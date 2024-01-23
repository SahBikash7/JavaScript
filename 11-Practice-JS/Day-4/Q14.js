// Write a JS program to find which of the given two numbers is closer to 100.

const findCloser = (num1, num2) =>
  Math.abs(num1 - 100) > Math.abs(num2 - 100) ? num2 : num1;

console.log(findCloser(60, 50));
console.log(findCloser(50, 60));
console.log(findCloser(200, 300));
console.log(findCloser(300, 200));
console.log(findCloser(-50, -60));
