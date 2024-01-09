// do-while loop:
// Iterate once no matter whether the condition described evaluates true or false but for further iterations check the condition..

let i = 1;
do {
  console.log(`The value is ${i}.`);
  i += 2;
} while (i <= 10);

// Using do-while loop to access array:
let fruits = ["Apple", "Mango", "Litchi", "Guava", "Pineapple", "Coconut"];
let index = 0;
do {
  console.log(fruits[index]);
  index++;
} while (index < fruits.length);
