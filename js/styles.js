// Centering calculator vertically on screen
function centerElement(elementID, offsetFromCenter){
	var h = window.innerHeight;
	var calc = document.getElementById(elementID);
	var calcHeight = calc.clientHeight;
	var marg = (h-calcHeight)/2 + offsetFromCenter;
	calc.style.marginTop = marg+"px"; 
	// console.log(h);
	// console.log(calc);
	// console.log(calcHeight);
	// console.log(marg);
}

centerElement('elementWrap',0);

// recenter on window resize
window.onresize = function() {
	centerElement('elementWrap',0);
};