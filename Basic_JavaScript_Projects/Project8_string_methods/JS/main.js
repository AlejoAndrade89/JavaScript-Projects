//Concatenate put together everything you declare inside parenthesis
function full_Sentence() {
  var part_1 = "I have";
  var part_2 = " made this ";
  var part_3 = " into a complete ";
  var part_4 = " sentence. ";
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}
// Slice extract a section of a string and returns a new one without modifying the original one.
function slice_Method() {
  var Sentence = "All work and no play makes Jhonny a dull boy";
  var Section = Sentence.slice(27, 33);
  document.getElementById("Slice").innerHTML = Section;
}
// Converts the string into UpperCase
function to_Upper() {
  var name = "daniel";
  var result = name.toUpperCase();
  document.getElementById("Upper").innerHTML = result;
}
// return the position of a string
function searching() {
  let text = "Here, we have a clear example";
  let position = text.search("clear");
  document.getElementById("toSearch").innerHTML = position;
}
// toString( ) returns a number as a string.
function string_Method() {
  var x = 182;
  document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

//toPrecision formats a number to a specified length.

function precision_Method() {
  var X = 12938.3012987376112;
  document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() {
  let num = 5.58789;
  let n = num.toFixed();
  document.getElementById("toFixed").innerHTML = n;
}

//The valueOf() method returns the primitive value of an object.
function valueOf_Method() {
  let fruits = ["Banana", "Mango", "Orange", "Apple"];
  const myArray = fruits.valueOf();
  document.getElementById("valueOf").innerHTML = myArray;
}
