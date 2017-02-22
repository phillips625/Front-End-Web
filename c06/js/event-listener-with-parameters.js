var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername (minLength) {
	if (elUsername.value.length < minLength) {

		// Set the error message
		elMsg.innerHTML = 'Username must be ' + minLength + ' character or more';
	}
	else {
		// Clear msg
		elMsg.innerHTML = '';
	}		
}
// When it loses focus
elUsername.addEventListener('blur', function () {
	
	//Pass argument here
	checkUsername(5);
}, false);