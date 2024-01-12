// Accessing the children from parents:
const parent = document.querySelector(".week");

// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0]);
// console.log(parent.children[0].innerHTML);
// console.log(parent.children[0].textContent);

// parent.children gives us the HTMLCollection:
// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

// Styling:
parent.children[0].style.color = "red";
// Every styling which we do in javascript gets added to the element as inline CSS.

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// Accessing the parent from children:
const child1 = document.querySelector(".day");
console.log(child1);
console.log(child1.parentElement);
console.log(typeof child1.parentElement);
console.log(child1.nextElementSibling);

console.log("Nodes : ", parent.childNodes);
// parent.childNodes gives us a NodeList which is a complex tree structure.
// The NodeList here has length 15 since it counts every linebreaks and comments which we have given in the HTML.
// Also remember that the HTML counts more than one linebreaks as one.
