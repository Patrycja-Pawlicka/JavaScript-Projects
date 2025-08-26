// --- Original function (from Function Assignment) ---
function My_First_Function() {
  var greeting = "This is the button text! ",
      note     = "Functions make life easier.";
  var message = greeting + note;

  document.getElementById("Button_Text").innerHTML = message;
}

// --- New function (+= Operator Assignment) ---
function Add_Text() {
  var sentence = "I am learning";
  sentence += " a lot from this course!";
  document.getElementById("Concatenate").innerHTML = sentence;
}