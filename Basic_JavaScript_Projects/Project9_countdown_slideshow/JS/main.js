// Nested function tat sets a timer

function countdown() {
  var seconds = document.getElementById("seconds").value;
  var timer = document.getElementById("timer");

  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    var time = setTimeout(tick, 1000); // 1000 is equal to millieseconds =  1 seg
    if (seconds == -1) {
      alert("Time's Up!"); // alert message
      clearTimeout(time); // reset timer
      timer.innerHTML = "";
    }
  }
  tick();
}

let slideIndex = 1;
showSlides(slideIndex);

//Next/Previous Controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active ");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
