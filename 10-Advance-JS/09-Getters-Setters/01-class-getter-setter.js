// Getter Method:
// A getter method is used to retrieve the value of a private attribute in a class. It provides controlled access to the internal state of the object.
// In most cases, a getter method simply returns the current value of the attribute

// Setter Method:
// A setter method is used to modify the value of a private attribute. It allows controlled modification of the internal state.
// The setter method typically takes a new value as an argument and sets the attribute to that value.

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  //   Controlling Getters and Setters:
  //   whenever we make an object and add properties ,then getters and setters are made as a method having the name of that property for each property.

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return this._password.toUpperCase();
  }
  //   once getter is defined we also need to define setter:
  set password(value) {
    this._password = value;
  }
}

const user = new User("Bikash", "Hello@123gmail.com", "dsfzvrs");
console.log(user);
console.log(user.password);
console.log(user._email);

// when you access user.email, it returns the uppercase version of the _email property. The leading underscore in _email is a common convention in JavaScript to indicate that the property is intended to be private or internal to the object. However, it doesn't enforce true encapsulation; it's more of a naming convention.

// In JavaScript, using a getter does not make a property truly private. While it provides a mechanism for controlling access to a property and can be used to enforce certain behaviors when retrieving the value, it doesn't establish true encapsulation or privacy.

// In JavaScript, properties are not inherently private, and there is no strict enforcement of access control. However, developers often use naming conventions and certain patterns to indicate that a property should be treated as if it were private.

// Here's an example using a getter:
// const user = {
//   _email: 'john.doe@example.com',

//   get email() {
//     return this._email.toUpperCase();
//   }
// };

// console.log(user.email); //
// Outputs: JOHN.DOE@EXAMPLE.COM
// In this example, the _email property is conventionally considered private due to the leading underscore. The get email() method allows controlled access to the property by providing an uppercase version of the email.

// However, it's important to note that this is a convention, and the property is still accessible and modifiable from outside the object. For example, someone could directly access user._email if they choose to do so.
