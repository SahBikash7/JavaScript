// setInterval():

// const performRepeatedly = () => {
//   console.log("BIKASH", Date.now());
// };
// const intervalId = setInterval(performRepeatedly, 1000);

// const performRepeatedly1 = (str) => {
//   console.log(str, Date.now());
// };
// const intervalId1 = setInterval(performRepeatedly1, 2000, "Bablu");

// clearInterval(intervalId);
// clearInterval(intervalId1);

const start = document.getElementById("start");
const stop = document.getElementById("stop");
let intervalId;

function runInterval() {
  intervalId = setInterval(
    (str) => {
      console.log(`${str} clicked on start Button!`);
    },
    1000,
    "Bikash"
  );
}
function stopInterval() {
  clearInterval(intervalId);
}

start.addEventListener("click", runInterval);
stop.addEventListener("click", stopInterval);
