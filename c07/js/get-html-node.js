/*
The selector returns the four <1 i >elements, but 
the •html () method returns only the contents of the 
first one. This is then appended to the end of the 
selection, in this case after each existing <1 i> element.
*/
$(function() {

	var $listItemHTML = $('li').html();
	$('li').append('<i>' + $listItemHTML + '</i>');
});