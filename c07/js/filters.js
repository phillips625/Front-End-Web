$(function () {
	
	var $listItems = $('li');
//The .filter() methodfinds the last list item with a c1ass attribute whose value is hot.
//It then removes that value from the c1ass attribute.
	$listItems.filter('.hot:last').removeClass('hot');
//The :not() selectorisused within the jQuery selector to find <l i >elements without a va1ue of hot in their class attribute and adds a value of coo1.
	$('li:not(.hot)').addClass('cool');
//The •has() methodfindsthe <l i >element that has an <em> element within it and adds the value comp1ete to the c1ass attribute.
	$listItems.has('em').addClass('complete');

// The •each() method loops through the list items. The current element is cached in
// a jQuery object. The •is () method looks to see if the <l i > element has a cl ass attribute whose value is hot. If it does,
//'Priority item: ' is added to the start of the item.
	$listItems.each(function () {
		
		var $this = $(this);
		if ($this.is('.hot')) {
			$this.prepend('Priority item: ');
		}
	});

//The : contains selector checks for <l i >elements that contain the text "honey" and appends the text " (1oca1)" to the end of those items.
	$('li:contains("honey")').append(' (local)');
});