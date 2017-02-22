console.log('And we\'re off...');     // Indicates script is running

var $form, width, height, area;
$form = $('#calculator');

/*
Next an event handler waits for the user leaving a text input, and logs the value that they entered into that form field.
JA V ASCRIPT
When the user submits the form, four values are displayed.
*/

/*

They help check that you are getting the values you expect.
The console.log() method
can write several values to the console at the same time, each separated by a comma, as shown when displaying the height (5).
You should always remove this kind of error handling code from your script before you use it on a live site.

*/
$('form input[type="text"]').on('blur', function () { // When input loses focus
	
	console.log('You entered ', this.value); // Write value to console
});

$('#calculator').on('submit', function (e) { // When the user clicks submit
	
	  e.preventDefault();   // Prevent the form submitting
	  console.log('Clicked submit...'); // Indicate button was clicked

	  width = $('#width').val();
	  console.log('Width ' + width); // Write width to console

	   height = $('#height').val();
  	   console.log('Height ', height);  // Write height to console

  	   area = width * height;
  	   console.log(area); // Write area to console

  	   $form.append('<p>' + area + '</p>');
});