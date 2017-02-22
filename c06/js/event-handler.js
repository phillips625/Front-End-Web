// Declare function
function checkUsername () {
	// Get feedback element
	var elMsg = document.getElementById('feedback');
	 // If username too short
	 if (this.value.length < 5) {
	 	// Set msg
	 	elMsg.textContent = 'Username must be 5 characters or more'; 
	 }
	 // Clear message
	 else {
	 	elMsg.textContent = ''; 
	 }
}

var elUsername = document.getElementById('username');
// When it loses focus call checkuserName()
elUsername.onblur = checkUsername;