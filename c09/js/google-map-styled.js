var venueMap;
function init() {

  var pinLocation = new google.maps.LatLng(40.782710,-73.965310);

  var mapOptions = {
    zoom: 15,
    center: pinLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },

    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },

    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false,

    styles: [
      {
        stylers: [ // stylers property holds array of objects
          { hue: "#00ff6f" }, // Overall map colors
          { saturation: -50 } // Overall map saturation
        ]
      }, {
        featureType: "road", // Road features
        elementType: "geometry", // Their geometry {lines)
        stylers: [
          { lightness: 100 }, //  Lightness of roads
          { visibility: "simplified" } // Level of road detail
        ]
      }, {
        featureType: "transit", // Public transport features
        elementType: "geometry", // Their geometry (lines)
        stylers: [
          { hue: "#ff6600" }, // Color of public transport
          { saturation: +80 } // Saturation of public transport
        ]
      }, {
        featureType: "transit", // Public transport features
        elementType: "labels", // Their labels
        stylers: [
          { hue: "#ff0066" }, // Label color
          { saturation: +80 } // Label saturation
        ]
      }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }, {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { hue: "#c4f4f4" }
        ]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]
};

// Create a Latlng object to store the position of the marker using object constructor syntax. Below that object is called pi nlocation.
  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

// The Marker() constructor creates a marker object. It has one parameter: an object that contains settings using object literal notation.
  var startPosition = new google.maps.Marker({    // Create a new marker

// position is the object storing the location of the marker (pinlocation).
    position: pinLocation,                        // Set its position
// map is the map that the marker should be added to (because a page can have more than one map).
    map: venueMap,                                // Specify the map
// icon is the path to the image that should be displayed as the marker on the map (this should be provided relative to the HTML page).
    icon: "img/go.png"                            // Path to image from HTML
  });

}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;