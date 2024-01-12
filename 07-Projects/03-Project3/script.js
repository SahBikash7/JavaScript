const clockEle = document.querySelector("#clock");

// We want to write a functin which runs again and again itself after certain interval,so we use setInterval():
// The syntax for setInterval() is:
// setInterval(function , Interval-In-Milliseconds);

setInterval(() => {
  let date = new Date();
  clockEle.innerText = `${date.toLocaleTimeString()}`;
}, 1000);
