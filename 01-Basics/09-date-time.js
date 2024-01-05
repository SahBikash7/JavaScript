// date is an Object.date is currently a temporal api and is difficult to operate with.So,there's a proposal to make date into a global object like Math so that we can easily operate with date as we do with Math..

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate); //Not much readable;
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2024, 0, 5);
// console.log(myCreatedDate.toDateString()); //Month starts from 0 in JS...

// let myCreatedDate = new Date(2024, 0, 5, 9, 49, 50);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-01-05");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-05-2024");
// console.log(myCreatedDate.toLocaleString());

// We also have timestamps in date:
let myTimeStamp = Date.now();
// console.log(myTimeStamp);  //We get milliseconds passed from 1st January 1970 till now..
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  //To get time in seconds

// More Date.Methods():
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); //Since Month Starts From 0.
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    //Use Ctrl+" " to access differnt properties...
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
);
