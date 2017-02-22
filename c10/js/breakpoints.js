var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  height = $('#height').val();
  area = (width * height);

/*

You  can create a breakpoint in your code using just the debugger keyword. When the developer tools are open, this will automatically create a breakpoint.
You can also place the debugger keyword within a conditional statement so that it only triggers the breakpoint if the condition is met. This is demonstrated in the code below.
It is particularly important to remember to remove these statements before your code goes live as this could stop the page running if a user has developer tools open.

If you have a development server, your debugging code can be placed in conditional statements that check whether it is running on a specific server (and the debugging code only runs if it is on the specified server).

*/
  if (area < 100) {

  	debugger; // A breakpoint is set if the developer tools are open
  }

  $form.append('<p>' + area + '</p>');
});