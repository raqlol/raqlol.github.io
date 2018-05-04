const fadeSlider = document.getElementsByClassName("slider");

(function () {
  for (var i=0; i <fadeSlider.length; i++) {
    var next = i + 1;
    fadeSlider[i].classList.add("fade");
    fadeSlider[next].classList.remove("fade");
  }
});
