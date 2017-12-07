// ###The Ultimate Life Decider Never make a decision again!

// ####Part One - The Coin of Inevitability

// Create a file called decider.js
// Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.
// #####Part Two - The Coin App

// Create a file called decider.html
// Find any coin image online
// Link the .js file, while you're there you may also decide to add a .css file for some styling
// Now add the necessary components to the decider.html file so that when the coin image is clicked the coinFlip function result and tally are returned somewhere on the page.

var headsCount = 0;
var tailsCount = 0;
var winner = '';
var coinImage = document.querySelector('.coin_container img');
var headsScore = document.querySelector('.heads_score');
var tailsScore = document.querySelector('.tails_score');
var resetButton = document.querySelector('.reset_container button')
var result = document.querySelector('.result');

coinImage.addEventListener('click', clickCoin);
resetButton.addEventListener('click', resetScores);

var coinFlip = function() {
	var num = Math.random();
	var outcome;
	num >= 0.5 ? outcome = 'heads' : outcome = 'tails';
	return outcome;
}

function clickCoin() {
	console.log('coin clicked');
	var flip = coinFlip();
	if (flip === 'heads') { 
		headsCount++;
		headsScore.innerHTML = String(headsCount);
	}

	if (flip === 'tails') {
		tailsCount++;
		tailsScore.innerHTML = String(tailsCount);
	}

	if (tailsCount === 5) {
		result.innerHTML = 'WINNER WINNER CHICKEN DINNER! TAILS WINS';
		coinImage.removeEventListener('click', clickCoin);
	}

	if (headsCount === 5) {
		result.innerHTML = 'WINNER WINNER CHICKEN DINNER! HEADS WINS';
		coinImage.removeEventListener('click', clickCoin);
	}
}

function resetScores() {
	headsCount = 0;
	tailsCount = 0;
	winner = '';
	headsScore.innerHTML = '0';
	tailsScore.innerHTML = '0';
	result.innerHTML = '';
	coinImage.addEventListener('click', clickCoin);
}

