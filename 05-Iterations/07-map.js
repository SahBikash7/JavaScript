const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNum = myNum.map((num) => num > 5);
// console.log(newNum);
// The difference between filter and map is that we can use filter directly to return the number itself which satisfies the condition whereas map returns the boolean value if we use syntax like filter.So, in map we need to use if statement for condition checking and then return the value.

let newNum = myNum.map((num) => num + 10);
// console.log(newNum);

// Chaining:
newNum = myNum
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 20);
console.log(newNum);
