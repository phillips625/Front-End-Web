$(function () {

//A variable called l is tHei ght is created to store the height of the page container. It isobtained using the .height() method.	
	var listHeight = $('#page').height();

//. The height of the page is written at the end of the list using the .append() method and may vary between browsers.
	$('ul').append('<p>Height: ' + listHeight + 'px</p>' );
//  The selector picks all the <l i> elements and sets their width to 50% of their current width using the .width() method.
	$('li').width('50%');
//These two statements set the width of the first list item to 125 pixels and the width of the second list item to be 75% of the width it was when the page loaded .
//Measurements in percentages or ems should be given as a string, with the suffix% or em. Pixels do not require a suffix and are not enclosed in quotes.
	$('li#one').width(125);
    $('li#two').width('75%');
});