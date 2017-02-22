$(function () {
	
	var listItem, itemStatus, eventType;

	$('ul').on(

		//  The event handler is triggered by cl ick and mouseover events.
		'click mouseover', 

		//Additional information
		//The selector parameter filters out the element whose id attribute has a value of four.
		':not(#four)',
		//Additional data that will be used by the event handler is passed in as an object literal.
		{status: 'important'},

		// The event handler uses the event object to display the content of the element the user interacts with, the information from the data that was passed into the function, and the event type, under the list in a white box.
		function (e) {
			
			listItem = 'Item: ' + e.target.textContent + '<br />';
			itemStatus = 'Status: ' + e.data.status + '<br />';
			eventType = 'Event: ' + e.type;

			$('#notes').html(listItem + itemStatus + eventType);
		}
	);
});