// Write a JS program to replace the first digit in a string(should contain at least digit) with $ character.

const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");

console.log(replaceFirstDigit("123Bikash"));
console.log(replaceFirstDigit("Bik35ash"));
console.log(replaceFirstDigit("Bikash46"));
console.log(replaceFirstDigit("B245ikash"));
console.log(replaceFirstDigit("123Bika45sh"));
console.log(replaceFirstDigit("Bikash"));
console.log("BOOM_BOOM");

const replaceAllDigit = (str) => str.replace(/[0-9]/g, "$");

console.log("BOOM_BOOM");
console.log(replaceAllDigit("123Bikash"));
console.log(replaceAllDigit("Bik35ash"));
console.log(replaceAllDigit("Bikash46"));
console.log(replaceAllDigit("B245ikash"));
console.log(replaceAllDigit("123Bika45sh"));
console.log(replaceAllDigit("Bikash"));
