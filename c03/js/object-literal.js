/////Object literal

var hotel = {
	name: 'Quay',
	rooms: 40,
	booked: 25,

	checkAvailability: function(){
		return this.rooms - this.booked;
	}
};

/////Global initialization: Everthing here is displayed on the webpage
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();