// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

/*
Inside the for loop, you
will see the getNodeVal ue() function is called several times. Its purpose is to get the contents from each of the XML elements. It takes two parameters:
i) obj is an XML fragment.
ii) tag is the name of the tag you want to collect the information from.
The function looks for the matching tag within the XML fragment (using the DOM's getElementsByTagName() method). It then gets the text from the first matching element within that fragment.
*/
xhr.onload = function () { // When response has loaded
 // The following conditional check will not work locally - only on a server
 // if (xhr.status === 200) {             // If server status was ok

 // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
 var response = xhr.responseXML; // Get XML from the server
 var events = response.getElementsByTagName('event'); // Find <event> elements

 for (var i = 0; i < events.length; i++) { // Loop through them

 	var container, image, location, city, newline; // Declare variables
 	container = document.createElement('div'); // Create <div> container
 	container.className = 'event'; // Add class attribute

 	image = document.createElement('img'); // Add map image
 	image.setAttribute('src', getNodeValue(events[i], 'map'));
 	image.setAttribute('alt', getNodeValue(events[i], 'location'));
 	container.appendChild(image);

 	location = document.createElement('p'); // Add location data
 	city = document.createElement('b');
 	newline = document.createElement('br');
 	city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
 	location.appendChild(newline);
 	location.insertBefore(city, newline);
 	location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
 	container.appendChild(location);

 	document.getElementById('content').appendChild(container);
 }
 // }
 function getNodeValue (obj, tag) {// Gets content from XML
 	return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
 }
};

xhr.open('GET', 'data/data.xml', true);             // Prepare the request
xhr.send(null);                                     // Send the request






