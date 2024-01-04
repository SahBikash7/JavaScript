let score = false;
// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Conversion Of Different Datatypes to Number:
// 33 => 33;
// "" => 0
// "Something" => NaN(NaN(Not a Number) has its datatype as number since we typecasted it to number but by default NaN is an Object and also remember that we can typecast NaN to any datatype)...
// null => 0
// undefined => NaN
// true => 1; false => 0

let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// Conversion Of Different Datatypes to Boolean:
// 1 => true;
// 33 => true;
// 0 => false;
// "" => 0
// "Something" => true;
// null => false
// undefined => false

let someNumber = false;
let stringSomeNumber = String(someNumber);
// console.log(typeof stringSomeNumber);
// console.log(stringSomeNumber);

// Conversion Of Different Datatypes to String:
// 33 => "33";
// 0 => "0"
// null => "null"
// undefined => "undefined"
// true => "true"; false => "false"

// #####################  OPERATIONS ######################
let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3);  // 2 raised to the power 3.

let str1 = "Hello";
let str2 = " Bikash";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // ==>12
// console.log(1 + "2"); // ==> 12;
// console.log("1" + "2"); // ==> 12;
// console.log("1" + 2 + 2); // ==> 122;
// console.log(1 + 2 + "2"); // ==> 32; //ECMA Script is behind all this

// console.log(true); // ==> true;
// console.log(+true);  // ==> 1;
// console.log(+"");   //  ==> 0;

// let gameCounter=99;
// console.log(gameCounter++);  // ==> 99
// console.log(gameCounter);   // ==> 100


let gameCounter=99;
console.log(++gameCounter);  // ==> 100;