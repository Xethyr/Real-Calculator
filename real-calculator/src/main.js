import { evaluate } from "mathjs";
const display = document.getElementById("display");
const keys = document.querySelector(".keys");

function appendToDisplay(input) {
  if (display.value.length < 10) {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let result = evaluate(display.value);
    if (result > 999999999) {
      display.value = result.toExponential();
    } else {
      display.value = result.toPrecision(10);
    }
  } catch (error) {
    display.value = "Error";
  }
}

keys.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const value = e.target.textContent.trim();

  if (value === "=") {
    calculate();
  } else if (value === "C") {
    clearDisplay();
  } else {
    appendToDisplay(value);
  }
});

window.addEventListener("keydown", (e) => {
  // Adds keyboard functionality
  const operatorInput = e.key;
  const allowedInputs = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    ".",
  ];
  if (allowedInputs.includes(e.key)) {
    appendToDisplay(e.key);
  }
  if (e.key === "c") {
    clearDisplay();
  }
  if (e.key === "Enter") {
    calculate();
  }
});
