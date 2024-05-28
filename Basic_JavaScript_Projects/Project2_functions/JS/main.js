export function updateElements() {
  let firstVar = "Hello, World!";
  firstVar += "¡Welcome to JavaScript!";

  document.getElementById("firstVariable").innerText = firstVar;
}

export function greeting() {
  let A = "Using my new function :)";
  document.getElementById("myFunction").innerHTML = A;
}

export function updateAndGreet() {
  updateElements();
  greeting();
}

document
  .getElementById("updateButton")
  .addEventListener("click", updateAndGreet);
