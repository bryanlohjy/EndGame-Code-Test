// Render values to display
function display(value){
	// console.log(value);
	document.getElementById('display').insertAdjacentHTML('beforeend',value);
	cappingChar();
}

// Evaluate value from display + display answer
function evalAns(){
	// evaluating data 
	var solution = eval(document.getElementById('display').innerHTML);
	// displaying calculations
	document.getElementById('display').innerHTML = solution;
	// Capping to a set number of characters
	cappingChar();
}

// Reset display
function reset(){
	document.getElementById('display').innerHTML='';
}

// setting max character display
function cappingChar(){
	// defininf limit of characters to be displayed
	var maxCharDisplay = 16;
	var displayString = document.getElementById('display').innerHTML;
	// check to see if the display exceeds max display. If so, the function removes the characters exceeding the limit
	if(displayString.length > maxCharDisplay){
		displayString = displayString.substring(0,maxCharDisplay);
		document.getElementById('display').innerHTML = displayString;
	}
}  