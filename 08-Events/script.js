// Adding Events:

// Method-1 : Directly in the HTML Tag
// Adding the onclick event in the HTML tag itself is not a fesible approach to do because scale garne bela difficulties aauxa.

// Method-2
// document.getElementById("owl").onclick = function () {
//   alert("You Clicked On Owl!");
// };
// Well,This approach is good but it gives us less features than Method-3.

//Method-3: (Best One Yet)
// document.getElementById("owl").addEventListener(
//   "click",
//   (e) => {
//     alert("You Clicked On Owl!");
//     console.log(e); //prints the event object
//   },
//   false
// );

// Events' Properties we need to learn:
// 1. type
// 2. timeStamp
// 3. defaultPrevented
// 4. target
// 5. toElement
// 6. srcElement
// 7. currentTarget
// 8. clientX , clientY ,screenX , screenY
// 9. altkey, ctrlkey, shiftkey, keyCode

// Event Propogation:
// The third parameter in addEventListener is a boolean value which is by default false.
// The event propogation has two contexts : eventBubbling and eventCapturing
// Most of the projects use default i.e false i.e eventBubbling but we might have to use eventCapturing in few scenarios:

// Understanding Event Capturing:

// document.getElementById("images").addEventListener(
//   "click",
//   (event) => {
//     console.log("Clicked Inside ul");
//   },
//   false
// );
// document.getElementById("owl").addEventListener(
//   "click",
//   (event) => {
//     console.log("Clicked On Owl");
//     event.stopPropagation(); // if we don't want our event to bubble then we can use event.stopPropagation()
//   },
//   false
// );
// The default value is false which does eventBubbling i.e when we click on owl at first "Clicked On owl" is printed and then "Clicked Inside ul" is printed which shows that the elements are captured from inside to outside i.e img then li then ul..So, we say the eventPropagation is eventBubbling here but if we use the true parameter then the elements are captured from outside to inside(bigger element to smaller element) i.e. ul then li then img ans so "Clicked Inside ul" is printed and then "Clicked On Owl" and this kind of eventPropagation is called eventCapturing..

//Learning preventDefault() :
// document.getElementById("google").addEventListener(
//   "click",
//   (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     console.log("Clicked On Google");
//   },
//   false
// );

// The goal is that when we click on the image we need to vanish that image.
document.querySelector("#images").addEventListener("click", (event) => {
  //   console.log(event.target);
  //   event.target.style.display = "none";
  //   well the images are removed on doing this but we wanna remove the list item as a whole not only the image.
  //   ....
  //   console.log(event.target.parentNode);
  //   event.target.parentNode.remove();
  //   //   event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  //   well this does remove the list item but if we click on the blank spaces of ul then whole ul is removed because parent of ul is div containing ul
  // .....Solving the problem:

  console.log(event.target.tagName);
  if (event.target.tagName === "IMG") {
    event.target.parentNode.remove();
  }
}),
  false;
