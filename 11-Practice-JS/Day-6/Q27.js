// Write a JS program that returns a passed string with letters in alphabetical order.

const arrange = (str) =>
  str
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

console.log(arrange("agdbbjm"));
console.log(arrange("bikash"));
console.log(arrange("webmaster"));
console.log(arrange("javascript"));
