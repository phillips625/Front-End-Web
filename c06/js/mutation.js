var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list'); //Get list
addLink = document.querySelector('a'); //Get add item button
counter = document.getElementById('counter'); //Get item counter

function addItem (e) {
	
	e.preventDefault(); // Prevent link action
	newEl = document.createElement('li'); // New <li> element
	newText = document.createTextNode('New list item'); // New text node
	newEl.appendChild(newText); // Add text to <li>
	elList.appendChild(newEl); // Add <li> to list
}

function updateCount () {
	
	listItems = elList.getElementsByTagName('li').length; // Get total of <li>s
	counter.innerHTML = listItems; // Update counter
}

addLink.addEventListener('click', addItem, false); // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); //DOM updated