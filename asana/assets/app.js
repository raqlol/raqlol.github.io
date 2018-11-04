// resize header on scroll
function shrinkMasthead() {
  const masthead = document.getElementById("masthead")
  console.log(masthead)
  masthead.classList.add("shrink")
}
window.onload = function () {
  window.addEventListener("scroll", shrinkMasthead);
}
