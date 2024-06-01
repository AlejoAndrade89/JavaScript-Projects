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
});
