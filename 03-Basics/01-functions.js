// // Defining a function:
// function add(num1, num2) {
//   //so here num1 and num2 are parameters
//   console.log(num1 + num2);
// }
// //Calling a function:
// add(2, 3); // and here 2 and 3 are arguments

// function add(num1, num2) {
//     const result = num1 + num2;
//     return result;
//   }
//   console.log(add(2, 3));

function add(num1, num2) {
  return num1 + num2;
}
const result = add(2, 3);
// console.log(result);

function loginUserMessage(username = "Bikash") {
  //Bikash is default value for username(if no argument is passed for usename then bikash will be username if not username will be overwritten by the passed argument)
  return `${username} just logged in here!!!`;
}
// console.log(loginUserMessage());
// console.log(loginUserMessage("Aayush"));

// Suppose if u have to take multiple input from the user as an argument for the function then we can use rest:
function calculatePrice(...num1) {
  return num1; //returns an array of arguments given
}
console.log(calculatePrice(200, 300, 400));

function calculatePriceTotal(var1, var2, ...num1) {
  return num1; //returns an array of arguments given except the arguments for var1 and var2
}
console.log(calculatePriceTotal(100, 200, 300, 400));

// Passing Object in Function:
const student = {
  name: "Bikash",
  class: 12,
  id: 1324,
};
function handleObject(anyObject) {
  console.log(
    `The name of the student is ${anyObject.name} and his id is ${anyObject.id}.`
  );
}
handleObject(student);

// passing array in function:
const arrStudent = ["Bikash", "Manish", "Kushal", "Anurag"];
function handleArray(anyArray) {
  // Loop lekhna aalxi lago!!!
  console.log(
    `The name of the students are ${anyArray[0]}, ${anyArray[1]}, ${anyArray[2]} and ${anyArray[3]}.`
  );
}
handleArray(arrStudent);

// NOTE:We can also pass object and array directly to the function.Its not compulsory to pass by the variable name..
