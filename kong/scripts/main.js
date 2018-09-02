function counter(element) {
  let displayNum = 0;
  let endNum = parseInt(element.getAttribute("data-number"));
  let counter = element;
  let increment = 1;
  console.log(displayNum)
  console.log(endNum)
  console.log(element)
  while (displayNum < endNum) {

    if (displayNum < 9) {
      increment = 1;
      element.innerHTML = displayNum;
      displayNum += increment
    }
    else if(displayNum > 99) {
      increment = 10;
      element.innerHTML = displayNum;
      displayNum += increment
    }
    else if(displayNum > 999) {
      increment = 100;
      element.innerHTML = displayNum;
      displayNum += increment
    }
    else if(displayNum > 9999) {
      increment = 1000;
      displayCondensed = displayNum/1000
      element.innerHTML = "+" + displayCondensed + "K";
      displayNum += increment
    }
  }
  console.log("done")
}
