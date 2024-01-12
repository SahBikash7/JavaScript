const bodyELe = document.body;
const colorButtons = document.querySelectorAll(".color-box"); //gives us a NodeList so we can use forEach
colorButtons.forEach((buttons) => {
  buttons.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(event.target);
    bodyELe.style.backgroundColor =
      window.getComputedStyle(buttons).backgroundColor;
  });
});
