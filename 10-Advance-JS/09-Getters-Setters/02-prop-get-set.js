// Function based syntax to define getter and setter using .defineProperty():
function User(username, email, password) {
  this._username = username;
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const user = new User("Bikash", "Hello123@gmail.com", "kjsfbdc");
console.log(user);
console.log(user._email);
console.log(user._password);
console.log(user.email);
console.log(user.password);
