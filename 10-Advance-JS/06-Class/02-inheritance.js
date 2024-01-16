class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`${this.username} just logged in.`);
  }
}

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

const teacher = new Teacher("Bikash", "Hello@123gmail.com", "hjbbnj23");
// console.log(teacher);
// teacher.addCourse();
// teacher.logMe(); // Can access logMe() because of Teacher extends User

const user = new User("Manish");
// console.log(user);
// user.logMe();
// user.addCourse(); Cannot access addCourse because we haven't used User extends Teacher

console.log(teacher === Teacher);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);
