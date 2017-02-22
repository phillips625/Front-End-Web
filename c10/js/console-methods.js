console.info('And we\'re off...');  // Info: script running

var $form, width, height, area;
$form = $('#calculator');

/*
This technique is particularly helpful to show the nature of the information that you are writing to the screen. (In Firefox, make sure you have t he logging option selected.
*/
$('form input[type="text"]').on('blur', function() {  // On blur event

	console.warn('You entered ', this.value); // Warn: what was entered
});

$('#calculator').on('submit', function(e) {           // When form is submitted
  e.preventDefault();

  width = $('#width').val();
  height = $('#height').val();

  area = width * height;
  console.error(area);  // Error: show area

  $form.append('<p class="result">' + area + '</p>');
});