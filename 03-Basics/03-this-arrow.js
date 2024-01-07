// "this" tells us about the current context..
const user = {
  name: "Bikash",
  age: "10",
  greeting: function () {
    console.log(`${this.name} , Welcome!!!`);
    // The current context of this here is the object user.
    console.log(this); //gives us the object user
  },
};
// user.greeting(); //Bikash , Welcome!!!
// user.name = "Amit"; // We changed the name of the current context
// user.greeting(); //Amit, Welcome!!!

// console.log(this);
// The above console.log(this) gives us the current context as an empty object because we are in the node environment and in here there is no context right now in the global but if we do the same thing in the browser console then we will get window object as the current context in the global.This is because in ancient times,JS used to run only in the browser but now we have node,deno,bun,etc. which allows us to execute the JS-program in the terminal too...The global object in the browser is the window object as a result we got that

// Can we use this inside a function?
// function tea() {
//   const name = "Bikash";
//   console.log(this); //returns an object
//   console.log(this.name); // gives undefined because the context of this      works in object not inside the function.
// }
// tea();

// const tea = function () {
//   const name = "Bikash";
//   console.log(this); //returns an object
//   console.log(this.name); // gives undefined because the context of this works in object not inside the function.
// };
// tea();

// Declaring function using arrow function:

const tea = () => {
  const name = "Bikash";
  console.log(this); //returns an empty object
  console.log(this.name); // gives undefined because the context of this works in object not inside the function.
};
// tea();

// Explicit return:(using return keyword to return)
// const addNumbers = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addNumbers(2, 3));

// Implicit return:(returning without using return keyword)
// const addNumbers = (num1, num2) => num1 + num2;
// console.log(addNumbers(2, 3));

const addNumbers = (num1, num2) => (num1 + num2);
console.log(addNumbers(2, 3));

// Returning an object implicitly:
const returnObject = () => ({ username: "Itachi" });
console.log(returnObject());
