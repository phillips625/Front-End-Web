// NOTE: This example will not work locally: 
// In Chrome / IE / Safari you may experience problems because of cross-domain restrictions.
// In Firefox, content may load but styles may not be applied.
// You can try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

/*
 Here the click event handler triggers the $. aj ax() method.
 JAVASCRIPT
 This example sets seven settings for the $.ajax() method.
 The first three are properties, the final four are anonymous 'functionstriggeredatdifferent points in the Ajax request.

 */
$('nav a').on('click', function (e) {
	
	e.preventDefault();  

	var url = this.href; // URL to load
	var $content = $('#content'); // Cache selection

	$('nav a.current').removeClass('current'); // Update links
	$(this).addClass('current');
	$('#container').remove();  // Remove content

	$.ajax({ // GET or POST

		type: "GET", // GET or POST
		url: url, 	// Path to file
//This example sets the timeout property to wait two seconds for the Ajax response.
		timeout: 2000, // Waiting time

/*
 The code also adds elements into the page to show that data is loading. You may not see them appear ifthe request is handled quickly,butyouwillseethemif the page is slower to load.
 */
		beforeSend: function () { // Before Ajax
			$content.append('<div id="load">Loading</div>'); // Load message
		},

		complete: function () { // Once finished
			$('#load').remove(); // Clear message
		},

		success: function (data) { // Show content
			$content.html($(data).find('#container')).hide().fadeIn(400);
		},

//Ifthe Ajax request fails,then an error message will be shown to the user.
		error: function () { // Show error msg
			$content.html('<div class="container">Please try again soon.</div>');
		}
	});
});
