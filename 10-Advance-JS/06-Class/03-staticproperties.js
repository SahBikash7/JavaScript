class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`${this.username} just logged in.`);
  }

  //   In some cases we don't want to give access of the createId() to each and every object which are instanciated from User class.So, we use static infront of the method ,which also prevents the object to access createId() instanciated from any class which extends User Class(Basically inherited class bata instanciated bhako object lai access didaina)
  static createId() {
    return `1234`;
  }
}

const user = new User("Bikash");
console.log(user);
// console.log(user.createId());

class Teacher extends User {
  constructor(username, email, password) {
    super(username); //takes the reference of Teacher currentcontext to the class on which the Teacher extends
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}.`);
  }
}

const teacher = new Teacher("Manish", "Hello@123gmail.com", "dsgvfdsc");
console.log(teacher);
teacher.logMe();
// console.log(teacher.createId());
