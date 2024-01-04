// There are basically two types of datatypes on the basis of the way in which they are stored in the memory and how can they be accessed..They are:
// 1.Primitive DataTypes
// 2.Non-Primitive DataTypes(Reference-Type)

// Primitive Datatypes(Call By Value): 7 types
// 1.String
// 2.Number
// 3.Boolean
// 4.Null
// 5.Undefined
// 6.Symbol(To Make  Something Unique)
// 7.BigInt(To store very large values)

// ReferenceError(Non-Primitive)(Call By Reference): 3 types
// 1.Array
// 2.Objects
// 3.Functions

// Javascript is dynamically typed programming language because we don't need to declare the datatype whereas in C,Java we need to specify the datatype so they are static typed programming language..

//Primitive Examples:
const str = "Hello";
const num = 34;
const num1 = 34.2;
const isAllowed = true;
const temp = null;
let userEmail;

// To declare a symbol:
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id);
// console.log(anotherId);

//Even if u pass same value in Symbol it returns different values;
// console.log(anotherId == id); //==>False

const bigNumber = 24678982943183646n; //n converts to bigInt...

//Reference Examples:
const fruits = ["Apple", "Banana", "Guava", "Litchi"];
const person = {
  name: "Bikash",
  age: 90,
  id: 75432,
};
const myFunction = function () {
  console.log("Hello Guys!!!");
};
// myFunction();

// TO find the datatype of the variable:
// console.log(typeof bigNumber);
// console.log(typeof id); //Symbol
// console.log(typeof myFunction); //object-function
// console.log(typeof fruits); //object
// console.log(typeof person); //object
