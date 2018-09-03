
const test = document.getElementById('test')
const tester = document.getElementById('tester')

let startNum = 0;
function testingCount () {
	let endNum = parseInt(test.getAttribute("data-number"));
  let increment = 1;
  setInterval(function(){ if (increment < 100) {test.innerHTML = increment; increment++}}, 100)
  setInterval(function(){  if (increment >= 100 && increment < 120) {test.innerHTML = increment; increment++}}, 1000)
}
testingCount()
