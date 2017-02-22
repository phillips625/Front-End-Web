////// Page 18 of note

// querySelector() only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll returns a nodelist
// The second matching element (the third list item) is selected and changed.
// This is because the original first item with class (hot) has been 
// changed to cool
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';