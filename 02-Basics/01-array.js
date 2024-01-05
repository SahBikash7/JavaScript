//Javascript arrays are resizeable and can store mix datatypes...

// Two ways to declare an array:
const arr1 = [1, 2, 3, 4, "Bikash", true];
// const arr2= new Array(1,2,3,4,"Bikash",true);
// console.log(arr1);
// console.log(arr1[3]);

// Array Methods:
// arr1.push("Hello"); //Adds Hello to the last of arr1...
// console.log(arr1);
// arr1.pop(); // Removes last element of the array...
// console.log(arr1);

// arr1.unshift(10); //Adds 10 at the start of the arr1.
// console.log(arr1);
// arr1.shift(); // Removes the first element of the array.
// console.log(arr1);

// console.log(arr1.includes(10));
// console.log(arr1.includes(1));
// console.log(arr1.indexOf(10));
// console.log(arr1.indexOf(1));

// const arr2 = arr1.join(); //converts array to string with comma separation
// console.log(arr1);
// console.log(arr2);
// console.log(typeof arr1);
// console.log(typeof arr2);

// slice() and splice():

const arr3 = arr1.slice(1, 3);
console.log(arr3);
console.log(`After using slice(), arr1 = ${arr1}`);

const arr4 = arr1.splice(1, 3);
console.log(arr4);
console.log(`After using splice(), arr1 = ${arr1}`);

// slice() doesn't manipulate original array whereas splice manipulates the original array and also remember that slice() doesn't include the stopping index whereas splice() includes the stopping index too..
