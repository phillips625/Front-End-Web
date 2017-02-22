$(function () {
	
	// The selector creates a jQuery object containing all <l i > elements. The •each() method calls an anonymous function for each of the list items in the matched set.
	$('li').each(function () {
	
	//The this keyword refers to the current element node in the loop. It is used to access the value of the current element's id attribute, which is stored in a variable called ids.	
		var ids = this.id;
	//$(this) is used to create a jQuery object that contains the current element in the loop. Having the element in a jQuery object enables you to use jQuery methods on that element. In this case the •append () method is used to add a new <span> element to the current list item.
		$(this).append('<span class = "order">' + ids + '</span>');
	});
});