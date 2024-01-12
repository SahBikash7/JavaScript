// Function for inputArea:
const inputArea = document.querySelector("#takeText");
inputArea.addEventListener("click", () => {
  inputArea.placeholder = "";
  inputArea.value = "";
});

// Add a New LiEle:
const parentEle = document.querySelector(".language");
function addLiEle(text) {
  if (text === "") {
    inputArea.placeholder = "Bro Give Any Language Here🤨🤨!!!";
    return;
  }
  const liEle = document.createElement("li");
  liEle.appendChild(document.createTextNode(text));
  parentEle.appendChild(liEle);
}

// To Edit: We can use innerHTML or replaceWith():
// const firstlang = document.querySelector("li:nth-child(1)");

// Using innerHTML:
// firstlang.innerHTML = "Edited";

// Using replaceWith():
// const newLi = document.createElement("li");
// newLi.appendChild(document.createTextNode("Edited"));
// firstlang.replaceWith(newLi);

// One More Way (Using outerHTML):
// const firstlang1 = document.querySelector("li:nth-child(1)");
// firstlang1.outerHTML = `<li>Edited using outerHTML</li>`;

// To Remove The Element:
// const delFirst = document.querySelector("li:first-child");
// delFirst.remove();
