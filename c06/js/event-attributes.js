//// HTML EVENT HANDLER ATTRIBUTES (DO NOT USE)

//Declare function
function checkUsername () {
	
	//Get feedback element
	var elMsg = document.getElementById('feedback');
	// Get username input
	var elUsername = document.getElementById('username');
	// If username too short
	if (elUsername.value.length < 5) {
		//Set msg
		elMsg.textContent = 'Username must be 5 characters or more';
	}
	else {
		elMsg.textContent = '';
	}
}