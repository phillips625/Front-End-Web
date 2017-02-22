/*
A jQuery selection picks all sets of tabs within
the page. The .each() method calls an anonymous function that is run for each set of tabs (like a loop). The code in the anonymous function deals with
one set of tabs at a time, and the steps would be repeated for each set of tabs on the page.
*/
$('.tab-list').each(function () { // Find lists of tabs
/*
Four variables hold details of the active tab:
i) $this holds the current set of tabs.
ii) $tab holds the currently active tab.
The . find() method selects the active tab.
iii) $1 ink holds the <a> element within that tab.
iv) $panel holds the value of the href attribute for the active tab (this variable will be used to hide the panel if the user selects a different one).
*/	
	var $this = $(this); // Store this list
	var $tab = $this.find('li.active'); // Get the active list item
	var $link = $tab.find('a'); // Get link from active tab
	var $panel = $($link.attr('href')); // Get active panel
/*
An event listener is set up to check for when the user clicks on any tab within that list. When they do, it runs another anonymous function.
*/	
	$this.on('click', '.tab-control', function (e) { // When click on a tab
		
		e.preventDefault(); // Prevent link behavior
/*
 Creates a variable called $1 ink to hold the current link inside a jQuery object.
*/	
		var $link = $(this),  // Store the current link
/*
Creates a variable called i d to hold the value of the href attribute from the tab that was clicked. It is called id because it is used to select the matching content panel (using its id attribute).
*/	
			id = this.hash; // Get href of clicked tab 
/*
An i f statement checks whether the id variable contains a value, and the current item is not active. If both conditions are met.
*/	
		if (id && !$link.is('.active')) { // If not currently active
/*
The previously active tab and panel have the
cl ass of acti ve removed (which deactivates the tab and hides the panel).
*/	
			$panel.removeClass('active'); // Make panel inactive
			$tab.removeClass('active'); // Make tab inactive
/*
The tab that was clicked on and its corresponding panel both have active added to their cl ass attributes (which makes the tab look active and displays its corresponding panel, which was hidden). At the same time, references to these elements are stored in the $pane1 and $tab variables.
*/	
			$panel = $(id).addClass('active');
			$tab = $link.parent().addClass('active');
		}
	});
});