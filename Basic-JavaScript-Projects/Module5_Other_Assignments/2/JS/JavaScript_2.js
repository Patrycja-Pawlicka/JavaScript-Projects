// Basic client-side validation using the Constraint Validation API

const form = document.getElementById('contactForm');
const errors = document.getElementById('formErrors');

form.addEventListener('submit', (e) => {
  // Clear previous messages
  errors.textContent = '';

  // Use the built-in validation first
  if (!form.checkValidity()) {
    // Stop submit and show browser messages
    e.preventDefault();
    form.reportValidity(); // displays native messages
    return;
  }

  // Optional: extra checks / custom message examples
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple length checks (redundant with minlength but explicit)
  if (name.length < 2 || message.length < 5) {
    e.preventDefault();
    errors.textContent = 'Please complete all required fields.';
    return;
  }

  // If everything is valid, the form will submit normally
});
