$(function () {
	// This line selects any list items that contain the word pine. It then changes the text of the matchingelementtoa1mends using the •text() method. When specifying new content, carefully choose w hen to use single quotes and when to use double quotes. If you append a new element that has·attributes, use single quotes to surround the content. Then use double quotes for the attribute values themselves.
	$('li:contains("pine")').text('almonds');
  //These lines select all list items whose cl ass attribute contains the word hot, and uses the •htm1() methodtoupdatethe content of each of them. The .html ( ) method uses a function to place the content of each element inside an <em> element. (See the bottom of the left-hand page for a closer look at the syntax.)
	$('li.hot').html(function () {
		return '<em>'+ $(this).text() +'</em>';
	});
  
  // This line selects the <l i > element that has an i d attribute w hose value is one, then uses the remove() method to remove it. (This does not require a parameter.)
	$('li#one').remove();
});