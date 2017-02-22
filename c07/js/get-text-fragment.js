//Theselectorreturnsthe<u1>element.The .text() method
//getsthe text from all of the <ul >element's children. 
//This is then appended to the end of the selection, in 
//this case after the existing <ul >element.
$(function() {
	
	var $listText = $('ul').text();
	$('ul').append('<p>' + $listText +'</p>');
});