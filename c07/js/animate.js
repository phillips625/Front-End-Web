$(function () {

/*
All list items are selected and,
when a user clicks on one of them, an anonymous function runs. Inside it, $(this) creates a new jQuery object holding the element the user clicked on. The .animate() method is then called on that jQuery object.
*/	
	$('li').on('click', function () {

/*
. Inside the .animate() method, the opacity and
paddi ngleft are changed.
The value of the paddi ngleft property is increased by 80 pixels, which makes it look like the text is sliding to the right as it fades out.
*/		
		$(this).animate({

			opacity: 0.0,
			paddingLeft: '+=80'
		}, 
/*
 The . animate() method has two more parameters. The first is the speed of the animation
in milliseconds (in this case, 500ms). The second is another anonymous function indicating what should happen when the animation finishes.
*/
		500, function () {
/*
When the animation has finished, the callback function removes that list item from the page using the . remove() method.
*/			
			$(this).remove();
		});
	});
});