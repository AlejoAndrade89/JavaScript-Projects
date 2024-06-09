// Function to create a loop that counts from 1 to 20
function Call_Loop() {
  let digit = "";
  let X = 1;

  // Loop from 1 to 20
  while (X < 21) {
    digit += "<br>" + X;
    X++;
  }
  document.getElementById("loop").innerHTML = digit;
}

// Function to calculate and display the length of a string
function Lenght_Loop() {
  let myString = "Hello, World!";
  let lenght = myString.length;
  document.getElementById(
    "lenght"
  ).innerHTML = `The length of "${myString}" is ${lenght}`;
}

let instruments = [
  "Guitar",
  "Drums",
  "Piano",
  "Bass",
  "Violin",
  "Trumpet",
  "Flute",
];
let Content = "";
let Y;

// Function to loop through an array of instruments and display them
function for_Loop() {
  for (Y = 0; Y < instruments.length; Y++) {
    Content += instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Function to create and display an array of fruits
function array_Function() {
  let fruits_Picture = [];

  fruits_Picture[0] = "<br> Apple <br>";
  fruits_Picture[1] = "Banana <br>";
  fruits_Picture[2] = "PineApple <br>";
  fruits_Picture[3] = "Kiwi";

  document.getElementById(
    "Array"
  ).innerHTML = `Following we have the list of fruits: "${fruits_Picture}"`;
}

// Function to modify and display the properties of a constant object
function constant_function() {
  const tv = { Brand: "Samsung", Size: "55 hinches", Reference: "025" };
  tv.Brand = "LG"; // Modifying the brand
  tv.Size = "44 hinches"; // Modifying the size
  tv.Reference = "026"; // Modifying the reference
  document.getElementById("Constant").innerHTML =
    "The brand of the TV is " + tv.Brand + " with a reference " + tv.Reference;
}

// Function to display a greeting message
function return_function(name) {
  let greet = "Hello" + name;

  document.getElementById("Greeting").innerHTML = greet;
}

let bike = {
  make: " harley Davidson ",
  year: " 2006 ",
  color: " Matte Black ",
  // Method to describe the bike
  description: function () {
    return "The bike is a " + this.make + this.year + " color " + this.color;
  },
};
// Displaying the bike description on page load
document.getElementById("Bike_Object").innerHTML = bike.description();

// Function to demonstrate the break statement in a loop
function Break_function() {
  let text = "";
  for (let i = 0; i < 11; i++) {
    if (i == 4) {
      break; // Exit the loop when i is 4
    }
    text += " The number is " + i + "<br>";
  }
  document.getElementById("Break").innerHTML = text;
}

// Function to demonstrate the continue statement in a loop
function Continue_function() {
  let text = "";
  for (let i = 0; i < 21; i++) {
    if (i == 4) {
      continue; // Skip the iteration when i is 4
    }
    text += " The number is " + i + "<br>";
  }
  document.getElementById("Break").innerHTML = text;
}
