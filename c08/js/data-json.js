// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      // If server status was ok
/*
The JSON data from the server is stored in avariable called responseObject. It is made available by the XMLHttpRequest object's responseText property
When it comes from the server, the JSON data is a string, so it is converted into aJavaScript object using the JSONobject's parse() method.
*/
responseObject = JSON.parse(xhr.responseText);

// BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
// The newContent variable is created to hold the new HTML data. It is set to an empty string outside the loop so that the code in the loop can add to the string.
var newContent = '';

/*
Loop through the objects that represent each event using a for loop. The data in the objects are accessed using dot notation, just like you access other objects.
Inside the loop, the contents
of the object are added to the newContent variable, along with their corresponding HTML markup.
*/
for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
	
	newContent += '<div class="event">';
	newContent += '<img src="' + responseObject.events[i].map + '" ';
	newContent += 'alt="'+ responseObject.events[i].location +'" />';
	newContent += '<p><b>' + responseObject.events[i].location +'</b><br>';
	newContent += responseObject.events[i].date + '</p>';
	newContent += '</div>';
}
	// Update the page with the new content
	//When the loop has finished running through the event objects in responseObj ect, the new HTML is added to the page using the i nnerHTML property.
	document.getElementById('content').innerHTML = newContent;
//}
};

xhr.open('GET', 'data/data.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to set the MIME type for JSON on the server (application/JSON).