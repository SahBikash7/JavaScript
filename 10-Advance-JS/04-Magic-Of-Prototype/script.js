// The default behaviour of javascript is the prototypal behaviour(it keeps on going to upper levels(parents-grandparents-greatgrandparents) until it doesn't get any value)

// Prototypal behaviour is the reason why this, new, classes, prototypal inheritence, etc. can be used

// Array => Object => null;
// String => Object => null;
// Function => Object => null;

function multiplyByFive(num) {
  return num * 5;
}
multiplyByFive.power = 34;

console.log(multiplyByFive(10));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);

function createUser(username, id) {
  this.username = username;
  this.id = id;
}
createUser.prototype.increment = function () {
  this.id++;
};
createUser.prototype.printMe = function () {
  console.log(`ID is ${this.id}`);
};

const user1 = new createUser("Bikash", 234);
const user2 = new createUser("Babluu", 201);

user1.printMe();
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
