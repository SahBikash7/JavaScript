// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   //   The constructor gets called as soon as a new object is initialized from the class

//   encryptPassword() {
//     return `${this.password}abc123`;
//   }
//   userUpperCase() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
// const user = new User("Bikash", "sahb123@gmail.com", "sh000");
// console.log(user);
// console.log(user.encryptPassword());
// console.log(user.userUpperCase());

// Behind The Scences:
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc123`;
};
User.prototype.userUpperCase = function () {
  return `${this.username.toUpperCase()}`;
};
const user = new User("Bikash", "sahb123@gmail.com", "sh000");
console.log(user);
console.log(user.encryptPassword());
console.log(user.userUpperCase());
