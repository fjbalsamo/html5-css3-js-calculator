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
  document.getElementById("plus"), //sumar 0
  document.getElementById("diff"), // restar 1
  document.getElementById("prod"), // multiplicar 2
  document.getElementById("div"), // dividir 3
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
  secondaryDisplay.innerText = "";
  operationRef = -1;
});

// delete button handeler
document.getElementById("delBtn").addEventListener("click", (evt) => {
  const textPrimary = primaryDisplay.innerText;
  const textSecondary = secondaryDisplay.innerText;

  if (textPrimary.length > 1) {
    primaryDisplay.innerText = textPrimary.slice(0, -1);
  } else {
    primaryDisplay.innerText = "0";
    secondaryDisplay.innerText = operationRef == -1 ? "" : textSecondary
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
      // secondaryDisplay.innerText = "";
      // operationRef = -1;
    break;
    case 1: //restar
      primaryDisplay.innerText = `${
        parseFloat(textSecondaryDisplay) - parseFloat(textPrimaryDisplay)
      }`;
      // secondaryDisplay.innerText = "";
      // operationRef = -1;
    break;
    case 2: // multiplicacion
      primaryDisplay.innerText = `${
         parseFloat(textPrimaryDisplay) * parseFloat(textSecondaryDisplay)
      }`;
      // secondaryDisplay.innerText = "";
      // operationRef = -1;
    break;
    case 3: //division
      if(parseInt(textPrimaryDisplay) != 0) {
        primaryDisplay.innerText = `${
          parseFloat(textSecondaryDisplay) / parseFloat(textPrimaryDisplay)
        }`;
        secondaryDisplay.innerText = "";
        operationRef = -1;
      }else{
        primaryDisplay.innerText=`0`;
        alert(`Err. div by zero`);  
      }
    break;
    default:
      // opcion por defecto si el case no es 0, 1, 2 o 3      
    break;
  }

  // reset
  if(operationRef != 3){
    secondaryDisplay.innerText = "";
    operationRef = -1;
  }
});

/**
 * indexOf example
 */
// const string = "ABCD";
// console.log(string.indexOf("Z")); print -1