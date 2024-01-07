// iife-Immediately Invoked Function Expression:
// We use iffe because we don't want any conflict with the global scoped variables and we want to execute the function immediately...

// (function_definition)(execution);
(function iife() {
  console.log("Hello This is iife function!!!");
})();
// So iife doesn't know upto where is its context so explicitly we need to apply semicolon to indicate its context;

//Writing iife as arrow function:
(() => {
  console.log("Hello This is iife using arrow function!!!");
})();

// Passing arguments in the iife function():
((name) => {
  console.log(`${name} is the argument passed in iife function.`);
})("Bikash");

// Named iife:
(function namediife(name) {
  console.log(`${name} is the argument passed in the named iife function.`);
})("Bikash");
