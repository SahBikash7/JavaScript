// Declaring the object with the help of constructor:
const instaUser = new Object(); //Singleton Object
instaUser.id = "78234bik";
instaUser.name = "Bikash";
instaUser.age = 99;
// console.log(instaUser);

const tinderUser = {
  email: "Bikash213455@gmail.com",
  fullName: {
    firstName: "Bikash",
    lastName: "Shah",
  },
};
// console.log(tinderUser.fullName.firstName);

// Merging Objects:
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = {
  5: "e",
  6: "f",
};
// const mergedObj={obj1,obj2,obj3}  //Combines all three objects as a single object inside mergedObj;
// console.log(mergedObj);

// const mergedObj = Object.assign({}, obj1, obj2, obj3);
// The empty bracesses inside assign signifies combine obj1,obj2 and obj3 and store in that empty object whereas if we don't use that then obj1 becomes the target..
// console.log(mergedObj);

// Using Spread:
const mergedObj = { ...obj1, ...obj2, ...obj3 };
// console.log(mergedObj);

// Whenever the data comes from the database it generally comes as an array of objects as:
const users = [
  {
    id: "bikash3456@gmail.com",
    userName: "Bikash",
  },
  {
    id: "aayush3456@gmail.com",
    userName: "Aayush",
  },
  {
    id: "manish3456@gmail.com",
    userName: "Manish",
  },
  {
    id: "sonu3456@gmail.com",
    userName: "Sonu",
  },
  {
    id: "babliikash3456@gmail.com",
    userName: "Babli",
  },
];
// console.log(users[0].userName);
// console.log(users[1].id);

// Some Other Methods of Objects:
// console.log(Object.keys(instaUser)); //Returns an array of keys of instaUser
// console.log(Object.values(instaUser)); //Returns an array of values of instaUser
// console.log(Object.entries(instaUser)); //Returns an array of array of keys and values of instaUser

// To check if the object contains a key or not:
// console.log(instaUser.hasOwnProperty("name"));

// Object Destructuring:
const school = {
  name: "North Point",
  students: 5000,
  rooms: 100,
  principal: "Bikash",
};
console.log(school.principal); //aaba ghari ghari school.principal lekhdai basnu bhanda do this:
const { principal: p } = school; //This is called destructioning of object
console.log(p);
