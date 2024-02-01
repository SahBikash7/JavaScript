// Write a JS program which given the total no. of rows and colums in the theater(nRows and nCols respectively) and the row and the colum u r sitting in, returns the total no. of people who sit strictly behind you and in your column or to the left assuming all seats are occupied...

const findPeople = (nCols, nRows, col, row) =>
  (nRows - row) * (nCols - col + 1);

console.log(findPeople(16, 11, 5, 3));
console.log(findPeople(1, 1, 1, 1));
console.log(findPeople(13, 16, 8, 3));
