// Write a JS program to find the number of even values up to a given number.

const countEven = (num) => {
  let count = 0;
  for (let i = 2; i <= num; i += 2) {
    count++;
  }
  return count;
};
console.log(countEven(50));
console.log(countEven(2));
console.log(countEven(10));
