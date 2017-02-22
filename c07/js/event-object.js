$(function () {
	
	$('li').on('click', function (e) {
		
		// Any <span> elements that already exist inside the <l i > elements are removed.
		$('li span').remove();

		//A new Date object is created, and its time is set to the time at which the event was clicked.
		var date = new Date();
		date.setTime(e.timeStamp);

		// The time the event was clicked is then converted into a date that can be read.
		var clicked = date.toDateString();
		//The date that the list item was clicked is written into the list item (along with the type of event that was used).
		$(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
	});
});