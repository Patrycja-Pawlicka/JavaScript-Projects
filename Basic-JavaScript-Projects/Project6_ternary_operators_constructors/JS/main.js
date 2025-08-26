// Project 6 - Ternary Operators + Constructors + New keyword + Reserved keyword + Nested functions

// --- Ride Example (ternary) ---
function Ride_Function() {
  var Height = document.getElementById("Height").value;
  var Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// --- Voting Example (ternary challenge) ---
function Vote_Function() {
  var Age = document.getElementById("Age").value;
  var Can_vote = (Age < 18) ? "You are not old enough to vote." : "You can vote!";
  document.getElementById("Vote").innerHTML = Can_vote;
}

// --- Constructors (previous step demo) ---
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make  = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year  = Year;
  this.Vehicle_Color = Color;
}
var Jack  = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik  = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// --- New Keyword Assignment ---
// Use "new" with a simple constructor and "this"
function Person(first, last) {
  this.first = first;
  this.last  = last;
  this.full  = function () { return this.first + " " + this.last; };
}
function New_Keyword_Function() {
  var p = new Person("Patrycja", "Coder");
  document.getElementById("New_and_This").innerHTML = "Hello, " + p.full() + "!";
}

// --- Reserved Keyword Challenge ---
// 1) Assign a variable the *value* of a reserved word (as a STRING); display it
// 2) Include an object constructor function (already above, Vehicle; also show another)
function Gadget(name, year) {
  this.name = name;
  this.year = year;
}
function Show_Reserved() {
  var reservedValue = "class"; // "class" is a reserved keyword; here it's just a string VALUE
  var watch = new Gadget("Smartwatch", 2024);
  document.getElementById("Reserved_Keyword").innerHTML =
    "Reserved word value = \"" + reservedValue + "\"; Example constructor → " +
    watch.name + " (" + watch.year + ")";
}

// --- Nested Functions Assignment ---
function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();
  function Count() {
    let starting = 9;
    function plus_one() { starting += 1; }
    plus_one();
    return starting; // returns 10
  }
}
