const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
let intervalId;

// Generating The Random Color:
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
randomColor();

// Functions:
function changeBgcolor() {
  document.body.style.backgroundColor = randomColor();
}

function startChangingBgColor() {
  if (!intervalId) {
    intervalId = setInterval(changeBgcolor, 1000);
  }
}

function stopChangingBgColor() {
  clearInterval(intervalId);
  intervalId = null;
}

startButton.addEventListener("click", startChangingBgColor);
stopButton.addEventListener("click", stopChangingBgColor);
