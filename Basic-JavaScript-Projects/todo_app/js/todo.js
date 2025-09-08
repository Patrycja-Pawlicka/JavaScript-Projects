// This gets the task from input
function get_todos() {
  var todos = new Array(); // Makes a new array
  var todos_str = localStorage.getItem('todo'); // Get from storage
  if (todos_str !== null) {
    todos = JSON.parse(todos_str); // If it exists, convert from string to array
  }
  return todos;
}

// This adds the task to storage
function add() {
  var task = document.getElementById('task').value; // Get input value
  var todos = get_todos(); // Get saved tasks
  todos.push(task); // Add new one
  localStorage.setItem('todo', JSON.stringify(todos)); // Save it
  document.getElementById("task").value = ""; // Clear input
  show(); // Update list
  return false;
}

// This deletes a task by index
function remove() {
  var id = this.getAttribute('id'); // Get button ID
  var todos = get_todos(); // Get array
  todos.splice(id, 1); // Remove specific index
  localStorage.setItem('todo', JSON.stringify(todos)); // Save updated array
  show(); // Refresh list
  return false;
}

// This renders the list visually
function show() {
  var todos = get_todos(); // Grab list
  var html = '<ul>'; // Start unordered list
  for (var i = 0; i < todos.length; i++) {
    html += '<li>' + todos[i] + ' <button class="remove" id="' + i + '">x</button></li>';
  }
  html += '</ul>';
  document.getElementById('todos').innerHTML = html; // Output list

  // Hook up the delete buttons
  var buttons = document.getElementsByClassName('remove');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  }
}

// Hook up the Add Item button
document.getElementById('add').addEventListener('click', add);

// Show list on page load
show();
