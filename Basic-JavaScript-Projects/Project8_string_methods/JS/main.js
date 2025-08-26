// Project 8 - String & Number Methods

// --- concat() Method ---
function concat_Function() {
  let part1 = "JavaScript ";
  let part2 = "string ";
  let part3 = "methods!";
  let full = part1.concat(part2, part3);

  document.getElementById("Concat").innerHTML = full;
}

// --- slice() Method ---
function slice_Function() {
  let sentence = "Learning JavaScript string methods.";
  let section = sentence.slice(9, 19); // extracts "JavaScript"

  document.getElementById("Slice").innerHTML = "Slice result: " + section;
}

// --- toString() Method ---
function toString_Function() {
  let num = 256;
  let text = num.toString();

  document.getElementById("ToString").innerHTML =
    "The number " + num + " as a string is: " + text + " (type: " + typeof text + ")";
}

// --- toPrecision() Method ---
function toPrecision_Function() {
  let num = 123.456789;
  let precise = num.toPrecision(5);

  document.getElementById("ToPrecision").innerHTML =
    "Number " + num + " with precision(5): " + precise;
}
