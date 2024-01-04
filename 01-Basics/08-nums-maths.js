const num = 30; //JS detects itself that num should be number..
// console.log(num);
//To explicitly define the variable as number we use:

const num1 = new Number(50);
// console.log(num1);
// console.log(num.toString());
// console.log(num1.toString());
// Once converted to string,we can use every method of of string..

const num2 = 100.34762389;
// console.log(num2.toFixed(2)); //Rounds-up the precision
// console.log(num2.toPrecision(3)); //Use Carefully,gives precised value of the no. of digits allocated as input

const num3 = 10000000000;
// console.log(num3.toLocaleString());
// console.log(num3.toLocaleString("en-IN"));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// ###############          MATHS         ############
// console.log(Math);
// console.log(Math.abs(4));
// console.log(Math.abs(-4));
// console.log(Math.round(4.2));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(25));
// console.log(Math.pow(5, 3));
// console.log(Math.min(5, 3, 9, 1, 2));
// console.log(Math.max(5, 3, 9, 1, 2));

// console.log(Math.random()); //Generates random value between 0-1(except 1)
// console.log(Math.floor(Math.random() * 10 + 1)); //Generates random number between 1 and 11 except 11.

const min = 10;
const max = 20;
// To Generate random number from 10-11 including 10 and 20.
console.log(Math.floor(Math.random() * (max - min + 1) + min));
