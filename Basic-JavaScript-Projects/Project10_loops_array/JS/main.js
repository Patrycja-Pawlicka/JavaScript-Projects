/************************************************************
 * Project 10 – Loops, Arrays, const & let, Objects
 * This file includes ALL required functions + comments.
 ************************************************************/

/* ----------------------------------------------------------
   1) While loop – counts from 1 to 10 and outputs each line
-----------------------------------------------------------*/
function Call_Loop() {
  let text = "";
  let i = 1;                   // start value
  while (i <= 10) {            // loop condition
    text += i + "<br>";        // build the output string
    i++;                       // increment to avoid infinite loop
  }
  document.getElementById("loop").innerHTML = text;
}

/* ----------------------------------------------------------
   2) For loop – iterate an array of instruments
-----------------------------------------------------------*/
function for_Loop() {
  const Instruments = ["Guitar", "Piano", "Drums", "Violin", "Saxophone"];
  let content = "";
  // Standard for-loop using length property
  for (let i = 0; i < Instruments.length; i++) {
    content += Instruments[i] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = content;
}

/* ----------------------------------------------------------
   3) Array function + innerHTML – rotate through values
   Each button click shows the next dessert in the array.
-----------------------------------------------------------*/
const desserts = ["Cake", "Ice Cream", "Brownie", "Donut", "Pudding"];
let dessertIndex = 0;   // remembers current position across clicks

function array_Function() {
  // Display current dessert
  document.getElementById("Array").innerHTML = "You got: " + desserts[dessertIndex];
  // Move to the next index (wrap around with modulo)
  dessertIndex = (dessertIndex + 1) % desserts.length;
}

/* ----------------------------------------------------------
   4) const object – create with const, then modify properties
   NOTE: With const you cannot reassign the variable itself,
         but you CAN change or add properties on the object.
-----------------------------------------------------------*/
function constant_function() {
  const superhero = {
    name: "Nova",
    power: "Light manipulation",
    origin: "Starlight Sector"
  };

  // Modify an existing property
  superhero.power = "Photon blasts";
  // Add a new property
  superhero.weapon = "Solar Blade";

  document.getElementById("Constant").innerHTML =
    superhero.name + " now uses " + superhero.power +
    " and carries a " + superhero.weapon + " from the " + superhero.origin + ".";
}

/* ----------------------------------------------------------
   5) let keyword – simple block-scoped variable demo
-----------------------------------------------------------*/
function let_Function() {
  let greeting = "Hello from the let keyword!";
  document.getElementById("LetOutput").innerHTML = greeting;
}

/* ----------------------------------------------------------
   6) Object using let + method – object has properties and a
      method that uses 'this' to reference its own properties.
-----------------------------------------------------------*/
function object_Function() {
  let hero = {
    name: "Solara",
    element: "Fire",
    level: 18,
    // Method that returns a descriptive string
    speak: function () {
      return "I am " + this.name +
             ", wielder of " + this.element +
             " at level " + this.level + "!";
    }
  };

  document.getElementById("ObjectOutput").innerHTML = hero.speak();
}
