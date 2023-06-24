const clearBtn = document.querySelector("#clearBtn");
// const number = document.querySelector(".number");
const input = document.querySelector("input");
const add = document.querySelector(".add");

clearBtn.addEventListener("click", clearDisplay);
function clearDisplay() {
  thePoint.textContent = "";
  // console.log("Clearing display");
}

function topDisplay() {
  const displayContainer = document.querySelector("#displayContainer");
  const theDisplay = document.createElement("div");
  theDisplay.className = "theDisplay";
  thePoint = document.createElement("p");
  thePoint.className = "thePoint";
  thePoint.style.color = "red";
  thePoint.textContent = "HELLO WORLD";
  theDisplay.appendChild(thePoint);
  displayContainer.appendChild(theDisplay);
  console.log(theDisplay);
}
topDisplay();

// function for switch statement

function calculator() {
  for (i = 0; i <= input.length; i++) {
    i = input.value[i];
    return i;
  }
  console.log(input.value);
  console.log("input.value");
}
calculator();

// function calculator() {
//   const firstNumber = prompt();
//   const secondNumber = prompt();
//   const operator = prompt("");

//   switch (operator) {
//     case "+":
//       return firstNumber + secondNumber;
//     case "-":
//       return firstNumber - secondNumber;
//     case "*":
//       return firstNumber * secondNumber;
//     case "/":
//       return firstNumber / secondNumber;
//     default:
//       return "Invalid operator";
//   }
// }

const result = calculator();
console.log(result);
