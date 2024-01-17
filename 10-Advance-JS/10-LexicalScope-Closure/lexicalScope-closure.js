// Each and every function which is defined inside a parentFunction can access the memory spaces reserved by the parentFunction whereas the parentFunction cannot access the memorySpaces reserved by the childFunctions defined in it. This is called Lexical Scoping...

// function outer() {
//   let username = "Bikash";
//   //   console.log(innerOneSecret); // cannot access

//   function innerOne() {
//     let innerOneSecret = "1234";
//     console.log(`From innerOne ${username}`);
//   }

//   function innerTwo() {
//     console.log(`From innerTwo ${username}`);
//     //   console.log(innerOneSecret); // cannot access
//   }

//   innerOne();
//   innerTwo();
// }
// outer();

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName; //not only returns the reference of displayName function. Infact, it returns the refrence and as well as the lexical scope of the displayName function..
// }

// const myFunc = makeFunc();
// myFunc();

// Real-Life Implementation Of Closure:

// document.getElementById("orange").onclick = function () {
//   document.body.style.backgroundColor = "orange";
// };
// document.getElementById("green").onclick = function () {
//   document.body.style.backgroundColor = "green";
// };

// Better Way to do above:
function clickHandler(color) {
  //   document.body.style.backgroundColor = color;
  return function () {
    document.body.style.backgroundColor = color;
  };
}
document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
