function counter(element) {
  let displayNum = 0;
  let endNum = parseInt(element.getAttribute("data-number"));
  let increment = 1;
  let interval = 100;
  console.log(displayNum)
  console.log(endNum)
  console.log(element)
  while (displayNum < endNum) {
    if (displayNum < 9) {
      increment = 1;
      displayNum += increment
    }
    else if(displayNum < 99) {
      increment = 10;
      displayNum += increment
    }
    else if(displayNum < 999) {
      increment = 100;
      displayNum += increment
      let interval = 500;
    }
    else if(displayNum < 9999) {
      increment = 1000;
      displayCondensed = displayNum/1000
      displayNum += increment
      let interval = 100;
    }
  }
  setInterval(function(){
    if(displayNum > 9999) {
      element.innerHTML = "+" + displayCondensed + "K";
    }
    else {
      element.innerHTML = displayNum
    }
  }, interval);
  console.log(displayNum)
  console.log("done")
}
