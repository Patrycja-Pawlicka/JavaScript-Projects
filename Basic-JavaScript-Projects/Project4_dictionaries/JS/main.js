function Show_Dictionary() {
  // Creating a dictionary (object) with key–value pairs
  var Animal = {
    Species: "Dog",
    Breed: "Golden Retriever",
    Color: "Golden",
    Age: 5
  };

  // Delete a property from the object
  delete Animal.Breed;

  // Try to display the deleted value
  document.getElementById("Dictionary").innerHTML =
    "The breed of this animal is: " + Animal.Breed;
}
