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
var coinImage = document.querySelector('#coin_container');
var headsScore = document.querySelector('.heads_score');
var tailsScore = document.querySelector('.tails_score');
var resetButton = document.querySelector('.reset_container button')
var result = document.querySelector('.result');
var outcome;

coinImage.addEventListener('click', actionCoin);
resetButton.addEventListener('click', resetScores);

function coinFlip() {
	var num = Math.random();
	// remove the class list to reset the coin back to heads facing
	coinImage.classList = '';
	// removing and adding the same class doesn't trigger the css animating because its too quick(?) need timeout
	setTimeout(function() {
		if (num >= 0.5) {
			coinImage.classList.add('flipHeads');
			outcome = 'heads';
		} else {
			coinImage.classList.add('flipTails');
			outcome = 'tails';
		}
		// remove event listener to prevent coin clicks while spinning
		coinImage.removeEventListener('click', actionCoin);
	}, 1)
	
	// set timeout to 3 seconds because its the duration of the css flip animation
	setTimeout(function() {
		checkResult();
		if (headsCount !== 5 && tailsCount !== 5) {
			coinImage.addEventListener('click', actionCoin);
		}
	}, 3000)

}

function actionCoin() {
	coinFlip();
}

function checkResult() {
	
	if (outcome === 'heads') { 
		headsCount++;
		headsScore.textContent = String(headsCount);
	}

	if (outcome === 'tails') {
		tailsCount++;
		tailsScore.textContent = String(tailsCount);
	}

	if (tailsCount === 5) {
		result.textContent = 'WINNER WINNER CHICKEN DINNER! TAILS WINS';
		coinImage.removeEventListener('click', actionCoin);
	}

	if (headsCount === 5) {
		result.textContent = 'WINNER WINNER CHICKEN DINNER! HEADS WINS';
		coinImage.removeEventListener('click', actionCoin);
	}
}

function resetScores() {
	headsCount = 0;
	tailsCount = 0;
	winner = '';
	headsScore.textContent = '0';
	tailsScore.textContent = '0';
	result.textContent = '';
	coinImage.addEventListener('click', actionCoin);
}

