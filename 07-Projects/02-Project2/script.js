// The problem was that on hitting the calculate button the page was reloading itself since it is the default behaviour of form that when we click submit(here:calculate), it causes the browser to send a request to the server with the form data, and the server responds by reloading the page or redirecting to another page.

// So to prevent that, either we can prevent the default behaviour of form on event of submit as:
// document
//   .getElementById("myForm")
//   .addEventListener("submit", (event) => event.preventDefault());

// OR we can use return false; in the form tag itself(see the index.html)...

// The formula to calculate BMI is:
// An alternate calculation formula for BMI is dividing the weight in kilograms by the height in centimeters squared, and then multiplying the result by 10,000.

// Function to make the inputArea clear the previous entered value:
const inputArea = document.querySelectorAll(".takeText");
inputArea.forEach((area) => {
  area.addEventListener("click", (event) => {
    area.value = "";
  });
});

// Function to calculate BMI:
const calcBMI = () => {
  const height = Number(document.getElementById("height-value").value);
  const weight = Number(document.getElementById("weight-value").value);
  const newP = document.createElement("P");
  const toReplace = document.querySelectorAll("p:last-child");
  // So i used replaceWith because each time i was clicking calculate , a new p element was getting added again below the already created p element...
  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    // We can also use toReplace[0].innerText=""; which is more easier to understand but i wanted to try new things..
    newP.appendChild(
      document.createTextNode("Please Enter Correct Values🤨🤨!!!")
    );
    newP.style.marginTop = "3vh";
    newP.style.color = "darkred";
    toReplace[0].replaceWith(newP);
    return;
  }
  const BMI = ((weight / (height * height)) * 10000).toFixed(2);
  if (BMI < 18.6) {
    newP.appendChild(
      document.createTextNode(
        `Your BMI is ${BMI} ( Under Weight , Eat Up Kiddo!!!).`
      )
    );
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    newP.appendChild(
      document.createTextNode(
        `Your BMI is ${BMI} ( Normal , Doing Good I see).`
      )
    );
  } else if (BMI > 24.9) {
    newP.appendChild(
      document.createTextNode(
        `Your BMI is ${BMI} ( OverWeight , Touch Some Grass Bro )`
      )
    );
  }
  newP.style.marginTop = "3vh";
  toReplace[0].replaceWith(newP);
};
