// LeetCode Question : 2634

const filter = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) res.push(arr[i]);
  }
  return res;
};
const arr = [0, 10, 20, 30];
const greaterThan10 = (num, i) => {
  return num > 10;
};
console.log(filter(arr, greaterThan10));
