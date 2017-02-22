/*

If you try to use a string in a mathematical operation (other than in addition), you do not get an error, you get a special value called NaN (not a number).
In this example, a try block attempts to calculate the area of a rectangle. If it is given numbers to work with. the code will run.
If it does not get numbers, a custom error is thrown and the catch block displays the error.
By checking that the results
are numeric, the script can fail
at a specific point and you can provide a detailed error about what caused the problem (rather than letting it cause a problem later in the script).

There are two different errors shown: one in the browser window for the users and another in the console for the developers.
This not only catches an error that would not have been thrown otherwise, but it also provides a more descriptive explanation of what caused the error.
Ideally, form validation, which you learn about in Chapter 13, would solve this kind of issue. It is more likely to occur when data comes from a thi rd party.

*/

var width = 12;   // width variable
var height = 'test'; // height variable

function calculateArea (width, height) {
	
	try {
		var area = width * height; // Try to calculate area
		if (!isNaN(area)) { // If it is a number
			return area; // Return the area
		}
		else {  // Otherwise throw an error
			throw new Error('calculateArea() received invalid number');
		}
	}

	catch(e) { // If there was an error

		console.log(e.name + ' ' + e.message); // Show error in console
		return 'We were unable to calculate the area.'; // Show users a message
	}
}

// TRY TO SHOW THE AREA ON THE PAGE
document.getElementById('area').innerHTML = calculateArea(width, height);