$(function () {

//New jQuery objects are created to hold the new item button, the form to add new items, and the add button. These are cached in variables.	
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	var $textInput = $('input:text');

//When the page loads, the CSS hides the new item button (and shows the form), so jQuery methods show the new item button and hide the form.
	$newItemButton.show();
	$newItemForm.hide();

//If a user clicks on the new item button (the <button> element whose id attribute has a value of showForm), the new item button is hidden and the form is shown.
	$('#showForm').on('click', function () {
		
		$newItemButton.hide();
		$newItemForm.show();
	});

//When the form is submitted, an anonymous function is called. It is passed the event object.
	$newItemForm.on('submit', function (e) {

//The . preventOefault() method can stop the form being submitted.		
		e.preventDefault();

//  The :text selector picks the <input> element whose type attribute has a value of text, and the •va1() method gets the value the user entered into it. This value is stored in a variable called newText.
		var newText = $textInput.val();
// A new item is added to the end of the list using the .after() method.
		$('li:last').after('<li>' + newText +'</li>');
//The form is hidden, the new item button is shown again, and the content of the text input is emptied (so the user can add a new entry if they want to).
		$newItemForm.hide();
		$newItemButton.show();
		$textInput.val('');
	});
});