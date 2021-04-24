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

const primaryDisplay = document.getElementById("primaryDisplay");
const secondaryDisplay = document.getElementById("secondaryDisplay");

/**
 * esta funcion inicializa los eventos de los botones con numeros
 */
const buttonNumbersEvent = () => {
  buttonNumbers.map((btn, index) => {
    btn.addEventListener("click", (evt) => {
      //lo que contiene el display
      const textPrimaryDisplay = primaryDisplay.innerText;
      // lo que va a contener en display
      const newText = `${textPrimaryDisplay}${index}`;

      if (!isNaN(Number(newText))) {
        primaryDisplay.innerText = parseFloat(newText);
      }
    });
  });
};

//init functions
buttonNumbersEvent();
document.getElementById("clearBtn").addEventListener("click", (evt) => {
  primaryDisplay.innerText = "0";
});
document.getElementById("delBtn").addEventListener("click", (evt) => {
  const text = primaryDisplay.innerText;

  if (text.length > 0) {
    primaryDisplay.innerText = text.slice(0, -1);
  } else {
    primaryDisplay.innerText = "0";
  }
});
