function init () {
	
	  // The mapOptions object contains the information to initialise the map to how we want it.
	var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.782710,-73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,

// To show or hide a control, the key is the name of the control, and the value is a Boolean (true will show the control; fa1se will hide it).

    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
 // You can change the appearance of the zoom and map type controls using the following options:
// zoomControlStyle
      style: google.maps.ZoomControlStyle.SMALL,

 //Each control has its own options object used to control its style and position. The word Options follows the control name, e.g., zoomControlOptions. Styles are discussed below. The diagram on the left- hand page shows options for the position property.
      position: google.maps.ControlPosition.TOP_RIGHT
    },

// To show or hide a control, the key is the name of the control, and the value is a Boolean (true will show the control; fa1se will hide it).

    mapTypeControl: true,
    mapTypeControlOptions: {
// You can change the appearance of the zoom and map type controls using the following options:
// zoomControlStyle
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    scaleControl: true,
    scaleControlOptions: {
 //Each control has its own options object used to control its style and position. The word Options follows the control name, e.g., zoomControlOptions. Styles are discussed below. The diagram on the left- hand page shows options for the position property.
      position: google.maps.ControlPosition.TOP_CENTER
    },

 // To show or hide a control, the key is the name of the control, and the value is a Boolean (true will show the control; fa1se will hide it).

    streetViewControl: false,
    overviewMapControl: false
  };
  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;