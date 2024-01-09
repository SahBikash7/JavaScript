// reduce:
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const myNum = [1, 2, 3, 4];
const initialValue = 0;
const total = myNum.reduce(function (accumulator, currentValue) {
  //   console.log(`accumulator=${accumulator} and currentValue=${currentValue}.`);
  return accumulator + currentValue;
}, initialValue);
// console.log(total);

// What happens if we don't give any initial value to accumulator:
const totalWithoutInitialValue = myNum.reduce(function (
  accumulator,
  currentValue
) {
  //   console.log(`accumulator=${accumulator} and currentValue=${currentValue}.`);
  return accumulator + currentValue;
});
// console.log(totalWithoutInitialValue);
// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// Writing reduce using arrow function:
const totalUsingArrow = myNum.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
// console.log(totalUsingArrow);

const shoppingCart = [
  { itemName: "Shirt", price: 5000 },
  { itemName: "Pant", price: 10000 },
  { itemName: "Jeans", price: 50000 },
];
const totalCost = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`Your total cost is ${totalCost}.`);
