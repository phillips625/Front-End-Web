$(function () {
	
	var ids = '';
	//The selector finds all list items on the page. The resulting jQuery object is used more than once, so it is stored in a variable cal led $1 i s t Items.
	var $listItems = $('li');

	//The •on() method creates an event listener, which waits for when the user moves a mouse over a list item or clicks on it. It triggers an anonymous function.
	//Note how the two events are specified in the same set of quote marks, with a space between them.
/*
The anonymous function:
• Gets the value of the id
attribute on that element.
• Removes <span> elements
from all of the list items.
• Adds the value of the id
attribute to the list item in a new <span> element.
*/
	$listItems.on('mouseover click', function () {
		
		ids = this.id;
		$listItems.children('span').remove();
		$(this).append('<span class = "priority">' + ids +'</span>');
	});

// The •mouseout () method triggers the removal of any child <span> elements to prevent build-up of added values.
	$listItems.on('mouseout', function () {
		
		$(this).children('span').remove();
	});
});