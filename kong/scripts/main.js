
const metricOne = document.getElementById('metric-one')
const metricTwo = document.getElementById('metric-two')
const metricThree = document.getElementById('metric-three')

function visibleCounter (element) {
	let endNum = parseInt(element.getAttribute("data-number"));
  let increment = 1;
	let displayNum;
  setInterval(function(){
		if (increment < 100) {
			element.innerHTML = increment;
			increment++;
		}
		else if (increment < 1000 && increment >= 100) {
			element.innerHTML = increment;
			increment += 10;

		}
		else if (increment < 99999 && increment >= 1000 && increment <= endNum) {
			displayNum = (increment/1000).toFixed(0) + "K"
			element.innerHTML = displayNum;
			increment += 1000;

		}
		else if (increment < 999999 && increment >= 10000 && increment <= endNum) {
			displayNum = "+" + (increment/1000).toFixed(0) + "K"
			element.innerHTML = displayNum;
			increment += 1000;

		}
		else if (increment >= 999999  && increment <= endNum) {
			displayNum = (increment/1000000).toFixed(0) + "M"
			element.innerHTML = displayNum;
			increment += 1000000;

		}
		else {
			clearInterval();
		}
	}, 10)

}
visibleCounter(metricOne)
visibleCounter(metricTwo)
visibleCounter(metricThree)

window.addEventListener("scroll", function() {
	console.log("stuff")
  // value of where you are on the page
  var scrolledHeight = window.pageYOffset;
  // value of where target element is in relation to the page
  var limitBanner = metricOne.offsetTop + metricOne.offsetHeight;
  // parallax for the credit card banner
  if((scrolledHeight - 100) > metricOne.offsetTop && scrolledHeight <= limitBanner) {
		console.log("if")
		visibleCounter(metricOne)
		visibleCounter(metricTwo)
		visibleCounter(metricThree)
  }
});
