// menu
var menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", determinesState);
function determinesState () {
  this.classList.toggle('open');
  var dropdown = document.getElementById("dropdown")
  var triangle = document.getElementById("triangle-menu")
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
// float up
// allows content below the slider to appear to float up as the user scrolls down
window.onscroll = function() {float()};
function float() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("float").className = "floatToTop";
    }
}
