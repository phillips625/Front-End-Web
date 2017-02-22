// NOTE: Because this example uses jQuery's load() method (as introduced in the previous chapter)
// It will not work locally in some browsers
// You can try it online at http://javascriptbook.com/code/c09 
// or run it on your own web server

$(function () { // DOM has loaded

// The l oadContent () function uses jQuery's . load() method to load content into the page.
	function loadContent (url) { // Load new content into page
		
		$('#content').load(url + ' #container').hide().fadeIn('slow');
	}

//If a link is clicked on, an anonymous function runs.
	$('nav a').on('click', function (e) { // Click handler 
		
		e.preventDefault(); // Stop link loading new page

// The page to load is held in a variable called href.
		var href = this.href; // Get href attribute of link
		var $this = $(this); // Store link in jQuery object

//The current links are updated.
		$('a').removeClass('current'); // Remove current from links
		$this.addClass('current'); //Update current link

// The l oadContent () function
		loadContent(href); // Call function: loads content
//The pushState() method of the hi story object updates the history stack.
		history.pushState('', $this.text, href); // Update history
	});

// When the user clicks backwards or forwards, the onpopstate event fires. This is used to trigger
// an anonymous function.
	window.onpopstate = function () { // Handle back/forward buttons

//The browser's location bar willdisplay the corresponding page from the history stack, so location.pathname is used to obtainthe path for the page that needs to be loaded.		
		var path = location.pathname; // Get file path
//The 1oadContent () function is called again, to retrieve the specified page.
		loadContent(path);  // Call function to load page

// The file name is retrieved so that the current link can be updated.
		var page = path.substring(location: pathname.lastIndexOf('/')+1);
		$('a').removeClass('current'); // Remove current from links
		$('[href="' + page + '"]').addClass('current');// Update current link
	};
});