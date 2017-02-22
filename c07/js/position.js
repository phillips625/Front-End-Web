$(function () {
	
// Cache the window and advert.
	var $window = $(window);
	var $slideAd = $('#slideAd');
//  The height of the end zone is calculated, and stored in a variable called endZone.
/*
CALCULATING THE END ZONE
Calculate the height at which the box should come into view by:
a) Getting the height from the top of the page to the top of the footer (the gray bar) in pixels.
b) Subtracting the height of the viewport from this result.
c) Subtracting a further SOOpx for the area where the box will come into view (shown in pink).
You can tell how far the user has scrolled down the page using:
$(window) . scrol 1Top();
If the distance extends down further than the height at which the end zone should show, the box should be made visible.
If not, then the box should move off the page.
*/
	var endZone = $('#footer').offset().top - $window.height() - 500;

//  The scro11 event triggers an anonymous function every time the user scrolls up or down.
	$window.on('scroll', function () {

//A conditional statement checks if the user's position is further from the top of the page than the start of the end zone.		
		if (endZone < $window.scrollTop()) {
// It the condition returns true, the box slides in from the right- hand edge of the page. This takes 250 milliseconds.
			$slideAd.animate({'right': '0px'}, 250);
		}
// If the condition is false or the box is in the middle of animating, it is stopped using the •stop () method. The advert then slides off the right-hand edge of the page. Again, this animation will take 250 milliseconds.
		else{
			$slideAd.stop(true).animate({'right': '-360px'}, 250);
		}
	});
});