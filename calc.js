const clearBtn = document.querySelector("#clearBtn");

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

// clearDisplay();
