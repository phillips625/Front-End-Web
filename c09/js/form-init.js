///Most jQuery scripts live within the . ready() function or its shortcut (used on the next page). As you saw in Chapter 7, this ensures that the script only runs when the DOM has loaded.
//If you include more than one jQuery plugin, each of which uses the. ready() method, you do not repeat the function - you combine the code from inside both functions into the one.

$(function () {
	
	$('#arrival').datepicker(); //Turn input to JQUI datepicker

	var $amount = $('#amount'); // Cache the price input
	var $range = $('#price-range'); // Cache the <div> for the price range

	$('#price-range').slider({ // Turn price-range input into a slider

		range: true,  // If it is a range it gets two handles
		min: 0,                // Minimum value
    	max: 400,                      // Maximum value
    	values: [175, 300],            // Values to use when the page loads
    	
    	slide: function (event, ui) {
    		
    		$amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
    	} 
	});

		// Set initial values of amount element
	  $amount.val('$' + $range.slider('values', 0)     // A $ sign then lower range
    + ' - $' + $range.slider('values', 1)); // A $ sign then higher range
});