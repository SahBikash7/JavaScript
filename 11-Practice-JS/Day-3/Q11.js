// Write a JS program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together.The string length must be 3 or more than 3 ,if not the original string is returned.
const makeNewString = (string) =>
  string.length < 3 ? string : string.slice(0, 3) + string.slice(-3);

console.log(makeNewString("ab"));
console.log(makeNewString("abc"));
console.log(makeNewString("Bull"));
console.log(makeNewString("abcdefg"));
console.log(makeNewString("abcdefgh1234"));
