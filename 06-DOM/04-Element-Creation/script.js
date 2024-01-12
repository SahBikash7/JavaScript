const divEle = document.createElement("div");
console.log(divEle);
console.log(typeof divEle);
// Every element itself is a object where it has many properties..
divEle.className = "main";
divEle.id = "myDiv";
divEle.setAttribute("title", "firstDIv");
divEle.style.height = "200px";
divEle.style.backgroundColor = "green";

// Ways to add text:

// No-1 :
divEle.innerText = "This is our first div.";

// No.2 :
const addText = document.createTextNode("This is our first div.");
divEle.appendChild(addText);

// OK so this created div in our memory.Now to display this div on the webpage, we do this:
document.body.appendChild(divEle);
