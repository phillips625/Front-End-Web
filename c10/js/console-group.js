var $form = $('#calculator');

$form.on('submit', function(e) {                 // Runs when submit is pressed
  e.preventDefault();
  console.log('Clicked submit...');              // Show the button was clicked

  var width, height, area;
  width = $('#width').val();
  height = $('#height').val();
  area = width * height;

/*
If you want to write a set of related data to the console, you can use the console. group () method to group the messages together. You can then expand and contract the results.
It has one parameter; the name that you want to use for the group of messages. You can then expand and collapse the contents by clicking next to the group's name as shown below.
*/
  console.group('Area calculations'); // Start grouping
  	console.info('Width ', width); // Write out the width
  	console.info('Height ', height); // Write out the height
  	console.log(area); // Write out the area
 /*
	When you have finished writing out the results for the group, to indicate the end of the group the console .groupEnd () method is used.
 */
  console.groupEnd(); // End group

  $form.append('<p>' + area + '</p>');
});