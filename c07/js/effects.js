$(function() {

//In the first statement, the selector picks the <h2> element and hides it so that it can be animated in. The chosen effect to show the heading is the
//•sl i deDown() method. Note how the methods are chained; there is no need to make a new selection for each of the tasks.
	$('h2').hide().slideDown();

	var $li = $('li');
//The second part causes the list of items to appear one by one. Again, before they can be faded in, they must be hidden. Then the •each () method is used to loop through each of the <l i> elements in turn. You can see that this triggers an anonymous function.
//Inside the anonymous function, the index property acts as a counter indicating which <l i > element is the current one.
//The .delay() method creates a pause before the list item is shown. The delay is set, multiplying the index number by 700 ms (otherwise all of the list items would appear at the same time). Then it is faded in using the fadeIn() method.
	$li.hide().each(function (index) {
		
		$(this).delay(700 * index).fadeIn(700);
	});

//The final part creates an event listener that waits for the user to click on a list item. When they do, it will fade that item out to remove it from the list (the fade will take 700 milliseconds).
	$li.on('click', function () {
		
		$(this).fadeOut(700);
	});
});