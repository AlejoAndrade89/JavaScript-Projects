function my_Function() {
  document.getElementById("Test").innerHTML = 0 / 0;
  document.getElementById("Test").innerHTML +=
    "<br><br>" + isNaN("This is a String");
  document.getElementById("Test").innerHTML += "<br><br>" + isNaN("007");
}

document.write(2e310);
document.write(-3e310 + "<br><br>");
document.write((10 > 5) + "<br><br>");
document.write((50 < 20) + "<br><br>");
console.log(2 + 2);
console.log(4 > 2);
