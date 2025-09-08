// Object to keep track of calculation state
const Calculator = {
  Display_Value: '0',        // What’s shown in display
  First_Operand: null,       // First number in any calculation
  Wait_Second_Operand: false, // Flag to track input state
  operator: null,            // Current operator selected
};

// Handle number button presses
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator;
  if (Wait_Second_Operand) {
    Calculator.Display_Value = digit;
    Calculator.Wait_Second_Operand = false;
  } else {
    // Overwrite "0" or append new digit
    Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
  }
}

// Handle decimal point input, ensuring only one '.'
function Input_Decimal(dot) {
  if (Calculator.Wait_Second_Operand) return;
  if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
  }
}

// Handle operator buttons (+, -, *, ÷, =)
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator;
  const Value_of_Input = parseFloat(Display_Value);

  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator;
    return;
  }

  if (First_Operand == null) {
    Calculator.First_Operand = Value_of_Input;
  } else if (operator) {
    let result = Perform_Calculation[operator](First_Operand, Value_of_Input);
    result = Number(result).toFixed(9);
    result = (result * 1).toString();
    Calculator.Display_Value = parseFloat(result);
    Calculator.First_Operand = parseFloat(result);
  }

  Calculator.Wait_Second_Operand = true;
  Calculator.operator = Next_Operator;
}

// Operator lookup to map to actual math
const Perform_Calculation = {
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '=': (a, b) => b,
};

// Reset calculator to initial state
function Calculator_Reset() {
  Calculator.Display_Value = '0';
  Calculator.First_Operand = null;
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null;
}

// Update the calculator display with current value
function Update_Display() {
  const display = document.querySelector('.calculator-screen');
  display.value = Calculator.Display_Value;
}

// Initial screen setup
Update_Display();

// Listen for button clicks and route logic accordingly
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;

  if (!target.matches('button')) return;

  if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
  }

  Input_Digit(target.value);
  Update_Display();
});
