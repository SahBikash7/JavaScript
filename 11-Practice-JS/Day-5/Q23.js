// Write a JS program to compare two objects to determine if the first object contains the same properties as the second one (which may also have addtional properties).

const obj1 = {
  name: "Bikash",
  class: 13,
};
const obj2 = {
  name: "Aayush",
  class: 13,
  age: 34,
};
const arr1 = Object.getOwnPropertyNames(obj1);
const arr2 = Object.getOwnPropertyNames(obj2);

console.log(arr2.includes(...arr1));
