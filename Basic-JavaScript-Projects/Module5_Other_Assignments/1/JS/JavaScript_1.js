// Get all elements with class "item"
const items = document.getElementsByClassName("item");

// Log how many were found
console.log("Number of elements with class 'item':", items.length);

// Update text and style for each element
for (let i = 0; i < items.length; i++) {
  items[i].innerText = "Updated by JS";
  items[i].style.color = "blue";
}

// Get elements that have both "item" and "highlight" classes
const bothClasses = document.getElementsByClassName("item highlight");

// If any found, modify the first one
if (bothClasses.length > 0) {
  bothClasses[0].innerText = "Item with both classes";
  bothClasses[0].style.fontWeight = "bold";
}
