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
var coinImage = document.querySelector('.coin_wrapper');
var headsScore = document.querySelector('.heads_score');
var tailsScore = document.querySelector('.tails_score');
var resetButton = document.querySelector('.reset_container button')
var result = document.querySelector('.result');
var outcome;

coinImage.addEventListener('click', actionCoin);
resetButton.addEventListener('click', resetScores);

var coinFlip = function(callback) {
	coinImage.classList.add('flip');
	coinImage.removeEventListener('click', actionCoin);
	setTimeout(function() {
		var num = Math.random();
		if (num >= 0.5) {
			outcome = 'heads';
		} else {
			outcome = 'tails';
		}
		if (callback) {
			callback();
		}
		coinImage.classList.remove('flip');
		if (headsCount !== 5 && tailsCount !== 5) {
			coinImage.addEventListener('click', actionCoin);
		}
	}, 2500)
}

function actionCoin() {
	coinFlip(checkResult)
}

function checkResult() {
	console.log('coin clicked');
	console.log('outcome', outcome);
	
	if (outcome === 'heads') { 
		headsCount++;
		headsScore.textContent = String(headsCount);
		coinImage.innerHTML = '<img src="nz_dollar_heads.png" alt="">';
	}

	if (outcome === 'tails') {
		tailsCount++;
		tailsScore.textContent = String(tailsCount);
		coinImage.innerHTML = '<img src="lotr_coin.png" alt="">';
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

