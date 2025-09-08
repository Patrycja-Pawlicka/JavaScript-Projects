// Track whose turn it is
let activePlayer = 'X';

// Store moves like "0X", "4O", etc.
let selectedSquares = [];

// Reference to <body id="body"> for disableClick()
const body = document.getElementById('body');

// Store the pending computer-move timeout so we can cancel it on win/tie
let computerTimeoutId = null;

// Place X or O in a square by id ("0".."8")
function placeXOrO(squareNumber) {
  // Do nothing if this square was already chosen
  if (!selectedSquares.some(el => el.includes(squareNumber))) {
    // Cell element
    let select = document.getElementById(squareNumber);

    // Put the image based on whose turn it is
    if (activePlayer === 'X') {
      select.style.backgroundImage = 'url("Images/x.png")';
    } else {
      select.style.backgroundImage = 'url("Images/o.png")';
    }

    // Record the move
    selectedSquares.push(squareNumber + activePlayer);

    // Check win/tie
    checkWinConditions();

    // Toggle player
    activePlayer = (activePlayer === 'X') ? 'O' : 'X';

    // Place sound
    audio('Media/place.mp3');

    // Computer turn after short delay
    if (activePlayer === 'O') {
      disableClick();
      // Store timeout id so we can clear it if the round ends meanwhile
      computerTimeoutId = setTimeout(function () { computersTurn(); }, 1000);
    }
    // Needed by computersTurn()
    return true;
  }
  return false;
}

// Computer picks a random available square
function computersTurn() {
  // Guard: if a reset just happened (fresh board), do nothing
  if (selectedSquares.length === 0) return;

  let success = false;
  let pickASquare;
  while (!success) {
    pickASquare = String(Math.floor(Math.random() * 9));
    if (placeXOrO(pickASquare)) {
      success = true;
    }
  }
}

// Disable clicking for ~1s (used during computer move and win animation)
function disableClick() {
  body.style.pointerEvents = 'none';
  setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// Play an audio file from the given path
function audio(audioURL) {
  let snd = new Audio(audioURL);
  snd.play();
}

// Check all X and O win conditions. If matched, draw the win line.
// If all 9 picked and no winner, it’s a tie.
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
    audio('Media/tie.mp3');
    setTimeout(function () { resetGame(); }, 500);
  }
}

// Helper for win checks
function arrayIncludes(a, b, c) {
  const A = selectedSquares.includes(a);
  const B = selectedSquares.includes(b);
  const C = selectedSquares.includes(c);
  return (A === true && B === true && C === true);
}

// Animate a green win line on the canvas
function drawLine(coordX1, coordY1, coordX2, coordY2) {
  const canvas = document.getElementById('win-lines');
  const c = canvas.getContext('2d');

  let x1 = coordX1, y1 = coordY1;
  let x2 = coordX2, y2 = coordY2;
  let x = x1, y = y1;

  function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    c.stroke();

    if (x1 <= x2 && y1 <= y2) {
      if (x < x2) { x += 10; }
      if (y < y2) { y += 10; }
      if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) { x += 10; }
      if (y > y2) { y -= 10; }
      if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }
  }

  // Stop any pending computer move before resetting the game
  if (computerTimeoutId !== null) {
    clearTimeout(computerTimeoutId); // cancel scheduled setTimeout
    computerTimeoutId = null;
  }

  disableClick();
  audio('Media/winGame.mp3');
  animateLineDrawing();
  setTimeout(function () { clear(); resetGame(); }, 1000);
}

// Clear the canvas after the win animation
function clear() {
  const canvas = document.getElementById('win-lines');
  const c = canvas.getContext('2d');
  const animationLoop = requestAnimationFrame(clear);
  c.clearRect(0, 0, 608, 608);
  cancelAnimationFrame(animationLoop);
}

// Simple reset so your game can continue after a win/tie.
function resetGame() {
  for (let i = 0; i < 9; i++) {
    const cell = document.getElementById(String(i));
    cell.style.backgroundImage = '';
  }
  selectedSquares = [];
  activePlayer = 'X';
}
