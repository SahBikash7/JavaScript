// Iterations are used to execute the same block of code multiple times until the provided condition is matched(true)..
// There are 3 types of loop.They are:
// 1.for loop.
// 2.while loop.
// 3.do-while loop.

// for loop:
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // console.log("Hi , Five here!");
  }
  //   console.log(i);
}

// Nested for loop:
for (i = 0; i <= 10; i++) {
  //   console.log(`Outer loop here with value ${i}.`);
  for (j = 0; j <= 1; j++) {
    // console.log(`Inner loop here with inner value ${j} and outer value ${i}.`);
  }
}

// Using for loop to access array:
let fruits = ["Apple", "Mango", "Litchi", "Guava", "Pineapple", "Coconut"];
for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  //   console.log(element);
}

// break and continue:
// break => terminates the loop.
// continue => skips the current iteration.

//Use of break:
for (let i = 1; i <= 20; i++) {
  if (i == 10) {
    // console.log("10 is matched and I am out of the loop.");
    break;
  }
  //   console.log(`The value of i is ${i}.`);
}

// Use of continue:
for (let i = 1; i <= 20; i++) {
  if (i == 10) {
    console.log("10 is matched and I am skipping the loop for i=10.");
    continue;
  }
  console.log(`The value of i is ${i}.`);
}
