// Create a Calculator object to hold all the calculator's state
const Calculator = {
  Display_Value: "0", // Display value initialized to "0"
  First_Operand: null, // Stores the first operand for calculations
  Wait_Second_Operand: false, // Indicates if the next operand is awaited
  operator: null, // Stores the operator for the calculation
};

// Function to handle digit inputs
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator; // Destructure state variables from the Calculator object

  // Check if waiting for second operand
  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit; // Set display value to the current digit
    Calculator.Wait_Second_Operand = false; // Reset wait for second operand flag
  } else {
    // Append digit to the display value or replace initial "0"
    Calculator.Display_Value =
      Display_Value === "0" ? digit : Display_Value + digit;
  }
}

// Function to handle decimal point input
function Input_Decimal(dot) {
  if (Calculator.Wait_Second_Operand === true) return; // Ignore decimal if waiting for the second operand
  if (!Calculator.Display_Value.includes(dot)) {
    // Only add decimal if it doesn't already exist in the display value
    Calculator.Display_Value += dot;
  }
}

// Function to handle operator input
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator; // Destructure state variables from the Calculator object
  const Value_of_Input = parseFloat(Display_Value); // Convert display value to a floating point number

  // Check if an operator already exists and if waiting for the second operand
  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator; // Update the operator
    return;
  }

  // If first operand is null, store the value of input
  if (First_Operand == null) {
    Calculator.First_Operand = Value_of_Input;
  } else if (operator) {
    // If operator exists, perform calculation
    const Value_Now = First_Operand || 0;
    let result = Perform_Calculation[operator](Value_Now, Value_of_Input); // Perform the calculation based on the operator
    result = Number(result).toFixed(9); // Round the result to 9 decimal places
    result = (result * 1).toString(); // Convert result back to string
    Calculator.Display_Value = parseFloat(result); // Update display value with the result
    Calculator.First_Operand = parseFloat(result); // Update first operand with the result
  }
  Calculator.Wait_Second_Operand = true; // Set the flag to wait for the second operand
  Calculator.operator = Next_Operator; // Update the operator
}

// Object to hold the calculation functions for each operator
const Perform_Calculation = {
  "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand, // Division
  "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand, // Multiplication
  "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand, // Addition
  "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand, // Subtraction
  "=": (First_Operand, Second_Operand) => Second_Operand, // Equals (returns the second operand)
};

// Function to reset the calculator to its initial state
function Calculator_Reset() {
  Calculator.Display_Value = "0"; // Reset display value to "0"
  Calculator.First_Operand = null; // Reset first operand
  Calculator.Wait_Second_Operand = false; // Reset wait for second operand flag
  Calculator.operator = null; // Reset operator
}

// Function to update the display with the current value
function Update_Diplay() {
  const display = document.querySelector(".calculator-screen"); // Get the display element
  display.value = Calculator.Display_Value; // Update the display's value with the calculator's display value
}
Update_Diplay(); // Call update display to initialize

// Get the keys element and add a click event listener to it
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event; // Get the target element of the event

  if (!target.matches("button")) {
    return; // Ignore if the clicked element is not a button
  }
  if (target.classList.contains("operator")) {
    // Check if the button is an operator
    Handle_Operator(target.value); // Handle operator
    Update_Diplay(); // Update display
    return;
  }

  if (target.classList.contains("decimal")) {
    // Check if the button is a decimal
    Input_Decimal(target.value); // Handle decimal input
    Update_Diplay(); // Update display
    return;
  }
  if (target.classList.contains("all-clear")) {
    // Check if the button is the "all-clear" button
    Calculator_Reset(); // Reset the calculator
    Update_Diplay(); // Update display
    return;
  }
  Input_Digit(target.value); // Handle digit input
  Update_Diplay(); // Update display
});
