/* This script displays a greeting to the user based upon the current 
time. It is an example from JavaScript &jQuery book */

// Create a date object
var today = new Date(); 
//Find the current hour
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');