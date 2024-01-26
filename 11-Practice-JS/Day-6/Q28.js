// Write a JS program that accepts a string and counts the number of vowels in it.

const countVowel = (str) => {
  let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  return str.split("").filter((ch) => vowels.indexOf(ch) > -1).length;
};
console.log(countVowel("Bikash"));
console.log(countVowel("aeiou"));
console.log(countVowel("aaaeeeeeeee"));
console.log(countVowel("Mountain"));
