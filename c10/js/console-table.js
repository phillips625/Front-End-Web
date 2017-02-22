var contacts = { // Store contact info in an object literal

  "London": {
    "Tel": "+44 (0)207 946 0128",
    "Country": "UK"},
  "Sydney": {
    "Tel": "+61 (0)2 7010 1212",
    "Country": "Australia"},
  "New York": {
    "Tel": "+1 (0)1 555 2104",
    "Country": "USA"}
};

/*

In browsers that support it, the console. table () method lets you output a table showing:
* objects
* arrays that contain other objects or arrays


The example below shows data from the contacts object. It displays the city, telephone number, and country. It is particularly helpful when the data is coming from a third party.
The screen shot below shows the result in Chrome (it looks the same in Opera). Safari will show expanding panels. At the time
of writing Firefox and IE did not support this method.


*/
console.table(contacts); // Write data content to console

var city, contactDetails; // Declare variables
contactDetails = ''; // Will hold details written to page

$.each(contacts, function (city, contacts) {
	
	contactDetails += city + ': ' + contacts.Tel + '<br />';
});

$('h2').after('<p>' + contactDetails + '</p>');