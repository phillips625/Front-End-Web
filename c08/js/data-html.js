// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

//The object's onload event will fire when the server responds. It triggers an anonymous function.
xhr.onload = function () { //When response has loaded

	  // The following conditional check will not work locally - only on a server
	  //if (xhr.status === 200) { // If server status was ok
	  	document.getElementById('content').innerHTML = xhr.responseText; // Update. The new HTML is retrieved from the XMLHttpRequest object's responseText property.
	  //}
};

/*
The XMLHttpRequest object's open() method prepares the request. It has three parameters: i) Either HTTP GET or POST to specify how to send the request ii) The path to the page that will handle the request
iii) Whether or not the request is asynchronous (this is a Boolean)
*/
xhr.open('GET', 'data/data.html', true); //Prepare the request
//Up to this point, the browser has not yet contacted the server to request the new HTML.
//This does not happen until
//the script gets to the last line that calls the XMLHttpRequest object's send() method. The send() method requires an argument to be passed. If there is no data to send, you can just use null.
xhr.send(null); //Send the request