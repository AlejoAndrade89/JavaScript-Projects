// This variable keeps track of whose turn it is.
let activePlayer = "X";
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {
  // This condition ensures a square hasn't been selected already.
  // The some() method is used to check each element of the selectedSquares array
  // to see if it contains the square number clicked on.
  if (!selectedSquares.some((element) => element.includes(squareNumber))) {
    // This variable retrieves the HTML element id that was clicked.
    let select = document.getElementById(squareNumber);
    // This condition checks whose turn it is.
    if (activePlayer === "X") {
      // If active player is equal to 'X', the x.png is placed in HTML.
      select.style.backgroundImage = 'url("/TicTacToe/images/x.png")';
    } else {
      // If active player is equal to 'O', the o.png is placed in HTML.
      select.style.backgroundImage = 'url("/TicTacToe/images/o.png")';
    }
    // squareNumber and activePlayer are concatenated together and added to array.
    selectedSquares.push(squareNumber + activePlayer);
    // This calls a function to check for any win conditions.
    checkWinConditions();
    // This condition is for changing the active player.
    if (activePlayer === "X") {
      activePlayer = "O";
    } else {
      activePlayer = "X";
    }

    // This function plays placement sound.
    audio("../media/place.mp3");
    // This condition checks if it is the computer's turn.
    if (activePlayer === "O") {
      // This function disables clicking for computer's turn.
      disableClick();
      setTimeout(function () {
        // This function waits 1 second before the computer places an image and enables click.
        computersTurn();
      }, 1000);
    }
    // Returning true is needed for the computersTurn() function to work.
    return true;
  }
  // This function results in a random square being selected by the computer.
  function computersTurn() {
    // Boolean needed for our while loop.
    let success = false;
    let pickASquare;
    while (!success) {
      pickASquare = String(Math.floor(Math.random() * 9));
      if (placeXOrO(pickASquare)) {
        placeXOrO(pickASquare);
        success = true;
      }
    }
  }
}

// This function parses the selectedSquares array to search for win conditions.
// drawWinLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
  if (arrayIncludes("0X", "1X", "2X")) {
    drawWinLine(50, 100, 558, 100);
  } else if (arrayIncludes("3X", "4X", "5X")) {
    drawWinLine(50, 304, 558, 304);
  } else if (arrayIncludes("6X", "7X", "8X")) {
    drawWinLine(50, 508, 558, 508);
  } else if (arrayIncludes("0X", "3X", "6X")) {
    drawWinLine(100, 50, 100, 558);
  } else if (arrayIncludes("1X", "4X", "7X")) {
    drawWinLine(304, 50, 304, 558);
  } else if (arrayIncludes("2X", "5X", "8X")) {
    drawWinLine(508, 50, 508, 558);
  } else if (arrayIncludes("6X", "4X", "2X")) {
    drawWinLine(100, 508, 510, 90);
  } else if (arrayIncludes("0X", "4X", "8X")) {
    drawWinLine(100, 100, 520, 520);
  } else if (arrayIncludes("0O", "1O", "2O")) {
    drawWinLine(50, 100, 558, 100);
  } else if (arrayIncludes("3O", "4O", "5O")) {
    drawWinLine(50, 304, 558, 304);
  } else if (arrayIncludes("6O", "7O", "8O")) {
    drawWinLine(50, 508, 558, 508);
  } else if (arrayIncludes("0O", "3O", "6O")) {
    drawWinLine(100, 50, 100, 558);
  } else if (arrayIncludes("1O", "4O", "7O")) {
    drawWinLine(304, 50, 304, 558);
  } else if (arrayIncludes("2O", "5O", "8O")) {
    drawWinLine(508, 50, 508, 558);
  } else if (arrayIncludes("6O", "4O", "2O")) {
    drawWinLine(100, 508, 510, 90);
  } else if (arrayIncludes("0O", "4O", "8O")) {
    drawWinLine(100, 100, 520, 520);
  }
  // This condition checks for a tie. If none of the above conditions are met and
  // the selectedSquares array length is 9, the code executes.
  else if (selectedSquares.length >= 9) {
    audio("../media/tie.mp3");
    setTimeout(function () {
      resetGame();
    }, 500);
  }

  // This function checks if an array includes 3 strings. It is used to check for
  // each win condition.
  function arrayIncludes(squareA, squareB, squareC) {
    // These 3 variables will be used to check for 3 in a row.
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    // If the 3 variables we pass are all included in our array then
    // true is returned and our else if condition executes the drawWinLine() function.
    if (a === true && b === true && c === true) {
      return true;
    }
  }
}

//This function makes our body element temporarily unclickable
function disableClick() {
  document.body.style.pointerEvents = "none";

  setTimeout(function () {
    document.body.style.pointerEvents = "auto";
  }, 1000);
}

//This function takes a String parameter of the path you set earlier, for placement sound

function audio(audioURL) {
  // We create a new audio object and we pass the path as a parameter.
  let audio = new Audio(audioURL);
  // Play method plays our audio sound
  audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  // This line accesses our html canvas element
  const canvas = document.getElementById("win-lines");
  // this line gives us access to methods and properties to use on canvas;
  const c = canvas.getContext("2d");

  let x1 = coordX1,
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;
  function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = "rgba(70, 255, 33,.8)";
    c.stroke();

    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y > y2) {
        y -= 10;
      }
      if (x >= x2 && y <= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
  }

  //This function clears our canvas after our win line is drawn

  function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
  }

  disableClick();
  audio("/TicTacToe/media/winGame.mp3");
  animateLineDrawing();
  setTimeout(function () {
    clear();
    resetGame();
  }, 1000);
}
//This function resets the game in case of a tie or a win.
function resetGame() {
  for (let i = 0; i < 9; i++) {
    let square = document.getElementById(String(i));
    square.style.backgroundImage = "";
  }
  selectedSquares = [];
}
