const myFruits = ["Apple", "Banana", "Guava"];
const hisFruits = ["Litchi", "Pineapple", "Mango"];

// myFruits.push(hisFruits); //Pushes the whole array as a single element in myFruits
// console.log(myFruits);
// console.log(myFruits[3][1]);

// const allFruits = myFruits.concat(hisFruits); //Pushes each elements of hisFruits one by one as single element in myFruits
// console.log(allFruits);

// Using spread(Better Way):
// const allFruits = [...myFruits, ...hisFruits];
// console.log(allFruits);

const interestingArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]]];
const useableInterestingArray = interestingArray.flat(Infinity);
// console.log(interestingArray);
// console.log(useableInterestingArray);

console.log(Array.isArray("Bikash"));
console.log(Array.from("Bikash"));

// Interesting case of from():
console.log(Array.from({ name: "Bikash" })); //returns an empty array because it can't directly convert an object into array..
//We need to specify what we need to make an array of:
console.log(Array.from(Object.keys({ name: "Bikash", age: 20 })));

// To make an array of different elements:
let score1 = 77,
  score2 = 88,
  score3 = 99;
console.log(Array.of(score1, score2, score3));
