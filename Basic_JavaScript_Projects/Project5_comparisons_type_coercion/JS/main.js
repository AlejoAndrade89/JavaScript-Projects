function my_Function() {
  // Set innerHTML to demonstrate NaN and isNaN behavior
  document.getElementById("Test").innerHTML = 0 / 0;
  document.getElementById("Test").innerHTML +=
    "<br><br>" + isNaN("This is a String");
  document.getElementById("Test").innerHTML += "<br><br>" + isNaN("007");

  // Display comparisons and type coercion results
  let content = "";

  content += "Infinity: " + 2e310 + "<br><br>"; // Infinity
  content += "-Infinity: " + -3e310 + "<br><br>"; // -Infinity
  content += "10 > 5: " + (10 > 5) + "<br><br>"; // true
  content += "50 < 20: " + (50 < 20) + "<br><br>"; // false

  content += "10 == 10: " + (10 == 10) + "<br><br>"; // true
  content += "3 == 8: " + (3 == 8) + "<br><br>"; // false

  let x = 9;
  let y = 9;
  content += "9 === 9: " + (x === y) + "<br><br>"; // true

  x = 82;
  y = "82";
  content += "82 === '82': " + (x === y) + "<br><br>"; // false

  let A = "Magnus";
  let B = "Magnus";
  content += "'Magnus' === 'Magnus': " + (A === B) + "<br><br>"; // true

  let C = "Magnus";
  let D = "magnus";
  content += "'Magnus' === 'magnus': " + (C === D) + "<br><br>"; // false

  // Utilizing the AND operator to display true and false
  let andTrue = 5 > 3 && 10 > 5; // true && true -> true
  let andFalse = 5 > 3 && 10 < 5; // true && false -> false

  // Utilizing the OR operator to display true and false
  let orTrue = 5 > 3 || 10 < 5; // true || false -> true
  let orFalse = 5 < 3 || 10 < 5; // false || false -> false

  content += "<br>AND Operator Results:<br>";
  content += "True AND True: " + andTrue + "<br>";
  content += "True AND False: " + andFalse + "<br>";

  content += "<br>OR Operator Results:<br>";
  content += "True OR False: " + orTrue + "<br>";
  content += "False OR False: " + orFalse + "<br>";

  // Utilizing the NOT operator to display true and false
  let notTrue = !(5 > 3); // !true -> false
  let notFalse = !(5 < 3); // !false -> true

  content += "<br>NOT Operator Results:<br>";
  content += "NOT True: " + notTrue + "<br>"; // false
  content += "NOT False: " + notFalse + "<br>"; // true

  // Set the final content to the Test div
  document.getElementById("Test").innerHTML += "<br><br>" + content;
}
