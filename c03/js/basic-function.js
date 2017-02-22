var msg = 'Sign up to receive our newsletter for 10% off!';

function updateMessage(){
	var el = document.getElementById('message');
	el.textContent = msg;
}

/////////Those statements are not run until the function is called. 
//The function is only called on the last line of this script.
updateMessage();