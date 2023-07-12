let num = "";
let firstNum = null;
let secondNum = null;
let operator = null;

function add(firstNum, secondNum) {
  if (typeof firstNum === "number" && typeof secondNum === "number") {
    return parseFloat((firstNum + secondNum).toFixed(4));
  } else {
    return "Can not subtract non-numbers.";
  }
}

function subtract(firstNum, secondNum) {
  if (typeof firstNum === "number" && typeof secondNum === "number") {
    return parseFloat((firstNum - secondNum).toFixed(4));
  } else {
    return "Can not add non-numbers.";
  }
}

function multiply(firstNum, secondNum) {
  if (typeof firstNum === "number" && typeof secondNum === "number") {
    return parseFloat((firstNum * secondNum).toFixed(4));
  } else {
    return "Can not multiply non-numbers.";
  }
}

function divide(dividend, divisor) {
  if (typeof dividend === "number" && typeof divisor === "number") {
    if (divisor === 0) {
      return "Nah bro.";
    } else {
      return parseFloat((dividend / divisor).toFixed(4));
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
  } else if (operator === "x" || operator === "*") {
    return multiply(firstNum, secondNum);
  } else if (operator == "/") {
    return divide(firstNum, secondNum);
  }
}

function handleClickOperation(
  num,
  firstNum,
  secondNum,
  display,
  buttonContent,
  operator
) {
  if (operator === null) {
    display.textContent += " " + buttonContent + " ";
    if (firstNum === null) {
      firstNum = parseFloat(num);
      if (Number.isInteger(firstNum)) {
        firstNum = parseInt(firstNum);
      }
    }
    num = " ";
    operator = buttonContent;
  } else {
    if (num !== " ") {
      secondNum = parseFloat(num);
      if (Number.isInteger(secondNum)) {
        secondNum = parseInt(secondNum, 10);
      }
      answer = operate(firstNum, secondNum, operator);
      operator = buttonContent;
      display.textContent = answer + " " + buttonContent + " ";
      firstNum = answer;
      secondNum = null;
      num = " ";
    }
  }
  return [num, firstNum, secondNum, operator, display];
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.textContent === "+" ||
      button.textContent === "-" ||
      button.textContent === "x" ||
      button.textContent === "/"
    ) {
      [num, firstNum, secondNum, operator, display] = handleClickOperation(
        num,
        firstNum,
        secondNum,
        display,
        button.textContent,
        operator
      );
    } else if (button.textContent === "=") {
      if (typeof firstNum === "number" && typeof operator === "string") {
        secondNum = parseFloat(num);
        if (Number.isInteger(secondNum)) {
          secondNum = parseInt(secondNum, 10);
        }
        answer = operate(firstNum, secondNum, operator);
        display.textContent = answer;
        firstNum = answer;
        secondNum = null;
        operator = null;
        num = " ";
      } else {
        display.textContent = "Could not calculate";
      }
    } else if (button.textContent === "clear") {
      display.textContent = "";
      num = " ";
      firstNum = null;
      secondNum = null;
      operator = null;
    } else if (button.textContent === ".") {
      if (!num.includes(".") || !firstNum.includes(".")) {
        display.textContent += button.textContent;
        num += button.textContent;
      }
    } else {
      display.textContent += button.textContent;
      num += button.textContent.toString();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.shiftKey && event.key === "+") {
    if (operator === null) {
      display.textContent += " + ";
      if (firstNum === null) {
        firstNum = parseFloat(num);
        if (Number.isInteger(firstNum)) {
          firstNum = parseInt(firstNum);
        }
      }
      num = " ";
      operator = event.key;
    } else {
      if (num !== " ") {
        secondNum = parseFloat(num);
        if (Number.isInteger(secondNum)) {
          secondNum = parseInt(secondNum, 10);
        }
        answer = operate(firstNum, secondNum, operator);
        operator = event.key;
        display.textContent = answer + " + ";
        firstNum = answer;
        secondNum = null;
        num = " ";
      }
    }
  } else if (event.key === "-") {
    if (operator === null) {
      display.textContent += " - ";
      if (firstNum === null) {
        firstNum = parseFloat(num);
        if (Number.isInteger(firstNum)) {
          firstNum = parseInt(firstNum);
        }
      }
      num = " ";
      operator = event.key;
    } else {
      if (num !== " ") {
        secondNum = parseFloat(num);
        if (Number.isInteger(secondNum)) {
          secondNum = parseInt(secondNum, 10);
        }
        answer = operate(firstNum, secondNum, operator);
        operator = event.key;
        display.textContent = answer + " - ";
        firstNum = answer;
        secondNum = null;
        num = " ";
      }
    }
  } else if (event.shiftKey && event.key === "*") {
    if (operator === null) {
      display.textContent += " x ";
      if (firstNum === null) {
        firstNum = parseFloat(num);
        if (Number.isInteger(firstNum)) {
          firstNum = parseInt(firstNum);
        }
      }
      num = " ";
      operator = event.key;
    } else {
      if (num !== " ") {
        secondNum = parseFloat(num);
        if (Number.isInteger(secondNum)) {
          secondNum = parseInt(secondNum, 10);
        }
        answer = operate(firstNum, secondNum, operator);
        operator = event.key;
        display.textContent = answer + " x ";
        firstNum = answer;
        secondNum = null;
        num = " ";
      }
    }
  } else if (event.key === "/") {
    if (operator === null) {
      display.textContent += " / ";
      if (firstNum === null) {
        firstNum = parseFloat(num);
        if (Number.isInteger(firstNum)) {
          firstNum = parseInt(firstNum);
        }
      }
      num = " ";
      operator = event.key;
    } else {
      if (num !== " ") {
        secondNum = parseFloat(num);
        if (Number.isInteger(secondNum)) {
          secondNum = parseInt(secondNum, 10);
        }
        answer = operate(firstNum, secondNum, operator);
        operator = event.key;
        display.textContent = answer + " / ";
        firstNum = answer;
        secondNum = null;
        num = " ";
      }
    }
  } else if (event.key === "=" || event.key === "Enter") {
    if (typeof firstNum === "number" && typeof operator === "string") {
      secondNum = parseFloat(num);
      if (Number.isInteger(secondNum)) {
        secondNum = parseInt(secondNum, 10);
      }
      answer = operate(firstNum, secondNum, operator);
      display.textContent = answer;
      firstNum = answer;
      secondNum = null;
      operator = null;
      num = " ";
    } else {
      display.textContent = "Could not calculate";
    }
  } else if (event.key === "Delete" || event.key === "Backspace") {
    display.textContent = "";
    num = " ";
    firstNum = null;
    secondNum = null;
    operator = null;
  } else if (event.key === ".") {
    if (!num.includes(".")) {
      display.textContent += event.key;
      num += event.key;
    }
  } else {
    const keyPressed = parseInt(event.key);
    if (!isNaN(keyPressed) && keyPressed >= 0 && keyPressed <= 9) {
      display.textContent += event.key;
      num += event.key.toString();
    }
  }
});
