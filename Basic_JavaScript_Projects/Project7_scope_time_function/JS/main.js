// Out of scope variable or global
let X = 50;

function sum() {
  let Y = 20;
  let result = X + Y;
  document.write(result + "<br><br>");
}
sum();

// local variable
function subtract() {
  var x = 22;
  var y = 20;
  var result = x - y;
  document.write(result + "<br><br>");
}
subtract();

//Here i correct the error i had before with the variable out  of scope
function division() {
  let z = 2;
  let x = 2;
  let myDivision = x / z;
  console.log(myDivision);
}
division();

// function to get the actual hours
function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
  } else {
    document.getElementById("Greeting").innerHTML = "Good evening!";
  }
}

// own function to complete assignment
function can_Drive() {
  let age = 10;
  if (age < 10) {
    document.getElementById("ageProof").innerHTML = "You can drive";
  } else {
    document.getElementById("ageProof").innerHTML = "You can't drive";
  }
}

// using else if statement
function Time_function() {
  var Time = new Date().getHours();
  var Reply;

  if (Time < 12 == Time > 0) {
    Reply = "It is Morning time !";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It is Afternoon.";
  } else {
    Reply = "It is Evening";
  }
  document.getElementById("Time_of_Day").innerHTML = Reply;
}
