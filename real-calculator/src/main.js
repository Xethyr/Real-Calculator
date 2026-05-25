import { evaluate } from "mathjs";
const display = document.getElementById("display");
const keys = document.querySelector(".keys");
const operators = document.querySelector(".operators");
const displayTwo = document.getElementById("display-two");

function appendToDisplay(input) {
  if (display.value.length < 10) {
    display.value += input;
  }
}

function appendToSecondDisplay() {
  displayTwo.value += display.value;
}

function clearDisplay() {
  display.value = "";
}

function clearSecondDisplay() {
  displayTwo.value = "";
}

function calculate() {
  try {
    let result = evaluate(displayTwo.value);
    if (result > 999999999) {
      display.value = result.toExponential(5);
    } else {
      display.value = result.toPrecision(10);
    }
  } catch (error) {
    display.value = "Error";
  }
}

keys.addEventListener("click", (e) => {
  // clicking functionality
  if (e.target.tagName !== "BUTTON") return;

  const value = e.target.textContent.trim();

  if (value === "=") {
    appendToSecondDisplay();
    calculate();
  } else if (value === "C") {
    clearDisplay();
    clearSecondDisplay();
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    appendToDisplay(value);
    appendToSecondDisplay();
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
    clearSecondDisplay();
  }
  if (e.key === "Enter") {
    calculate();
  }
});
