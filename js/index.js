const buttonNumbers = [
  document.getElementById("btn0"),
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4"),
  document.getElementById("btn5"),
  document.getElementById("btn6"),
  document.getElementById("btn7"),
  document.getElementById("btn8"),
  document.getElementById("btn9"),
];

let operationRef = -1;

const operationsVector = [
  document.getElementById("plus"),
  document.getElementById("diff"),
  document.getElementById("prod"),
  document.getElementById("div"),
];

const primaryDisplay = document.getElementById("primaryDisplay");
const secondaryDisplay = document.getElementById("secondaryDisplay");

/**
 * esta funcion inicializa los eventos de los botones con numeros
 */
const buttonNumbersEvent = () => {
  buttonNumbers.map((btn, index) => {
    btn.addEventListener("click", (evt) => {
      const text = clickNumbers(index);
      primaryDisplay.innerText = text;
    });
  });
};

const buttonOperationsEvent = () => {
  operationsVector.map((btn, index) => {
    btn.addEventListener("click", (evt) => {
      setOperation(index);
    });
  });
};

/**
 * set an operation
 * @param {number} operationIndex
 */
const setOperation = (operationIndex) => {
  operationRef = operationIndex;
  const textPrimaryDisplay = primaryDisplay.innerText;
  secondaryDisplay.innerText = textPrimaryDisplay;
  primaryDisplay.innerText = "0";
};

/**
 * set new clicked number and return a text
 * @param {number} number
 * @returns {string}
 */
const clickNumbers = (number) => {
  const textPrimaryDisplay = primaryDisplay.innerText;
  const newText = `${textPrimaryDisplay}${number}`;

  if (number == 0 && textPrimaryDisplay == "0") return textPrimaryDisplay;

  if (number != 0 && textPrimaryDisplay == "0") return number.toString();

  return newText;
};

//init functions
buttonNumbersEvent();
buttonOperationsEvent();

// clear button handeler
document.getElementById("clearBtn").addEventListener("click", (evt) => {
  primaryDisplay.innerText = "0";
});

// delete button handeler
document.getElementById("delBtn").addEventListener("click", (evt) => {
  const text = primaryDisplay.innerText;

  if (text.length > 1) {
    primaryDisplay.innerText = text.slice(0, -1);
  } else {
    primaryDisplay.innerText = "0";
  }
});

// dot button handeler
document.getElementById("btnDot").addEventListener("click", (evt) => {
  const text = primaryDisplay.innerText;

  // primaryDisplay.innerText = text.includes('.') ? text : `${text}.`;
  primaryDisplay.innerText = text.indexOf(".") >= 0 ? text : `${text}.`;
});

// operate handeler
document.getElementById("equal").addEventListener("click", (evt) => {
  const textPrimaryDisplay = primaryDisplay.innerText;
  const textSecondaryDisplay = secondaryDisplay.innerText;

  switch (operationRef) {
    case 0: // sumar
      primaryDisplay.innerText = `${
        parseFloat(textSecondaryDisplay) + parseFloat(textPrimaryDisplay)
      }`;
    break;
    case 1: //restar
    break;
  }
});

/**
 * indexOf example
 */
// const string = "ABCD";
// console.log(string.indexOf("Z")); print -1
