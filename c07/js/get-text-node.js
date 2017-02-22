/*
Theselectorreturnsthefour<li>elements.The .text() 
methodgets the text from these. This is then appended to 
each of the <l i > elements in the selection.
*/
$(function() {

	var $listItemText = $('li').text();
	$('li').append('<i>' + $listItemText + '</i>');
});