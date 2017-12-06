// ###Mini Golf Scores

// ####Exercise Bob, Jimbo and Fish love mini golf. But, like all good golfers they enjoy the 19th hole the most. Every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and 'console.logs' the total for the club house.

// #####Bob

// Hole 1 = 3
// Hole 2 = 2
// Hole 3 = 6
// Hole 4 = 11
// Hole 5 = 9
// Hole 6 = 2
// Hole 7 = 6
// Hole 8 = 9
// Hole 9 = 10
// #####Jimbo

// Hole 1 = 5
// Hole 2 = 12
// Hole 3 = 9
// Hole 4 = 22
// Hole 5 = 13
// Hole 6 = 7
// Hole 7 = 16
// Hole 8 = 10
// Hole 9 = 11
// #####Fish

// Hole 1 = 2
// Hole 2 = 2
// Hole 3 = 4
// Hole 4 = 5
// Hole 5 = 4
// Hole 6 = 3
// Hole 7 = 6
// Hole 8 = 4
// Hole 9 = 1
// ####Extension Now work out each golfers round compared to the course par.

// #####Par

// Hole 1 = 3
// Hole 2 = 4
// Hole 3 = 5
// Hole 4 = 5
// Hole 5 = 3
// Hole 6 = 3
// Hole 7 = 4
// Hole 8 = 3
// Hole 9 = 5
// ####Ninja Extension Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.

var bob = [3,2,6,11,9,2,6,9,10]; //58
var jimbo = [5,12,9,22,13,7,16,10,11]; //105
var fish = [2,2,4,5,4,3,6,4,1]; //31
var par = [3,4,5,5,3,3,4,3,5]; //35

var totalScores = function(scoresArr) {
	var total = scoresArr.reduce((accumulator, currentValue) => accumulator + currentValue);
	return total;
}

console.log("bob's total", totalScores(bob));
console.log("jimbo's total", totalScores(jimbo));
console.log("fish's total", totalScores(fish));
console.log("par", totalScores(par));

// EXTENSION1

var bobVsPar = totalScores(bob) - totalScores(par)
console.log('Bob vs Par', bobVsPar);

var jimboVsPar = totalScores(jimbo) - totalScores(par)
console.log('Jimbo vs Par', jimboVsPar);

var fishVsPar = totalScores(fish) - totalScores(par)
console.log('Fish vs Par', fishVsPar);

// EXTENSION2

var puntPerStroke = function(parrArr, arr) {
	if (parrArr.length === arr.length) {
		var punt = 0;
		for (var arrCount = 0; arrCount < parrArr.length; arrCount++) {
			var strokes = arr[arrCount] - parrArr[arrCount];
			if (strokes > 0) { punt += strokes };
		}
	} else {
		return 'Not the same number of holes played';
	}
	return '$' + punt;
}

// bob vs par = $26
// jimbo vs par = $70

console.log('Bob vs Par Punt winning', puntPerStroke(par, bob));
console.log('Jimbo vs Par Punt winnings', puntPerStroke(par, jimbo));
















