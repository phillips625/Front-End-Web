function setup() {
	var textInput;
	textInput = document.getElementById('username'); // Get username input
	textInput.focus(); // Give username focus
}

window.addEventListener('load', setup, false); //When the page loaded, call setup()