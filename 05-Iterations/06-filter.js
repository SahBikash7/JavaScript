// Ok so we understood that the callback function inside the forEach loop doesn't return anything.So what we do if we want something in return.Well here comes filter.

//arrName.filter( callback Function Here )

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => {
//   console.log(num);
//   return num > 4;
// });
// console.log(newNum);

const newNum = myNum.filter((num) => num > 4);
// console.log(newNum);

// Doing the same above thing with forEach:
// const newNum1 = [];
// myNum.forEach((num) => {
//   if (num > 4) {
//     newNum1.push(num);
//   }
// });
// console.log(newNum1);

// Real-Life Example:
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");
// console.log(userBooks);
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);
