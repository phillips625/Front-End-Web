$(function () {

//T h e : lt ( ) s e l e c t o r i s u s e d i n the selector to pick list items with an index number less than 2. It removes the value hot from their cl ass attribute.	
	$('li:lt(2)').removeClass('hot');
//T h e • e q ( ) m e t h o d s e l e c t s the first item (using the number 0 because the index numbers start at zero). It adds the value of comp1ete to the cl ass attribute.
	$('li').eq(0).addClass('complete');
//T h e : g t ( ) s e l e c t o r i s u s e d i n the jQuery selector to pick the list items with an index number higher than 2. It adds a value of coo1 to their cl ass attribute.
	$('li:gt(2)').addClass('cool');
});