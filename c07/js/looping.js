/*

In this example, the first selector applies only to one 
element and the cl ass attribute's new value triggers a CSS 
rule that adds a calendar icon to the left of it.

The second selector applies to three elements. The new 
value added to the cl ass attribute for each of these 
elements triggers a CSS rule that adds a heart icon on the 
right-hand side.
The ability to update all of the elements in the jQuery 
selection is known as implicit iteration.
*/
$('li em').addClass('seasonal');
$('li.hot').addClass('favorite');