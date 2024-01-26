// Write a JS function to extract unique characters from a string

// const uniqueChar = (str) =>
//   str
//     .split("")
//     .filter((ch, index, arr) => arr.slice(index + 1).indexOf(ch) === -1);

const uniqueChar = (str) => [...new Set(str.split(""))];

console.log(uniqueChar("Bbaasd"));
console.log(uniqueChar("aaasssdddddd"));
console.log(uniqueChar("aaaaccd"));
console.log(uniqueChar("zxewrd"));
