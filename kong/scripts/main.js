function counter(element) {
  let displayNum = 0;
  let endNum = parseInt(element.getAttribute("data-number"));
  let counter = element;
  let increment = 1;
  console.log(startNum)
  console.log(endNum)
  while (displayNum < endNum) {
    element.innerHTML = displayNum;
    displayNum + increment
  }
}
