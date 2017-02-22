$(function  () {
	
	var $p = $('p');

	//Create a clone of the <p> element and add it after the <h2> element.
	var $clonedQuote = $p.clone();
	$p.remove();
	$clonedQuote.insertAfter('h2');

	// Remove first item, and add it to the end of the list
	//Note how this happens in both lists. The first list item is detached from the DOM tree and stored in a variable called $moveItem (effectively removing it from the DOM tree).
	var $moveItem = $('#one').detach();
	//That list item is then appended to the end of the list.
	moveItem.appendTo('ul');
});