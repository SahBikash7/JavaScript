// Write a JS function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

const predicateFn = (item) => item < 10;

const fn2 = (fn1, arr) => arr.every(fn1);

console.log(fn2(predicateFn, [1, 2, 3, 4, 5]));
