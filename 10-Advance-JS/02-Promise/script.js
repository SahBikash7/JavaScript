// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// History of promise:
// When we didn't had access of promise directly in javascript , we used to use async-await directly but promise had better syntax so we had library as Q , Bluebird with the help of which we could use every functionality like .then(),fetch(),etc in the core JavaScript.But, now we have direct access in the core JS..

// There are two parts of promises:- 1.) Consuming Promises 2.) Creating Promises

// How are promises created?
//Promise-1 :
// const promise1 = new Promise(function (resolve, reject) {
//   // Do an Async Task:
//   //   1. DB Calls
//   //   2. Cryptography
//   //   3. Network Call

//   setTimeout(() => {
//     console.log("Async Task is Completed");
//     resolve();
//   }, 1000);
// });

// Consuming Promise:
// promise1.then(function () {
//   console.log("Promise Consumed!");
// });
// .then() has direct association with resolve.

// Promise-2 :
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async Task 2!");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 Resolved");
// });

// Promise-3 :
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       username: "Bikash",
//       email: "Hellohi@gmail.com",
//     });
//   }, 1000);
// });
// promise3.then(function (userInfo) {
//   console.log(userInfo);
// });

// Promise-4 :
// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Aayush", password: "12345" });
//     } else {
//       reject("ERROR: Something Looks Fishy Here!!!");
//     }
//   }, 1000);
// });
// promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((userNameOnly) => {
//     console.log(userNameOnly);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("The Promise is either resolved or rejected!"));

// Promise-5 :
// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Babluuuuuuuuuu", password: "#hynbkcn12381" });
//     } else {
//       reject("ERROR : Error 404!!!");
//     }
//   }, 1000);
// });

// async function consumePromise5() {
//   const response = await promise5;
//   console.log(response);
// }
// consumePromise5();

// if the error is false then everything works good but if we have error as true then problem arises because async-await cannot directly handle the errors:(we need to use try-catch) as below:

// async function consumePromise5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromise5();

// Get your github loginName:

// async function getMyLoginName() {
//   const url = "https://api.github.com/users/SahBikash7";
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.login);
//   } catch (error) {
//     console.log(`Error : ${error}`);
//   }
// }
// getMyLoginName();

// Get your github loginName Using Promise:
fetch("https://api.github.com/users/SahBikash7") //The fetch() returns a response
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.login);
  })
  .catch((error) => {
    console.log(`Error : ${error}`);
  })
  .finally(() => {
    console.log("JOB DONE CAPTAIN!!!");
  });

//   The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

//   The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
