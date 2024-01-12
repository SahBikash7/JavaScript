const guessEle = document.getElementById("text-Area");
const submitButton = document.querySelector("#submit");
const prevGuessEle = document.getElementById("prev-guess");
const remGuessEle = document.getElementById("guess");
const resultEle = document.getElementById("result");
let guessesRemaining = 10;

// Generating a random number from 1 to 100:
const ranNum = Math.floor(Math.random() * 100 + 1);

// Function to make the inputArea clear the placeholder and also previous entered value:
guessEle.addEventListener("click", function clear(event) {
  guessEle.value = "";
  guessEle.placeholder = "";
  if (guessesRemaining === 0 || resultEle.style.color === "green") {
    guessEle.removeEventListener("click", clear);
    return;
  }
  resultEle.innerText = "";
});

// Adding EventListener To Submit button:
submitButton.addEventListener("click", function mainLogic(event) {
  const guessedNum = Number(guessEle.value);
  if (isNaN(guessedNum) || guessedNum < 1 || guessedNum > 100) {
    resultEle.innerText = `Please Think Of A Number From 1-100 !`;
    return;
  }
  if (guessesRemaining === 0) {
    remGuessEle.innerText = `Guesses Remaining : ${guessesRemaining}`;
    resultEle.innerText = `Sorry , Looks Like You Have Used All Your Guesses 😭 !!!`;
    resultEle.style.color = "red";
    submitButton.removeEventListener("click", mainLogic);
  } else {
    if (guessedNum === ranNum) {
      prevGuessEle.innerText += ` ${guessedNum} ( Hurray 🎉) !`;
      if (guessesRemaining === 10) {
        resultEle.innerText = `Mythothical! You guessed The Right Number In Your Very First Try 🥳!!!`;
      } else {
        resultEle.innerText = `Congratulations! You guessed The Right Number 🥳!!!`;
      }
      resultEle.style.color = "green";
      guessEle.value = "";
      submitButton.removeEventListener("click", mainLogic);
    } else {
      prevGuessEle.innerText += ` ${guessedNum} , `;
      guessesRemaining -= 1;
      remGuessEle.innerText = `Guesses Remaining : ${guessesRemaining}`;
      resultEle.innerText = `Oops ! Better Luck Next Time !!!`;
      resultEle.style.color = "darkred";
      guessEle.value = "";
    }
  }
});
