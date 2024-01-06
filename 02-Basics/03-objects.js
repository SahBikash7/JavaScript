// If we make object with constructor then,singleton object is made but if we make object as literals then singleton object isn't made,its few multiple instances are made..

// Using constructor:(Singleton Object)
// Object.create

// Object Literals: To declare an object
const mySym = Symbol("key1"); //Using Symbol in Object
const people = {
  name: "Bikash",
  age: 10,
  "hair size": 3,
  [mySym]: "My Symbol Is Here!!!",
  location: "KTM",
  email: "Bikash@google.com",
  isLoggedIN: true,
  favFruits: ["Apple", "Guava", "Mango"],
};
// Accessing the values of the key from an object:
// console.log(people.name);
// console.log(people["name"]); //better way because we cannot access hair size from the above method(i.e dot method).
// console.log(people["hair size"]);
// console.log(people[mySym]);

// To change the value of a key:
// people.name = "Aayush";
// console.log(people.name);

// If u want that value shouldn't change then we can use freeze method as:
// Object.freeze(people);
// people.name = "Manish";
// console.log(people); //Still prints Aayush as the value of name

// Adding function to the Object:
people.welcome=function(){
  console.log("Hello People!!!");
}
console.log(people.welcome); //Only returns back the reference of the function,doesn't execute it
console.log(people.welcome());

people.greetWithName=function(){
  console.log(`Hello People with name as ${this.name}.`);
}
console.log(people.greetWithName());