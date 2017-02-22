$(function () {
	//The <ul >element is selected, and the •before() method is used to insert a new paragraph before the list.
	$('ul').before('<p class = "notice">Just updated</p>');
  //Selects all <l i> elements whose class attribute contains a value of hot and uses the .prepend () method to add a plus symbol(+) before the text.
	$('li.hot').prepend('+ ');
  //A new <l i> element is created and stored in a variable. Then the last <l i >element is selected, and the new element is added using the .after() method.
	var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
	$('li:last').after($newListItem);
});	