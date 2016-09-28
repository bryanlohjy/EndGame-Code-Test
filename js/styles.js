// Centering calculator vertically on screen
function centerElement(elementID, offsetFromCenter){
	var h = window.innerHeight;
	var calc = document.getElementById(elementID);
	var calcHeight = calc.clientHeight;
	var marg = (h-calcHeight)/2 + offsetFromCenter;
	calc.style.marginTop = marg+"px"; 
}

centerElement('elementWrap',0);

// recenter div on window resize
window.onresize = function() {
	centerElement('elementWrap',0);
};