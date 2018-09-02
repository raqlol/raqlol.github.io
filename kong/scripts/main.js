function counter(element) {
  let displayNum = 0;
  let endNum = parseInt(element.getAttribute("data-number"));
  let counter = element;
  let increment = 1;
  console.log(displayNum)
  console.log(endNum)
  console.log(element)
  while (displayNum < endNum) {
    element.innerHTML = displayNum;
    displayNum += increment
    console.log(displayNum)
  }
  console.log("done")
}
