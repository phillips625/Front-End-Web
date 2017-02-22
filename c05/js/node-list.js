//// Store nodelist in array
var hotItems = document.querySelectorAll('li.hot');

/// If it contains an item
if (hotItems.length > 0) {

/// Loop through each item
	for(var i = 0; i < hotItems.length; i++) {

/// Change value in class attribute
		hotItems[i].className = 'cool';
	}
}