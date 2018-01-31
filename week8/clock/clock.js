// Learning Objectives
// Practice using JavaScript Timers
// Practice using internal JavaScript Objects
// Clocks!!!!
// cue Coldplay
// Today you are going to build a clock!

// Start by planning! Draw a clock, break down the problem,

// Step 1
// Define 3 variables and grab the associated element from the DOM:

// minuteHand
// secondHand
// hourHand
// Step 2
// Using setInterval make the second hand make a full rotation in 60 seconds.
// You will have to utilize the css attribute transform - rotate.
// Step 3
// Make the minute hand make a full rotation in 1 hour
// Step 4
// Make the hour hand make a full rotation in 24 hours
// BONUS
// Sync up your clock with the current time.
// Take a look at the JavaScript Date object

var minuteHand = document.querySelector(".minutes");
var secondHand = document.querySelector(".seconds");
var hourHand = document.querySelector(".hours");

var seconds = 0;
var minutes = 0;
var hours = 0;

setInterval(function() {
	seconds += 6;
	secondHand.style.transform = "rotate(" + seconds + "deg)";
	if (seconds % 360 === 0) {
		minutes += 6;
		minuteHand.style.transform = "rotate(" + minutes + "deg)";
	}

	if (seconds % 600 === 0) {
		hours += 3;
		hourHand.style.transform = "rotate(" + hours + "deg)";
	}
}, 1000)


