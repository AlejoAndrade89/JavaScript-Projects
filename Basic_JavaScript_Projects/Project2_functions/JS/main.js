export function updateElements() {
  let firstVar = "Hello, World!";
  firstVar += "¡Welcome to JavaScript!";

  document.getElementById("firstVariable").innerText = firstVar;
}

document
  .getElementById("updateButton")
  .addEventListener("click", updateElements);
