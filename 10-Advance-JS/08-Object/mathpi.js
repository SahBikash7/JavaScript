const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 10;
// console.log(Math.PI);

const user = {
  username: "Bikash",
  id: 466,
  isLoggedIn: true,
  logMe: function () {
    console.log(`${this.username} just logged in.`);
  },
};
console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, "username"));

Object.defineProperty(user, "username", {
  writable: false,
  enumerable: false, //if this is false we cannot iterate that key and its value
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(user, "username"));

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
