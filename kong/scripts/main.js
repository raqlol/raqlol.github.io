function counter(element) {
  let displayNum = 0;
  let endNum = parseInt(element.getAttribute("data-number"));
  let increment = 1;
  console.log(displayNum)
  console.log(endNum)
  console.log(element)
  while (displayNum < endNum) {

    if (displayNum < 9) {
      increment = 1;
      displayNum += increment
      setTimeout(function(){ element.innerHTML = displayNum;}, 10);
    }
    else if(displayNum > 99) {
      increment = 10;
      displayNum += increment
      setTimeout(function(){ element.innerHTML = displayNum;}, 100);
    }
    else if(displayNum > 999) {
      increment = 100;
      displayNum += increment
      setTimeout(function(){element.innerHTML = displayNum;}, 500);
    }
    else if(displayNum > 9999) {
      increment = 1000;
      displayCondensed = displayNum/1000
      displayNum += increment
      setTimeout(function(){ element.innerHTML = "+" + displayCondensed + "K";}, 100);
    }
    console.log(displayNum)
  }
  console.log("done")
}
