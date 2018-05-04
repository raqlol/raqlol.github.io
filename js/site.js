// menu
const menuIcon = document.getElementById("menu-icon");
const dropdown = document.getElementById("dropdown");
const triangle = document.getElementById("triangle-menu");

function determinesState () {
  this.classList.toggle('open');
  var opened = dropdown.classList.contains('open-menu');
  if (opened) {
    dropdown.classList.remove('open-menu');
    triangle.classList.remove('open-menu');
  }
  else {
    dropdown.classList.add('open-menu');
    triangle.classList.add('open-menu');
  }
}
window.onscroll = function() {float()};
function float() {
  document.getElementsByClassName("float").className = "floatToTop";
}

const fadeSlider = document.getElementsByClassName("slider")
(function () {
  for (var i=0; i <slider.length; i++) {
    var next = i + 1;
    fadeSlider[i].classList.add("fade");
    fadeSlider[next].classList.remove("fade");
  }
});
