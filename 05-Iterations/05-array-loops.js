// for each loop:
const harmfulDrinks = ["Sprite", "Coke", "Dew", "Thumbs-Up", "Sting"];

// harmfulDrinks.forEach(Write callback function here)
// NOTE: Callback function doesn't have name.

// harmfulDrinks.forEach(function (drinks) {
//   console.log(`The drink is ${drinks}.`);
// });

// We can also write the callback function as the arrow function:
// harmfulDrinks.forEach((drinks) => {
//   console.log(`The drink is ${drinks}.`);
// });

// // We can also pass any other function as a call back function inside forEach. Example:
// function printMe(item) {
//   console.log(`The item is ${item}.`);
// }
// harmfulDrinks.forEach(printMe);
// // NOTE : We  only need to pass the reference of the call back function,the execution part of the callback function is done by the forEach method itself.

// The forEach method can also pass other arguments to the call back function.Basically it passes element of the array,its index and the whole array itself.
// harmfulDrinks.forEach((item, index, arr) => {
//   console.log(
//     `The element at index ${index} of array ${JSON.stringify(arr)} is ${item}`
//   );
// });

// Objects inside Array:
const objInArr = [
  { name: "Bikash", age: 90 },
  { name: "Aayush", age: 30 },
  { name: "Mohan", age: 50 },
];
objInArr.forEach((obj) => {
  console.log(obj.name);
});

// Does the call back function inside the forEach loop return anything?? Let's check it:
const returnedHarmfulDrinks = harmfulDrinks.forEach((drinks) => {
  return drinks;
});
console.log(returnedHarmfulDrinks);
// returnedHarmfulDrinks doesn't have anything in it which means that the callback function didn't return anything.So, now we know that the callback function in the forEach loop doesn't return anything...
