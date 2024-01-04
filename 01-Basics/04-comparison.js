// console.log(2<3);
// console.log(2<=3);
// console.log(2>3);
// console.log(2>=3);
// console.log(2==3);
// console.log(2!=3);

// console.log("2">1);
// console.log("02">1);
// Always Remember to check whether the two data to be checked have same datatype or not, if not make them of same datatype and then compare because if u don't do so u might not get expected result:

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// the reason that line 16 results true is that an equality check == and comparison > < >= <= work differently.Comparisons convert null to a number,treating it as 0.
// That's why line 14 null>=0 is true and line 13 is false..

// console.log(undefined > 0); //false
// console.log(undefined == 0); //false
// console.log(undefined === 0); //false
// console.log(undefined >= 0); //false

//Strict Check (===): Checks both values and datatypes..
console.log("2" == 2); //true
console.log("2" === 2); //false
