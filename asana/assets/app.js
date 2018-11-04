// resize header on scroll
const masthead = document.getElementById("masthead")
function shrinkMasthead() {
  masthead.classList.add("shrink")
}
window.addEventListener("scroll", shrinkMasthead);
