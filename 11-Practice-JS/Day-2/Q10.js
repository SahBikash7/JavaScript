// WAP to create a new string adding "Bro!" in front of a given string .If the given string begins with "Bro!" already then return the original string.

const createNewStr = (str) => (str.startsWith("Bro!") ? str : `Bro!${str}`);
console.log(createNewStr("Hello"));
