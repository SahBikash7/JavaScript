// setTimeout("handler","time-in-milliseconds");
// handler is a nameless function.

// setTimeout(() => {
//   console.log("After 2 seconds!");
// }, 2000);

const greet = () => {
  console.log("Welcome After 2 seconds!");
};
const changeText = () => {
  document.getElementsByTagName("h1")[0].innerHTML = "Hello My Bro!!!";
};

const changeTextRef = setTimeout(changeText, 5000);
const greetRef = setTimeout(greet, 2000);

document.getElementById("stop").addEventListener("click", () => {
  console.log("STOPPED");
  clearTimeout(greetRef);
  clearTimeout(changeTextRef);
});
