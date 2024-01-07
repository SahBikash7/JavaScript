var a = 10;
let b = 20;
const c = 30;
if (1) {
  var a = 100;
  let b = 200;
  const c = 300;
  //   console.log("Inside Loop:");
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
}
// console.log("Outside Loop:");
// console.log(a);
// console.log(b);
// console.log(c);

// var is global scoped whereas let and const are local scoped..so it is better to use let and const because it prevents us from the conflict with the variables...
// The scope in browser console and in our code-environment are differnt..

// Nested scope:

function one() {
  const f1 = "1";
  function two() {
    const f2 = "2";
    // console.log(f1);
  }
  //   console.log(f2);
  two();
}
one();
// NOTE: function two can access f1 but function one cannot access f2..i.e in a nested function a child function can access the variables of the parent function but the parent function cannot access the variables of the child function

// ############################## INTERESTING ############################
console.log(addOne(5));
function addOne(num) {
  //This king of declaration of function helps to call the function even before it is declared..
  return num + 1;
}

// console.log(addTwo(5));
// const addTwo=function(num){
// This king of declaration of function doesn't allow us to call the function before it is declared..
//     return num+2;
// }
