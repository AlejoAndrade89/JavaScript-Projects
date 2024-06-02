// SUM Function
export function sum() {
  let A = 10;
  A += 15;
  document.getElementById("Math").innerHTML += "<br>10 + 15 = " + A;
}
// SUBTRACTION Function
function subtraction_Function() {
  var Subtraction = 20 - 3;
  document.getElementById("Math").innerHTML += "<br>20 - 3 = " + Subtraction;
}
// MULTPLY Function
function multiply_Function() {
  var Multiplication = 10 * 10;
  document.getElementById("Math").innerHTML +=
    "<br>10 * 10 = " + Multiplication;
}
//DIVISION Function
function division_Function() {
  var Division = 30 / 5;
  document.getElementById("Math").innerHTML += "<br>30 / 5 = " + Division;
}
//All Together Function

function more_Math() {
  let simple_Math = ((10 + 15) * 17) / 2 - 5;
  document.getElementById("Math").innerHTML +=
    "<br>ten plus fifteen, multiplied by seventeen divded in half and then subtracted by 5 equals :" +
    simple_Math;
}

function modulus_Operator() {
  var simple_Math = 25 % 6;
  document.getElementById("Math").innerHTML +=
    "<br>When you divide 25 by 6 you have a remainder of :" + simple_Math;
}

function negation_Operation() {
  var x = 10;
  document.getElementById("Math").innerHTML +=
    "<br>" + -x + " is the unary of 10 ";
}

document.getElementById("updateButton").addEventListener("click", function () {
  document.getElementById("Math").innerHTML = ""; // Limpiar el contenido previo

  sum();
  subtraction_Function();
  multiply_Function();
  division_Function();
  more_Math();
  modulus_Operator();
  negation_Operation();

  //Increment and Decrement Operators

  let A = 40;
  A++;
  document.write("The result of incrementing 40 is = " + A);

  let B = 50;
  B--;
  document.write("<br><br> The result of decrementing 50 is = " + B);

  // Math.Random operations
  window.alert(
    "Following, a RANDOM numeber between 0 - 100 = " + Math.random() * 100
  );
  //Math. pow calculates the value of (x) raised to the power of (y)
  window.alert("number 2 to the power of 3 is :" + Math.pow(2, 3));

  //Math.max calculates the largest value among the provided arguments.
  document.write(
    "<br> the Largest value between 10,5,8 and 12 is = " +
      Math.max(10, 5, 8, 12) // Result: 12
  );
});
