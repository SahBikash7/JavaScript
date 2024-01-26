// Write a JS function to extract the  non repeated character from a string

const nonRepeatedChar = (str) =>
  str
    .split("")
    .filter(
      (ch, index, arr) => arr.filter((arrItem) => arrItem === ch).length === 1
    );

console.log(nonRepeatedChar("abaccc"));
console.log(nonRepeatedChar("xdaaccc"));
console.log(nonRepeatedChar("abczz"));
console.log(nonRepeatedChar("aaccc"));
