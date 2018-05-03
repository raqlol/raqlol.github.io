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

// allows content below the slider to appear to float up as the user scrolls down
window.onscroll = function() {float()};
function float() {
  document.getElementsByClassName("float").className = "floatToTop";
}
