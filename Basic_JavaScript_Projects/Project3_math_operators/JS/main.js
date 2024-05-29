export function sum() {
  let A = 10;
  A += 15;
  document.getElementById("Math").innerHTML += "<br>10 + 15 = " + A;
}

function subtraction_Function() {
  var Subtraction = 20 - 3;
  document.getElementById("Math").innerHTML += "<br>20 - 3 = " + Subtraction;
}

function multiply_Function() {
  var Multiplication = 10 * 10;
  document.getElementById("Math").innerHTML +=
    "<br>10 * 10 = " + Multiplication;
}

function division_Function() {
  var Division = 30 / 5;
  document.getElementById("Math").innerHTML += "<br>30 / 5 = " + Division;
}

document.getElementById("updateButton").addEventListener("click", function () {
  document.getElementById("Math").innerHTML = ""; // Limpiar el contenido previo

  sum();
  subtraction_Function();
  multiply_Function();
  division_Function();
});
