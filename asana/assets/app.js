/* Adds in the header and footer files */
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* loop through all elements */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /* search for all elements with w3-include-html attribute*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      // URL encode to be safe
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
includeHTML();
// resize header on scroll
function shrinkMasthead() {
  let masthead = document.getElementById("masthead")
  let scroll = window.pageYOffset
        if (scroll >= 100) {
              masthead.classList.add("shrink")
        } else {
              masthead.classList.remove("shrink")
        }
}
window.onload = function () {
  window.addEventListener("scroll", shrinkMasthead);
}
