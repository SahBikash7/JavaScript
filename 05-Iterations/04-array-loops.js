// for of loop:

// Using forof loop in array:
const arr = [10, 2, 30, 4, 50, 6, 70, 8, 90, 10];
for (const val of arr) {
  //   console.log(val);
}

// Using forof loop in string:
let str1 = "BIKASH SHAH";
for (const ch of str1) {
  //   console.log(ch);
}

// Map:
// The Map object holds unique key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const myMap = new Map();
myMap.set("Nep", "Nepal");
myMap.set("Ind", "India");
myMap.set("Aus", "Australia");
myMap.set("USA", "Unites States Of America");
myMap.set("Nep", "Nepal");
// console.log(myMap);

// Using forof loop in map:
// for (const map of myMap) {
//   console.log(map); // Gives us a separate array of each key and value pair.
// }

for (const [key, value] of myMap) {
  //   console.log(`key is ${key} and its value is ${value}.`);
}

// Using forof loop in object(Can't  Use):
const favGameOf = {
  Anish: "Football",
  Bikash: "Cricket",
  Aayush: "Badminton",
  Manish: "Kabaddi",
};
// for (const [key, value] of favGameOf) {
//   console.log(`key is ${key} and its value is ${value}.`);  ❌❌❌
// }
// Cannot use forof loop in object because objects are not diretly iterable as an array or map or string.

// The loop which can be used to iterate over objects is forin loop:

// Using forin loop in Object:
for (const key in favGameOf) {
  // console.log(key); //only gives us the key of the object
  // but we know than we can access the value if we have key.So:
  //   console.log(`key is ${key} and its value is ${favGameOf[key]}.`);
}

// Using forin loop in array:
const arr1 = [1, 3, 5, 7, 9];
for (const key in arr1) {
  // console.log(key); //LOL! Returns the index for the elements of the array.
  // So, we can access the value at index as:
  console.log(arr1[key]);
}

// Using forin loop in map:(Cannot Use forin loop to iterate in map) ❌❌❌
// for (const key in myMap) {
//     console.log(key);
// }

// Using forin loop in string:
let str2 = "Hello Hi Bye Bye";
for (const key in str2) {
  console.log(str2[key]);
}

// Overview Till Now:
// forof loop can be used in array,string and map but not in objects whereas forin loop can be used in array,string and object but not in map...
