/*


1. The moda1 object is declared. The methods of
this object are created by an Immediately Involved Function Expression or llFE (see p97). (This step
is not shown in the flowchart.)
2. Store the current window object in a jQuery selection, then create the three HTML elements needed for the modal window. Assemble the modal window and store it in $modal .
3. Add an event handler to the close button which callsthemoda1object'sclose() method.
4. Following the return keyword, there is a code block in curly braces. It creates three public methods of the modal object. Please note: This step is not shown in the flowchart.
5. The center() method creates two variables:
i) top: takes the height of the browser window and subtracts the height of the modal window. This number is divided by two, giving the distance of the modal from the top of the browser window.
ii) 1eft: takes the width of the browser window and subtracts the width of modal window. This number is divided by twE>, giving the distance of the modal from the left of the browser window.
6. The jQuery . css () method uses these variables to position the modal in the center of the page.
7. open () takes an object as a parameter; it is referred to as settings (the data for this object was shown on the previous page).
8. Any existing content is cleared from the modal, and the content property of the settings object is added to the HTML created in steps 1 and 2.
9. The width and height of the modal are set using values from the settings object. If none were given, auto is used. Then the modal is added to the page using the appendTo(} method.
10. center() is used to center the modal window. 11. If the window is resized, call center(} again.
12. close() empties the modal, detaches the HTML from the page, and removes any event handlers.

*/

var modal = (function () { // Declare modal object
	
	var $window = $(window); // Store the window
	var $modal = $('<div class = "modal"/>'); // Create markup for modal
	var $content =  $('<div class="modal-content"/>');
	var $close = $('<button role = "button" class = "modal-close">Close</button>'); 

	$modal.append($content, $close); // Add close button to modal

	$close.on('click', function (e) { // If user clicks on close
		
		e.preventDefault(); // Prevent link behavior
		modal.close();  // Close the modal window
	});

	return { // Add code to modal

		center: function () { // Define center() method
			
			// Calculate distance from top and left of window to center the modal
			var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
			var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

			$modal.css({ // Set CSS for the modal

				top: top + $window.scrollTop(), // Center vertically
				left: left + $window.scrollLeft() // Center horizontally
			});
		},

		open: function (settings) { // Define open() method
			
			$content.empty().append(settings.content); // Set new content of modal

			$modal.css({ // Set modal dimensions
				width: settings.width || 'auto',  // Set width
				height: settings.height || 'auto' // Set height
			}).appendTo('body'); // Add it to the page

			modal.center(); // Call center() method
			$(window).on('resize', modal.center);  // Call it if window resized
		},

		close: function () { // Define close() method
			
			$content.empty(); // Remove content from modal
			$modal.detach(); // Remove modal from page
			$(window).off('resize', modal.center); // Remove event handler

		}
	};
}());





















