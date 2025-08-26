// Create some variables with different data types

var name = "Patrycja";     // string
var age = 27;              // number
var isStudent = true;      // boolean
var nothing = null;        // object (quirk in JS)
var unknown;               // undefined

// Use document.write() with typeof operator to display types

document.write("The type of name is: " + typeof name + "<br>");
document.write("The type of age is: " + typeof age + "<br>");
document.write("The type of isStudent is: " + typeof isStudent + "<br>");
document.write("The type of nothing is: " + typeof nothing + "<br>");
document.write("The type of unknown is: " + typeof unknown + "<br>");

// --- Type Of Operator ---
var nameVal = "Patrycja";
var ageVal  = 27;
document.getElementById("TypeOf").innerHTML =
  "The type of name is: " + typeof nameVal + "<br>" +
  "The type of age is: "  + typeof ageVal  + "<br><br>";

// --- Type Coercion ---
var number = 25, text = "The age is ";
var result = text + number;             // number -> string
var coerced = true + 5;                 // true -> 1
document.getElementById("Coercion").innerHTML =
  result + "<br>" + "true + 5 = " + coerced + "<br><br>";

// --- Infinity ---
var large = 2E310;      // Infinity
var negative = -2E310;  // -Infinity
document.getElementById("PositiveInfinity").innerHTML =
  "Large positive number results in: " + large;
document.getElementById("NegativeInfinity").innerHTML =
  "Large negative number results in: " + negative;

// --- Console.log() ---
var a = 15, b = 7;
console.log("The sum of " + a + " and " + b + " is: " + (a + b));

// --- Double Equal Signs (==) ---
var x = 10;
var y = "10";   // string
var z = 5;
document.getElementById("Equality").innerHTML =
  "x == y → " + (x == y) + " (true, type coercion)<br>" +
  "x == z → " + (x == z) + " (false, values differ)";

// --- Triple Equal Signs (===) ---
document.getElementById("StrictEquality").innerHTML =
  "1) 10 === 10 → " + (10 === 10) + " (true, same type & value)<br>" +
  "2) 10 === '5' → " + (10 === "5") + " (false, number vs string)<br>" +
  "3) 10 === '10' → " + (10 === "10") + " (false, same value but different type)<br>" +
  "4) 10 === 5 → " + (10 === 5) + " (false, same type but different value)";

// --- NOT Operator (!) ---
var notTrue = !true;     // false
var notFalse = !false;   // true
document.getElementById("NotOperator").innerHTML =
  "!true → " + notTrue + "<br>" +
  "!false → " + notFalse;

// --- AND Operator (&&) ---
var and1 = (true && true);   // true
var and2 = (true && false);  // false
document.getElementById("AndOperator").innerHTML =
  "true && true → " + and1 + "<br>" +
  "true && false → " + and2;

// --- OR Operator (||) ---
var or1 = (true || false);   // true
var or2 = (false || false);  // false
document.getElementById("OrOperator").innerHTML =
  "true || false → " + or1 + "<br>" +
  "false || false → " + or2;