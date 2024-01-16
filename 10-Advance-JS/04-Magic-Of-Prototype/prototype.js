let myHeroes = ["Spiderman", "Ironman", "Superman", "Thor", "Hulk"];

let heroPower = {
  Spiderman: "Sling",
  Ironman: "Machine",
  Superman: "Underwear",
  Thor: "Hammer",
  Hulk: "Size",
  getSpiderPower: function () {
    console.log(`The power of spiderman is ${this.Spiderman}`);
  },
};

Object.prototype.sayHelloObj = function () {
  console.log("Hello I was injected in Object");
};
Array.prototype.sayHelloArr = function () {
  console.log("Hello I was injected in Array");
};

// heroPower.sayHelloObj();
// myHeroes.sayHelloObj();
// myHeroes.sayHelloArr();
// heroPower.sayHelloArr();

// Inheritance :
const user = {
  name: "Bikash",
  isLoggedIn: true,
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: "true",
  __proto__: TeachingSupport, //This is known as prototypal inheritance in which we access the properties of one object in another
};
Teacher.__proto__ = user;

// Modern-Syntax:
Object.setPrototypeOf(TeachingSupport, Teacher);
// console.log(TeachingSupport.makeVideo);

// We need to make a method of string which prints the true length of the string:
let myName = "Bikash     ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length Is ${this.trim().length}`);
};
myName.trueLength();
"babbluuu    ".trueLength();
