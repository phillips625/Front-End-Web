/*
1 . F i r s t t h e s c r i p t g e t s t h e c o n t e n t s o f t h e e l e m e n t that has an id attribute whose value is share- options. Note how the jQuery •detach() method removes this content from the page.
2. Next an event handler is set to respond to when the user clicks on the share button. When they do, an anonymous function is run.
3. The anonymous function uses the open() method of the moda1 object. It takes parameters in the form of an object literal:
• content: the content to be shown in the modal window. Here it is the content of the element whose id attribute has a value of share-options.
• width: the width of the modal window.
• height: the height of the modal window.
Step 1 uses the . detach() method because it keeps the elements and event handlers in memory so they can be used again later. jQuery also has a . remove () meth.od but it removes the items completely.


The modal - init.j s file below opens the modal window. Note how the open() method is passed three pieces of information in JSON format:
i) content for modal (required)
ii) width of modal (optional - overrides default) 
iii) height of modal(optional - overrides default)
*/

(function () {
	
	var $content = $('#share-options').detach(); // Remove modal from page

	$('#share').on('click', function () { // Click handler to open modal
		modal.open({content: $content, width: 340, height: 300});
	});
}());