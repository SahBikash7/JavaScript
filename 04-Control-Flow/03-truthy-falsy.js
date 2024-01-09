let userEmail = "Bikash345@gmail.com";
if (userEmail) {
  console.log("Got the email of user!");
} else {
  console.log("Didn't get the email of the user!");
}

// falsy values:
// 1. false
// 2. 0
// 3. -0
// 4. 0n
// 5. ""
// 6. null
// 7. undefined
// 8. NaN

// truthy values:
// Other every values are truthy values but here are few of them:
// 1. "0"
// 2. "false"
// 3. " "
// 4. []
// 5. {}
// 6. function(){}

// Detecting an empty array:
userEmail = [];
if (userEmail.length === 0) {
  console.log("The array is empty!");
}

// Detecting an empty object:
const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("The object is empty!");
}

