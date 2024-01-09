// if statement:
// The syntax for if statement is:

// if(condition/expression){
//     code;
// }
// else{
//     code;
// }

// There are few relational and logical operators used for evaluating a boolean answer:
// < , > , <= , >= , == , != , === , !== , && , ||

// const score = 200;
const score = 80;
// if (score > 100) {
//   const power = "Fly";
//   console.log(`User has power to ${power}.`);
// } else {
//   // power variable is out of the scope of else
//   console.log(`User has no power.`);
// }

// Ternary Operator:(Short-hand for if statement):
const balance = 500;
// balance > 600
//   ? console.log(`The balance is more than ${balance}.`)
//   : console.log(`The balance is less than or equal to ${balance}`);

// if-else Ladder:
// if (balance < 500) {
//   console.log("The balance is less than 500.");
// } else if (balance === 500) {
//   console.log("The balance is equal to 500.");
// } else if (balance !== 500) {
//   console.log("The balance is not equal to 500");
// } else {
//   console.log("The balance is more than 500");
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromFacebook = false;

if (isUserLoggedIn && debitCard) {
  console.log("You are all set for shopping with us!!!");
}
if (loggedInFromFacebook || loggedInFromGoogle) {
  console.log("User Logged In!!!");
}

// Nested if:Using if statement inside another if statement
if (isUserLoggedIn) {
  if (debitCard) {
    if (loggedInFromGoogle) {
      console.log("User is logged in from google and also has the debit card.");
    }
  }
}
