
const metricOne = document.getElementById('metric-one')
const metricTwo = document.getElementById('metric-two')
const metricThree = document.getElementById('metric-three')

function visibleCounter (element) {
	let endNum = parseInt(element.getAttribute("data-number"));
  let increment = 1;
	let displayNum;
  setInterval(function(){

		if (increment < 1000) {
			element.innerHTML = increment;
			increment++;
		}
		else if (increment <= 999999 && increment >= 1000) {
			displayNum = "+"(increment/1000).toFixed(0) + "K"
			element.innerHTML = displayNum;
			increment++;
		}
		else if (increment >= 999999) {
			displayNum = "+"(increment/1000000).toFixed(0) + "M"
			element.innerHTML = displayNum;
			increment++;
		}
	}, 50)
  //setInterval(function(){  if (increment >= 100 && increment < endNum) {element.innerHTML = increment; increment++}}, 1000)
}
visibleCounter(metricOne)
visibleCounter(metricTwo)
visibleCounter(metricThree)
