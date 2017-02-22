
function checkLength (e, minLength) {
	
	var el, elMsg;
	// 'e' is <input type="text" id="username" /> in the HTML file
	// If event object doesn't exist
	if (!e) {
	// Use IE fallback
		e = window.event;
	}

	// Get target of event
	el = e.target || e.srcElement;
	// Get its next sibling aka id feedback 
	//i.e <div id="feedback"></div>
	elMsg = el.nextSibling;

	 if (el.value.length < minLength) {         // If length is too short set msg
    	elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  	} 
  	 else {                                   // Otherwise
    	elMsg.innerHTML = '';                    // Clear message
    }
}

var elUsername = document.getElementById('username');// Get username input
if (elUsername.addEventListener) {           // If event listener supported

	elUsername.addEventListener('blur', function(e){ // On blur event
		checkLength(e, 5);
	},false); // Capture in bubble phase
}
else {
	 elUsername.attachEvent('onblur', function(e) {   // IE fallback onblur
    // NOTE: This function is checkLength() - not checkUsername()
     checkLength(e, 5);                             // Call checkLength()
  });
}