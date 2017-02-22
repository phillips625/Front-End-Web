/*
 1oca1Storage is best suited to information that:
 • Onlychangesatsetintervals(suchastimetables I price lists), which can be helpful to store offline.
 • The user might want to come back and use again (such as saving preferences I settings).

 */


// This example has been updated to use Modernizr - please note the use of localstorage in lowercase

// The examples on this page and the right-hand page store what the user enters into text boxes, but both examples store it for different lengths of time.

//A conditional statement is used to check if the browser supports the relevant storage APL
if (Modernizr.localstorage) {

//References to the inputs for the username and answer are stored in variables.
	var txtUsername = document.getElementById('username'); // Get form elements
	var txtAnswer = document.getElementById('answer');

//The script checks to see if the storage object has a value for either of these elements using the get I tern() method. If so, it is written into the appropriate input by updating its va1ue property.
	txtUsername.value = localStorage.getItem('username'); // Elements populated
	txtAnswer.value = localStorage.getItem('answer'); // by localStorage data

//Each time an input event fires on one of the inputs, the form will save the data to the 1oca1 Storage or sess i onStorage object. It will automatically be shown if you refresh the page.

	txtUsername.addEventListener('input', function () { // Data saved on keyup
		
		localStorage.setItem('username', txtUsername.value);
	}, false);

	txtAnswer.addEventListener('input', function () { // Data saved on keyup
		
		localStorage.setItem('answer', txtAnswer.value);
	}, false);
}
