// Addition Function
function Add_Numbers() {
  var number1 = 10;
  var number2 = 25;
  var sum = number1 + number2;

  document.getElementById("Math").innerHTML =
    "The sum of " + number1 + " and " + number2 + " is: " + sum;
}

// Subtraction Function
function Subtract_Numbers() {
  var number1 = 50;
  var number2 = 18;
  var difference = number1 - number2;

  document.getElementById("Subtract").innerHTML =
    "The difference between " + number1 + " and " + number2 + " is: " + difference;
}

// Multiplication Function
function Multiply_Numbers() {
  var number1 = 6;
  var number2 = 8;
  var product = number1 * number2;

  document.getElementById("Multiply").innerHTML =
    number1 + " × " + number2 + " = " + product;
}

// Division Function
function Divide_Numbers() {
  var number1 = 48;
  var number2 = 6;
  var quotient = number1 / number2;

  document.getElementById("Divide").innerHTML =
    number1 + " ÷ " + number2 + " = " + quotient;
}

// Multiple Operations Function
function More_Math() {
  var simple_Math = (1 + 2) * 10 / 2 - 5;

  document.getElementById("Multiple").innerHTML =
    "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

// Modulus Function
function Modulus_Numbers() {
  var number1 = 29;
  var number2 = 5;
  var remainder = number1 % number2;

  document.getElementById("Modulus").innerHTML =
    "The remainder when " + number1 + " is divided by " + number2 + " is: " + remainder;
}

// Unary Negation Function
function Unary_Negation() {
  var number = 15;
  var negated = -number;

  document.getElementById("Unary").innerHTML =
    "The negation of " + number + " is: " + negated;
}

// Increment Function
function Increment_Number() {
  var number = 7;
  number++; // increment by 1

  document.getElementById("Increment").innerHTML =
    "Starting from 7, after increment the value is: " + number;
}

// Decrement Function
function Decrement_Number() {
  var number = 20;
  number--; // decrement by 1

  document.getElementById("Decrement").innerHTML =
    "Starting from 20, after decrement the value is: " + number;
}

// Random Number Function
function Random_Number() {
  // Generates a random number between 0 and 1
  var random = Math.random();

  // Example: scale it to 1–100
  var random100 = Math.floor(Math.random() * 100) + 1;

  document.getElementById("Random").innerHTML =
    "Random decimal (0–1): " + random +
    "<br>Random whole number (1–100): " + random100;
}
