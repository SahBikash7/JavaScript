// Write a JS program to generate a random hexadecimal color code.

const randomHexNumber = () => Math.floor(Math.random() * 16).toString(16);

const randomColor = () =>
  "#" + Array.from({ length: 6 }).map(randomHexNumber).join("");
  
console.log(`The Randomly Generated Hex Color Code is ${randomColor()}`);
