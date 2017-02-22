// NOTE: This example will not work locally in all browsers.
// In Chrome, if you try this locally, you may get an error along the lines of:
//       Origin 'null' is therefore not allowed access.
// You can try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

$('nav a').on('click', function (e) { // User clicks nav link

//e.preventDefault() stops the link taking users to a new page.	
	e.preventDefault(); // Stop loading new link
//A variable called url holds the URL of the page to load. This is collected from the href attribute of the link the user clicked on. It indicates which page to load.
	var url = this.href; // Get value of href

// The cl ass attributes on the links are updated to indicate which page is the current page.
	$('nav a.current').removeClass('current');  // Clear current indicator
	$(this).addClass('current'); // New current indicator

//The element holding the content is removed.
	$('#container').remove(); // Remove old content
// The container element is selected and . load () fetches new the new content. It is hidden straight away using .hi de() so that fadeIn() can fade it in.
	$('#content').load(url + ' #container').hide().fadeIn('slow'); // New content
});