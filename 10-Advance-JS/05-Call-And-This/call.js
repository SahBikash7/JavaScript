function setUserName(username) {
  console.log("Called setUserName");
  this.username = username;
}
function createUser(username, email, password) {
  //   setUserName(username); //setUserName is getting called and is  setting the username in its currentContext which vanishes after its execution is completed.So, we need to give the reference to the setUseName function that your currentContext is the context of createUser.

  setUserName.call(this, username);
  this.emai = email;
  this.password = password;
}

const user = new createUser("Bikash", "sahb98765@gmail.com", "2344");
console.log(user);
// Wooahhh!, we get the email and password as expected but we didn't get the username as Bikash(infact username bhanne key nai xaina user ma);
