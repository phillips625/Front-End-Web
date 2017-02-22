function getTarget(e) {
	if (!e) {	// If there is no event object
		e = window.event; // Use old IE event object
	};

		return e.target || e.srcElement; // Get the target of event
}

function itemDone(e) {
	//Remove item from list
	var target, elParent, elGrandparent;

	target = getTarget(e); // Get the item clicked link
	elParent = target.parentNode; //Get its list item ie "pine nuts"
	elGrandparent = target.parentNode.parentNode; //Get its list
	//The <li>element is removed from the <ul > element.
	elGrandparent.removeChild(elParent); //Remove list item from list

	//Prevent the link from taking you elsewhere
	if (e.preventDefault) { //If default works
		e.preventDefault(); // Prevent default
	}
	else {
		e.returnValue = false; //Use old IE version
	}
}

// Set up event listener to call itemDone() on click
var el = document.getElementById('shoppingList'); // Get shopping list

if (el.addEventListener) { //If event listener works
	el.addEventListener('click', function(e){ // Add listener on click
		itemDone(e); // calls itemDone
	}, false); // Use bubble phase for flow
}
else {
	//Use old IE model
	el.attachEvent('onclick', function(e){ // Add listener on click
		itemDone(e); // calls itemDone
		}
	);
}