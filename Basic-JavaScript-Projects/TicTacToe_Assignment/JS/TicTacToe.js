// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
  // This condition ensures a square hasn't been selected already.
  if (!selectedSquares.some(element => element.includes(squareNumber))) {
    // This variable retrieves the HTML element id that was clicked.
    let select = document.getElementById(squareNumber);
    // This condition checks who's turn it is.
    if (activePlayer === 'X') {
      // If activePlayer is equal to 'X', the x.png is placed in HTML
      select.style.backgroundImage = 'url("Images/x.png")';
    } else {
      // If activePlayer is equal to 'O', the o.png is placed in HTML
      select.style.backgroundImage = 'url("Images/o.png")';
    }
    // squareNumber and activePlayer are concatenated together and added to array.
    selectedSquares.push(squareNumber + activePlayer);
    // This calls a function to check for any win conditions.
    checkWinConditions();
    // This condition is for changing the active player.
    if (activePlayer === 'X') {
      // If active player is 'X' change it to 'O'
      activePlayer = 'O';
    } else {
      // Change the activePlayer to 'X'
      activePlayer = 'X';
    }
    // This function plays placement sound.
    audio('Media/place.mp3');
    // This condition checks to see if it is the computers turn.
    if (activePlayer === 'O') {
      disableClick(); // Disables clicking for computers turn.
      // This function waits 1 second before the computer places an image and enables click.
      setTimeout(function () { computersTurn(); }, 1000);
    }
    // Returning true is needed for our computersTurn() function to work.
    return true;
  }
}

// This function parses the selectedSquares array to search for win conditions.
// drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
  if (arrayIncludes('0X', '1X', '2X')) { drawLine(50, 100, 558, 100); }
  else if (arrayIncludes('3X', '4X', '5X')) { drawLine(50, 304, 558, 304); }
  else if (arrayIncludes('6X', '7X', '8X')) { drawLine(50, 508, 558, 508); }
  else if (arrayIncludes('0X', '3X', '6X')) { drawLine(100, 50, 100, 558); }
  else if (arrayIncludes('1X', '4X', '7X')) { drawLine(304, 50, 304, 558); }
  else if (arrayIncludes('2X', '5X', '8X')) { drawLine(508, 50, 508, 558); }
  else if (arrayIncludes('0X', '4X', '8X')) { drawLine(100, 100, 520, 520); }
  else if (arrayIncludes('2X', '4X', '6X')) { drawLine(100, 520, 520, 100); }
  else if (arrayIncludes('0O', '1O', '2O')) { drawLine(50, 100, 558, 100); }
  else if (arrayIncludes('3O', '4O', '5O')) { drawLine(50, 304, 558, 304); }
  else if (arrayIncludes('6O', '7O', '8O')) { drawLine(50, 508, 558, 508); }
  else if (arrayIncludes('0O', '3O', '6O')) { drawLine(100, 50, 100, 558); }
  else if (arrayIncludes('1O', '4O', '7O')) { drawLine(304, 50, 304, 558); }
  else if (arrayIncludes('2O', '5O', '8O')) { drawLine(508, 50, 508, 558); }
  else if (arrayIncludes('0O', '4O', '8O')) { drawLine(100, 100, 520, 520); }
  else if (arrayIncludes('2O', '4O', '6O')) { drawLine(100, 520, 520, 100); }
  else if (selectedSquares.length >= 9) {
    // This function plays the tie game sound.
    audio('Media/tie.mp3');
    // This function sets a .3 second timer before the resetGame is called.
    setTimeout(function () { resetGame(); }, 500);
  }
}

// This function checks if an array includes 3 strings. It is used to check for
// each win condition.
function arrayIncludes(squareA, squareB, squareC) {
  const a = selectedSquares.includes(squareA);
  const b = selectedSquares.includes(squareB);
  const c = selectedSquares.includes(squareC);
  if (a === true && b === true && c === true) { return true; }
}

// This function results in a random square being selected by the computer.
function computersTurn() {
  let success = false;
  let pickASquare;
  while (!success) {
    pickASquare = String(Math.floor(Math.random() * 9));
    if (placeXOrO(pickASquare)) {
      success = true;
    }
  }
}

// This function makes our body element temporarily unclickable.
function disableClick() {
  body.style.pointerEvents = 'none';
  setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// This function takes a string parameter of the path you set earlier for placement sound.
function audio(audioURL) {
  let audio = new Audio(audioURL);
  audio.play();
}
