let firstNum;
let secondNum;
let operator;

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(dividend, divisor) {
  return dividend / divisor;
}

function operate(firstNum, secondNum, operator) {
  if (operator === "+") {
    return add(firstNum, secondNum);
  } else if (operator === "-") {
    return subtract(firstNum, secondNum);
  } else if (operator === "x") {
    return multiply(firstNum, secondNum);
  } else if (operator == "/") {
    return divide(firstNum, secondNum);
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "+") {
      display.textContent += " + ";
    } else if (button.textContent === "-") {
      display.textContent += " - ";
    } else if (button.textContent === "x") {
      display.textContent += " x ";
    } else if (button.textContent === "/") {
      display.textContent += " / ";
    } else {
      display.textContent += button.textContent;
    }
  });
});
