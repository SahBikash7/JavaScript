// Making object using object literals:
const user = {
  username: "Bikash",
  loginCount: 8,
  isLoggedIn: true,
  getUserDetails: function () {
    console.log(this);
    console.log(this.username);
  },
};
// console.log(user.getUserDetails());

// const promise1 = new Promise(); //The new keyword here is a constructor function
// // The constructor function allows us to make multiple instances using a single object literal

function userFunc(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Hello ${this.username}`);
  };
  return this;
  //even if we don't return anything , because of the new keyword the function implicitly returns
}
const user1 = new userFunc("Aayush", 9, true);
const user2 = new userFunc("Manish", 12, false);

// if we don't use new keyword(constructor function) then the user2 overwrites the user1 because the current context(global) inside the function userFunc is same no matter when we run it.

// console.log(user1);
// console.log(user2);

// So, when we use new keyword then an empty object is created which is called an instance and then a constructor function is called and after that all the arguments(this.something) are inserted in the object and we access the object after that...

console.log(user1.constructor);
console.log(user1.constructor());

// So, the constructor property is a reference of yourself

console.log(user1 instanceof userFunc);
console.log(user2 instanceof userFunc);
