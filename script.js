let blackButtonPressed = false;
let randomButtonPressed = false;
let eraseButtonPressed = false;

const container = document.querySelector(".container");
let gridSize = prompt("Enter a value");
const buttons = document.querySelectorAll(".btn");

const blackButton = document.querySelector("#blackButton");
const randomButton = document.querySelector("#randomButton");
const eraseButton = document.querySelector("#eraseButton");

function randomColor() {
  rc = "#";
  for (i = 0; i < 6; i++) {
    rc += Math.floor(Math.random() * 16).toString(16);
  }
  return rc;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].id === "blackButton") {
      blackButtonPressed = true;
      randomButtonPressed = false;
      eraseButtonPressed = false;
    } else if (buttons[i].id === "eraseButton") {
      blackButtonPressed = false;
      randomButtonPressed = false;
      eraseButtonPressed = true;
    } else {
      blackButtonPressed = false;
      randomButtonPressed = true;
      eraseButtonPressed = false;
    }
  });
}
function creaetBoxes(numBox) {
  // if no value was entered = defaults to 4
  if (!numBox) {
    numBox = 4;
  }

  container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
  for (let i = 0; i < numBox * numBox; i++) {
    const square = document.createElement("div");
    square.classList.add("new");
    container.appendChild(square);
  }
}
creaetBoxes(gridSize);

blackButton.addEventListener("click", () => {
  blackButtonPressed = true;
  randomButtonPressed = false;
  eraseButtonPressed = false;
  let squares = document.getElementsByClassName("new");

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseenter", () => {
      squares[i].style.backgroundColor = "black";
    });
  }
});

eraseButton.addEventListener("click", () => {
  blackButtonPressed = false;
  randomButtonPressed = false;
  eraseButtonPressed = true;

  let squares = document.getElementsByClassName("new");

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseenter", () => {
      squares[i].style.backgroundColor = "white";
    });
  }
});

randomButton.addEventListener("click", () => {
  blackButtonPressed = false;
  randomButtonPressed = true;
  eraseButtonPressed = false;

  let squares = document.getElementsByClassName("new");

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseenter", () => {
      squares[i].style.backgroundColor = randomColor();
    });
  }
});