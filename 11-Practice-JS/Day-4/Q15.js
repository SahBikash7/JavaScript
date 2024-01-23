// Write a JS Program to check a given string contains 2 to 4  occurances of a specified character:

const countSameChar = (string, char) => {
  const count = string.split("").filter((ch) => ch === char).length;
  return count >= 2 && count <= 4;
};
console.log(countSameChar("aaacbbdeeffff", "f"));
console.log(countSameChar("aaacbbdeeffff", "b"));
console.log(countSameChar("aaacbbdeeffff", "a"));
console.log(countSameChar("aaacbbdeeffff", "d"));
console.log(countSameChar("aaacbbdeeffff", "z"));
console.log(countSameChar("aaaaaacbbdeeffff", "a"));
