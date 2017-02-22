// NOTE: This example will only work if you run it on a web server (it will not work locally)
// You can try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

//When users submit the form, an anonymous function runs.
$('#register').on('submit', function(e) {           // When form is submitted
  e.preventDefault();                               // Prevent it being sent

//The form data is collected by the . seri a1i ze () method and stored in the details variable.
  var details = $('#register').serialize();         // Serialize form data
                  
// The $.post () method is called using all three parameters:
// i)Theurlofthepagethatthe data is being sent to
// ii) Thedata that was just collected from the form
// iii) A callback function that will display the results to the user
  $.post('register.php', details, function(data) {  // Use $.post() to send it

// When the server responds, the content of the element whose id attribute has a value ofregisterisoverwrittenwith new HTML sent from the server.
    $('#register').html(data);                    // Where to display result
  });
});
