function Ride_Function() {
  let Height, Can_Ride;
  Height = document.getElementById("Height").value;
  Can_Ride = Height < 52 ? "You are too short" : " You are tall enough ";
  document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
}
//  a function where e a person that is  18 years old or older can vote
function Vote_Function() {
  let Age, Can_Vote;
  Age = document.getElementById("Age").value;
  Can_Vote = Age > 18 ? " You are not allowed " : " You are allowed ";
  document.getElementById("Ride").innerHTML = Can_Vote + " to vote ";
}
//Constructor
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
// new created objects
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// function displaying  Erik's car specs
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    " Erik drives a " +
    Erik.Vehicle_Color +
    " -colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}
// functions showing Emily's car specs
function myFunction1() {
  document.getElementById("New_and_This").innerHTML =
    " Emily drives a " +
    Emily.Vehicle_Color +
    " -colored " +
    Emily.Vehicle_Make +
    " Model " +
    Emily.Vehicle_Model +
    " manufactured in " +
    Emily.Vehicle_Year;
}
// Nested function
function displayMessage() {
  function createMessage() {
    let message = "This is a nested Function";
    return message;
  }

  var result = createMessage();
  document.getElementById("Nested_Function").innerHTML = result;
}
