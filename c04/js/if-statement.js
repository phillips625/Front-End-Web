var score = 75; //Score
var msg; 		//Message

// If score is 50 or higher
if (score >= 50) {

	msg = 'Congrats!';
	msg += ' Proceed to the next round.';
}

var el = document.getElementById('answer');
el.textContent = msg; 