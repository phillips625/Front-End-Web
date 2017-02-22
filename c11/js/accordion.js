/*

1. A jQuery collection is created to hold elements whose cl ass attribute has a value of accordion. In the HTML you can see that this corresponds to the unordered list element (there could be several lists on the page, each acting as an accordion).
An event listener waits for the user to click on one of the buttons whose cl ass attribute has a value of accordion-control . This triggers an anonymous function .
*/
$('.accordion').on('click', '.accordion-control', function (e) { // When clicked

/*
2. The preventDefault () method prevents browsers treating the the button like a submit button. It can be a good idea to use the preventDefaul t () method early in a function so that anyone looking at your code knows that the form element or link does not do what they might expect it to.

*/	 
	 e.preventDefault(); // Prevent default action of button
/*
Another jQuery selection is made using the
this keyword, which refers to the element the user clicked upon. Three jQuery methods are applied to that jQuery selection holding the element the user clicked on.
*/
	 $(this) // Get the element the user clicked on

//  Note how steps 4, 5, and 6 are chained off the same jQuery selection.

/*
next('•accordion-panel') selectsthenext element with a class of accordion-panel.
*/
	 	.next('.accordion-panel')  // Select following panel
/*
.not(':animated') checksthatitisnotinthe middle of being animated. (If the user repeatedly clicks the same label, this stops the . s1i deToggl e() method from queuing multiple animations.)

*/
	 	.not(' :animated')  // If it is not currently animating
/*
 •sl i deToggl e() will show the panel if it is currently hidden and will hide the panel if it is currently visible.
*/
	 	.slideToggle();  // Use slide toggle to show or hide it
});