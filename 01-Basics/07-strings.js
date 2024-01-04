const name = "Bikash";
const repoCount = 3;

// console.log("My name is "+name+" and my no. of repo is "+repoCount);  Not that much readable

// Alternative:(Better Way:)
// console.log(`My name is${name} and my no. of repo is ${repoCount}.\n`);

// Alternate way to define string:
const gameName = new String("Bikash-Shah"); //Always remember that string is an object.

// console.log(gameName[0]);
// console.log(gameName["0"]);

// To access The prototype:
// console.log(gameName.__proto__);

// Accessing The Methods:
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // returns the character at the index of 3
console.log(gameName.indexOf("a")); // returns index at which there is a.

//substring():
const newGameName = gameName.substring(0, 6); // Stores The characters from the index 0 to 5.
console.log(newGameName);

//slice():
const anotherGame = gameName.slice(0, 6); // Same as substring but we can also use negative value inside slice and if we do so it starts from the end of the string..
console.log(anotherGame);

// trim():
const newString = "     Aayush    ";
console.log(newString);
console.log(newString.trim()); //removes spaces and newline...

//replace():
const url = "https://bikash.com/bikash%20shah"; //spaces are converted into %20 by the browser because browser doesn't understand spaces..
console.log(url.replace("%20", "-")); //replace %20 by -;
console.log(url.includes("bikash")); // returns boolean value,does string has bikash in it..
console.log(url.includes("Bikash"));

// Convert String To Array:
const arrString = gameName.split("-"); //splits string into parts by "-"
console.log(arrString);
