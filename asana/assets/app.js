// resize header on scroll
function shrinkMasthead() {
  let masthead = document.getElementById("masthead")
  let scroll = window.scrollTop;
        if (scroll >= 600) {
              masthead.classList.add("shrink")
        } else {
              masthead.classList.remove("shrink")
        }
}

window.onload = function () {
  const closeBtns = document.getElementsByClassName("close")
  /* event listener for shrinking masthead */
  window.addEventListener("scroll", shrinkMasthead);
  /* event listener to close popups */
  for (i=0;i<closeBtns.length;i++) {
    closeBtns[i].addEventListener("click", function(event){
      let dogThumbnail = event.target
      dogThumbnail.parentNode.classList.add("dog-thumbnail");
    })
  }
}
