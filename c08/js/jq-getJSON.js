// NOTE: This example will not work locally in Chrome / IE because of cross-domain restrictions.
// You can try it out on the website for the book http://javascriptbook.com/code
// or run it on your own server.


// Onthefirstlineofthescript an element is added to the page to hold the exchange rate data.
$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

//JSONdata representing currency exchange rates is loaded into the page by a function called l oadRates ()
function loadRates () {

    //InsideloadRates(),the $.getJSON method tries to load some JSON data. There are three methods chained after this method. They do not all run.
	$.getJSON('data/rates.json')

    //. done() only runs if the data is retrieved successfully. It contains an anonymous function that shows exchange rates and the time they were displayed.
	.done( function (data) { // SERVER RETURNS DATA
		
		var d = new Date(); // Create date object
		var hrs = d.getHours(); // Get hours
		var mins = d.getMinutes(); // Get mins
		var msg = '<h2>Exchange Rates</h2>'; // Start message

		$.each(data, function (key, val) { // Add each rate
      		
      		msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    	});			
			 msg += '<br>Last update: ' + hrs + ':' + mins + '<br>'; // Show update time
			 $('#rates').html(msg); // Add rates to page
	
    // fail() onlyrunsiftheserver cannot return the data. Its job is to display an error message to the user.
		}).fail( function () { // THERE IS AN ERROR
			
			$('#rates').text('Sorry, we cannot load rates.');   // Show error message
                
    // always() willrunwhether or not the answer was returned. It adds a refresh button to the page, along with an event handler that triggers the loadRates () function again.
		}).always( function () { // ALWAYS RUNS
			
			var reload = '<a id="refresh" href="#">';// Add refresh link
			reload += '<img src="img/refresh.png" alt="refresh" /></a>';
			
			$('#reload').html(reload); // Add refresh link
			$('#refresh').on('click', function (e) { // Add click handler
				e.preventDefault(); // Stop link
				loadRates(); // Call loadRates()
			});
 	});
}

//  The function is called on the last line of the script.
loadRates(); // Call loadRates()

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).
// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).
