let num = "";
let firstNum = null;
let secondNum = null;
let operator = null;

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
      firstNum = parseInt(num);
      num = "";
      operator = button.textContent;
    } else if (button.textContent === "-") {
      display.textContent += " - ";
      firstNum = parseInt(num);
      num = "";
      operator = button.textContent;
    } else if (button.textContent === "x") {
      display.textContent += " x ";
      firstNum = parseInt(num);
      num = "";
      operator = button.textContent;
    } else if (button.textContent === "/") {
      display.textContent += " / ";
      firstNum = parseInt(num);
      num = "";
      operator = button.textContent;
    } else if (button.textContent === "=") {
      if (typeof firstNum === "number") {
        secondNum = parseInt(num);
        display.textContent = operate(firstNum, secondNum, operator);
      }
    } else if (button.textContent === "clear") {
      display.textContent = "";
      num = "";
      firstNum = null;
      secondNum = null;
      operator = null;
    } else {
      display.textContent += button.textContent;
      num += button.textContent.toString();
    }
  });
});
