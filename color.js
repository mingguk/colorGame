var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var btn_reset = document.querySelector("#btn_reset");
var btn_easy = document.querySelector("#btn_easy");
var btn_hard = document.querySelector("#btn_hard");
var modeButtons = document.querySelectorAll(".mode");

init();

btn_reset.addEventListener("click", function() {
  reset();
});

//functions

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        h1.style.backgroundColor = clickedColor;
        changeColors(clickedColor);
        messageDisplay.textContent = "Correct!!!";
        btn_reset.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? (numOfSquares = 3) : (numOfSquares = 6);

      reset();
    });
  }
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  btn_reset.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    // squares[i].style.display = "block";
  }
}

function changeColors(color) {
  //loop throught all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  //pick random number
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into the array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "red" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "red" from 0 - 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
