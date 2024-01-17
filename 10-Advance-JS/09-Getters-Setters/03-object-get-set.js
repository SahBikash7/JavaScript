// Object based syntax to define getter and setter using .defineProperty():
const User = {
  _username: "Bikash",
  _email: "Bikash234@gmail.com",
  _password: "sfdjbcn",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const user = Object.create(User);
console.log(user);
console.log(user.email);
