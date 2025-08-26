// Project 7 - Local and Global Variable Assignment + If & Else If Statements

// ---------------- Global variable ----------------
var courseName = "JavaScript Foundations";
document.getElementById("Global").innerHTML = "Global course name: " + courseName;

// ---------------- Local variable ----------------
function showLocal() {
  let lesson = "Scope & Time";
  console.log("Local 'lesson' inside function:", lesson);
  return lesson;
}
document.getElementById("Local").innerHTML = "Local lesson (via function): " + showLocal();

// Intentional error demo for debugging
try {
  console.log("Local 'lesson' outside function (should error):", lesson);
} catch (e) {
  console.log("As expected, accessing 'lesson' outside its scope throws:", e.message);
}

// ---------------- If Statement ----------------
// Simple greeting based on time
function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
  }
}

// ---------------- Else If Statement ----------------
// Detailed greeting: morning, afternoon, or evening
function Time_function() {
  var Time = new Date().getHours();
  var Reply;

  if (Time > 0 && Time < 12) {
    Reply = "It is morning time!";
  }
  else if (Time >= 12 && Time < 18) {
    Reply = "It is afternoon.";
  }
  else {
    Reply = "It is evening time.";
  }

  document.getElementById("Time_of_day").innerHTML = Reply;
}
