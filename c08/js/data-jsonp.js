/*
The code in the for loop (which is used to process the JSON data and create the HTML) and the line that writes it into the page are the same as the code that processed the JSON data from the same server.
There are three key differences: i) It is wrapped in a function called showEvents ().
ii) The JSON data comes in as an argument of the function call.
iii) The data does not need to be parsed with JSON.parse(). In the for loop, it is just referred to by the parameter name d(!ta.
Instead of using a second <script> element in the HTML pages, you can use JavaScript
to write that <script> element into the page (just like you would add any other element into the page). That would place all the functionality for the external data in the one JavaScript file.
*/
function showEvents (data) { // Callback when JSON loads
	
	var newContent = ''; // Variable to hold HTML

	// BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
	for (var i = 0; i < data.events.length; i++) { // Loop through object
		
	  newContent += '<div class="event">';
      newContent += '<img src="' + data.events[i].map + '" ';
      newContent += 'alt="' + data.events[i].location + '" />';
      newContent += '<p><b>' + data.events[i].location + '</b><br>';
      newContent += data.events[i].date + '</p>';
      newContent += '</div>';
	}

	 // Update the page with the new content
	 document.getElementById('content').innerHTML = newContent;
}