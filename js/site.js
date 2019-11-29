const fadeSlider = document.getElementsByClassName("slider");

(function () {
  for (var i=0; i <fadeSlider.length; i++) {
    var next = i + 1;
    fadeSlider[i].classList.add("fade");
    fadeSlider[next].classList.remove("fade");
  }
});

var menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", determinesState);

function determinesState () {
  this.classList.toggle('open');
  var dropdown = document.getElementById("dropdown")
  var opened = dropdown.classList.contains('open-menu');
  if (opened) {
    dropdown.classList.remove('open-menu');
  }
  else {
    dropdown.classList.add('open-menu');
  }
}
