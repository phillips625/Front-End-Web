// NOTE: This example will not work locally in all browsers. 
// Please try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

//The script that does all the work is in example. j s. It runs when the DOM has loaded.
$(function () {  // When the DOM is ready

//The t i mes variable will be used to store t he session timetables for all of the events.	
	var times; // Declare global variable

/*
Before the browser requests the JSON data,
the script checks if the browser supports the overrideMimeType() method. This is used to indicate that the response from the server should be treated as JSON data. This method can be used in case the server is accidentally set up to indicate that the data being returned is in any other format.
*/
	$.ajax({

		beforeSend: function (xhr) { // Before requesting data
			
			if (xhr.overrideMimeType) {  // If supported
				xhr.overrideMimeType("application/json"); // set MIME to prevent errors
			}
		}
	});

	// FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
/*
Next you can see a function called
l oadTimetable(), which is used to load the timetable data from a file called example .json.
*/
	function loadTimetable () { // Declare function
		
		$.getJSON('data/example.json');  // Try to collect JSON data
// If the data loads successfully, the data for the timetables w ill be stored in a variable called times.
		.done(function (data) { // If successful
			
			times = data; // Store it in a variable
// If it fails to load, an error message will be shown to the users.
		}).fail(function () {  // If a problem: show message
			
			$('#event').html('Sorry! We could not load the timetable at the moment');
		});
	}

//The l oadTimetab1e () function is then called to load the data.
	loadTimetable(); // Call the function


// CLICK ON THE EVENT TO LOAD A TIMETABLE

//A jQuery event helper method waits for users to click on the name of an event. It will load the timetable for that event into the middle column.
$('#content').on('click', '#event a', function (e) { // User clicks on event

	e.preventDefault(); // Prevent loading

// A variable called l oc is created to hold the name of the event location. It is collected from the id attribute of the link that was clicked.
	var loc = this.id.toUpperCase()  // Get value of id attr
//The HTML for the timetables will be stored in a variable called newContent. It is set to a blank string.
	var newContent = ''; 
	// Build up timetable by looping through events
	for (var i = 0; i < times[loc].length; i++) {

//Each session is stored inside an <l i> element, which starts by displaying the time of the session.		
		newContent += '<li><span class="time">' + times[loc][i].time + '</span';
//A link is added to the timetable, which will be used to load the description. The link points to the descriptions .html file. It is followed by a# symbol so it links to the correct part of the page.
		newContent += '<a href="descriptions.html#';
//The session title is added after the I symbol.
//The •rep1ace() method replaces spaces in the title with a dash to match the value of the id attribute in the descriptions. html file for each session.
		newContent += times[loc][i].title.replace(/ /g, '-') + '">';
// Inside the link you can see the title of the session.
		newContent += times[loc][i].title + '</li>';
	}

//The new content is added into the middle column.
	$('#sessions').html('<ul>' + newContent + '</ul>'); // Display times on page

// The cl ass attributes on the event links are updated to shows which event is the current event.
	$('#event a.current').removeClass('current'); // Display times on page
	$(this).addClass('current');

//The third column is emptied if it had content.
	$('#details').text('');
});

// CLICK ON A SESSION TO LOAD THE DESCRIPTION

//Another jQuery event helper method is set up
//to respond when a userclicks on a session in the middle column. It loads a description of the session.
 $('#content').on('click', '#sessions li a', function (e) { // Click on session
 	
 	e.preventDefault(); // Prevent loading

// Avariable called fragment is created to hold the linkto the session. This is collected from the href attribute of the link that was clicked.
 	var fragment = this.href; // Title is in href
 // A space is added before the # symbolso that it is the correct format for the jQuery 1oad () method to collect part (not all) of the HTML page, e.g., description.html #Arduino-Antics
 	fragment = fragment.replace('#', ' #'); // Add space after#
 //  AjQueryselector is used to find the element whose id attribute has a value of detai1s in the third column. The .1oad () method is then used to load the session description into that element.
 	$('#details').load(fragment); // To load info

// The links are updated so that they highlight the appropriate session in the middle column.
 	$('#sessions a.current').removeClass('current'); // Update selected
 	$(this).addClass('current');
 });

 // CLICK ON PRIMARY NAVIGATION. The main navigation is set up 
 $('nav a').on('click', function (e) { // Click on nav
 	
 	 e.preventDefault(); // Prevent loading

 	 var url = this.href; // Get URL to load

 	 $('nav a.current').removeClass('current'); // Update nav
 	 $(this).addClass('current');

 	 $('#container').remove(); // Remove old part
 	 $('#content').load(url + ' #container').hide().fadeIn('slow'); // Add new
 });

});





















