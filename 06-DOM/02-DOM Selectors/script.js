// DOM Selectors:

// Selecting the element by id:
// console.log(document.getElementById("title"));

// getting id:
// console.log(document.getElementById("title").id);

// getting class:
// console.log(document.getElementById("title").className);

// getting id using getAttribute:
// console.log(document.getElementById("title").getAttribute("id"));

// getting class using getAttribute:
// console.log(document.getElementById("title").getAttribute("class"));

// setting class using setAttribute:
// document.getElementById("title").setAttribute("class", "test");
// It overwrites every already existing class with test class.

// setting class using setAttribute along with the original class:
// document.getElementById("title").setAttribute("class", "test heading");

// We can also store the HTML element in a variable as:
const title = document.getElementById("title");
// console.log(title);

// Setting Style:
title.style.backgroundColor = "blue";
// Not only backgroundColor, we can apply each and every style of CSS using .style.

// textContent:
// console.log(title.textContent);

// innerHTML:
// console.log(title.innerHTML);

// innerText:
// console.log(title.innerText);

// The difference between textContent and innerText is that the textContent shows us the text even if we have changed its display to none whereas if we change the display to none i.e. hide the text ,innerText doesn't display that text.
// The innerHTML shows us the whole html present inside the element, including the tags.

// getElementsByClassName():
// console.log(document.getElementsByClassName("heading"));

// querySelector():
console.log(document.querySelector("h2")); //gives us the first h2 element.
console.log(document.querySelector("#title"));
console.log(document.querySelector(".heading"));
console.log(document.querySelector('input[type="password"]'));

// Basically we can use any CSS Selector inside the query selector:
// console.log(document.querySelector(any-CSS-Selector));

const myul = document.querySelector("ul");
myul.querySelector("li").style.backgroundColor = "red";
myul.querySelector("li").style.padding = "10px";
myul.querySelector("li").innerText = "This is changed using innerText";

// Remember that the NodeList and HTMLCollection are not a pure array.Also few methods which we can apply on array can't be applied on them.

// querySelectorAll():
console.log(document.querySelectorAll("li"));
// querySelectorAll() gives us a NodeList of all the elements with li tag.

const liList = document.querySelectorAll("li");
liList[0].style.color = "blue";
liList.forEach((l) => (l.style.backgroundColor = "red")); //forEach is present in the prototype of NodeList.

// getElementsByClassName():
const listClassList = document.getElementsByClassName("list-item");
console.log(listClassList); //Gives us a HTMLCollection of elements having list-item class.

// Also Remember that HTMLCollection and NodeList are different..forEach is not present in the prototype of HTMLCollection.So,we cannot apply that to loop through HTMLCollection Elements.

// listClassList.forEach((l) => console.log(l));
// ERROR:
// Uncaught TypeError: listClassList.forEach is not a function at script.js:78:15

// So to use all the property of array on HTMLCollection and NodeList , we convert them into the array.
const arrListClassList = Array.from(listClassList);
console.log(arrListClassList);
arrListClassList.map((item) => console.log(item));
