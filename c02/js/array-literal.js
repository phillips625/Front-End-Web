// Create an array and assign it values.
var colors; 
colors = ['white', 'black', 'custom'];

// Show the first item from the array.
var el = document.getElementById('colors');
el.textContent = colors[0];


/*

				OR

var colors
new Array('white', 'black',
'custom ' ) ;
var el =document.getElementByid('colors');
el.innerHTML =colors.item(O);

*/

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 7, but note the security issues on p228-231
el.textContent = colors[0];
*/