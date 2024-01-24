// Write a JS program to convert a comma-separated values(CSV) string to a 2D array. A new line indicates a new row in the array.
// Example:
// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza

const parseCSV = (str) => str.split("\n").map((row) => row.split(","));
console.log(
  parseCSV(
    `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`
  )
);
