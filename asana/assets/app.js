// resize header on scroll
function shrinkMasthead() {
  let masthead = document.getElementById("masthead")
  let scroll = window.pageYOffset
        if (scroll >= 500) {
              masthead.classList.add("shrink")
        } else {
              masthead.classList.remove("shrink")
        }
}
window.onload = function () {
  window.addEventListener("scroll", shrinkMasthead);
}
