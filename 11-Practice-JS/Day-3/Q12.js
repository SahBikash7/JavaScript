// Write a JS program to extract the first half of a string of even length.(if length not even return the original string).

const halfStr = (str) =>
  str.length % 2 !== 0 ? str : str.slice(0, str.length / 2);

console.log(halfStr("abcd"));
console.log(halfStr("abcdefgh"));
console.log(halfStr("abc"));
