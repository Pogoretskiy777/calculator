let num = "";
let firstNum = null;
let secondNum = null;
let operator = null;

function add(firstNum, secondNum) {
  if (typeof firstNum === "number" && typeof secondNum === "number") {
    return firstNum + secondNum;
  } else {
    return "Can not subtract non-numbers.";
  }
}

function subtract(firstNum, secondNum) {
  if (typeof firstNum === "number" && typeof secondNum === "number") {
    return firstNum - secondNum;
  } else {
    return "Can not add non-numbers.";
  }
}

function multiply(firstNum, secondNum) {
  if (typeof firstNum === "number" && typeof secondNum === "number") {
    return firstNum * secondNum;
  } else {
    return "Can not multiply non-numbers.";
  }
}

function divide(dividend, divisor) {
  if (typeof dividend === "number" && typeof divisor === "number") {
    if (divisor === 0) {
      return "Nah bro.";
    } else {
      return dividend / divisor;
    }
  } else {
    return "Can not divide non-numbers.";
  }
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
      if (operator === null) {
        display.textContent += " + ";
        if (firstNum === null) {
          firstNum = parseInt(num);
        }
        num = " ";
        operator = button.textContent;
      } else {
        if (num !== " ") {
          secondNum = parseInt(num);
          answer = operate(firstNum, secondNum, operator);
          operator = button.textContent;
          display.textContent = answer + " + ";
          firstNum = answer;
          secondNum = null;
          num = "";
        }
      }
    } else if (button.textContent === "-") {
      if (operator === null) {
        display.textContent += " - ";
        if (firstNum === null) {
          firstNum = parseInt(num);
        }
        num = " ";
        operator = button.textContent;
      } else {
        if (num !== " ") {
          secondNum = parseInt(num);
          answer = operate(firstNum, secondNum, operator);
          operator = button.textContent;
          display.textContent = answer + " - ";
          firstNum = answer;
          secondNum = null;
          num = "";
        }
      }
    } else if (button.textContent === "x") {
      if (operator === null) {
        display.textContent += " x ";
        if (firstNum === null) {
          firstNum = parseInt(num);
        }
        num = " ";
        operator = button.textContent;
      } else {
        if (num !== " ") {
          secondNum = parseInt(num);
          answer = operate(firstNum, secondNum, operator);
          operator = button.textContent;
          display.textContent = answer + " x ";
          firstNum = answer;
          secondNum = null;
          num = "";
        }
      }
    } else if (button.textContent === "/") {
      if (operator === null) {
        display.textContent += " / ";
        if (firstNum === null) {
          firstNum = parseInt(num);
        }
        num = " ";
        operator = button.textContent;
      } else {
        if (num !== " ") {
          secondNum = parseInt(num);
          answer = operate(firstNum, secondNum, operator);
          operator = button.textContent;
          display.textContent = answer + " / ";
          firstNum = answer;
          secondNum = null;
          num = "";
        }
      }
    } else if (button.textContent === "=") {
      if (typeof firstNum === "number" && typeof operator === "string") {
        secondNum = parseInt(num);
        answer = operate(firstNum, secondNum, operator);
        display.textContent = answer;
        firstNum = answer;
        secondNum = null;
        operator = null;
        num = "";
      } else {
        display.textContent = "Could not calculate";
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
