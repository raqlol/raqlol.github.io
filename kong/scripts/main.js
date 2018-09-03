
const metricOne = document.getElementById('metric-one')
const metricTwo = document.getElementById('metric-two')
const metricThree = document.getElementById('metric-three')

function visibleCounter (element) {
	let endNum = parseInt(element.getAttribute("data-number"));
	console.log(endNum)
  let increment = 1;
	let displayNum;
  setInterval(function(){
		if (increment < 100) {
			element.innerHTML = increment;
			increment++;
			console.log(1)
		}
		else if (increment < 1000 && increment >= 100) {
			element.innerHTML = increment;
			increment += 10;
			console.log(increment)
			console.log(2)
		}
		else if (increment < 999999 && increment >= 1000 && increment <= endNum) {
			displayNum = "+" + (increment/1000).toFixed(0) + "K"
			element.innerHTML = displayNum;
			increment += 1000;
			console.log(increment)
			console.log(3)
		}
		else if (increment >= 999999  && increment <= endNum) {
			displayNum = "+" + (increment/1000000).toFixed(0) + "M"
			element.innerHTML = displayNum;
			increment += 1000000;
			console.log(increment)
			console.log(4)
		}
	}, 10)
}
visibleCounter(metricOne)
visibleCounter(metricTwo)
visibleCounter(metricThree)
