// LeetCode Question : 2626

const reduce = function (nums, fn, init) {
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    res = fn(init, nums[i]);
    init = res;
  }
  return res;
};

const nums = [1, 2, 3, 4];
function reducer(acc, cur) {
  return acc + cur;
}
const init = 0;
console.log(reduce(nums, reducer, init));
