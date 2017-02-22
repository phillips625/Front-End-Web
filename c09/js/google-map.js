/*
i nit() loads themap into the HTML page. First it c r e a t e s a ma p Op t i o n s o b j e c t w i t h t h r e e p r o p e r t i e s .
*/
function init () {
	
	var mapOptions = { // Set up the map options

		center: new google.maps.LatLng(40.782710,-73.965310),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 13
	};

/*
Then it uses the Map() constructor to create
a map and draw the map into the page. The constructor takes two parameters:
• The element that the map will appear inside
• The mapOptions object
*/
	var venueMap; // Map() draws a map
	venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// l o a d S c r i p t ( ) c r e a t e s a < s c r i p t > e l e m e n t t o l o a d theGoogleMaps API.Whenithasloaded,itcalls
// i nit(), to initialize the map.
function loadScript () {
	
	var script = document.createElement('script');  // Create <script> element
	script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
	document.body.appendChild(script); // Add element to page
}

//Starting at the bottom of the script, when the
//page has loaded, the onload event will call the
//loadScri pt () function.
window.onload = loadScript; // on load call loadScript()