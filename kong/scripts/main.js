
const metricOne = document.getElementById('metric-one')
const metricTwo = document.getElementById('metric-two')
const metricThree = document.getElementById('metric-three')

function visibleCounter (element) {
	let endNum = parseInt(element.getAttribute("data-number"));
  let increment = 1;
  setInterval(function(){ if (increment < 100) {element.innerHTML = increment; increment++}}, 100)
  setInterval(function(){  if (increment >= 100 && increment < endNum) {element.innerHTML = increment; increment++}}, 1000)
}
visibleCounter(metricOne)
visibleCounter(metricTwo)
visibleCounter(metricThree)
