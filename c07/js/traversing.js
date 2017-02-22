$(function () {
	
	var $h2 = $('h2');
	$h2.append('<a class = "show">show</a>');

//A click event anywhere in the <h2> element will trigger an anonymous function.
	$h2.on('click', function () {

// The •next() method is used to select the next sibling after the <h2> element, which is the <u1> element.		
// The <ul > is faded into view.
//The .children() methoo then selects any child elements of the <u1> element, and the selector indicates that it should pick only those whose cl ass attribute has a value of hot.
//The .addClass() method is then used on those <l i > elements to add a class name of complete. This shows how you can chain methods and traverse from one node to another.
//In the last step, the •find() method can be used to select the <a> element that is a child
//of the <h2> element and fade it out because the list is now being shown to the users.
		$h2.next('ul')
		   .fadeIn(500)
		   .children('.hot')
		   .addClass('complete');

		$h2.find('a').fadeOut();
	});
});