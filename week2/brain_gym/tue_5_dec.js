var grannyTalk = function(question) {
	var capsTest = /\w[A-Z]+/;
	// var firstLetterCaps = /[A-Z][a-z]+/;
	// var lowerCase = /[a-z]+/;
	//  1930 and 1950
	var randomYear = Math.floor((Math.random() * 20)) + 1930; 
	console.log(question);
	console.log(randomYear);
	console.log(capsTest.test(question));
	var response;
	if (question === 'BYE') {
		response = "What's that honey, I didn't hear you..";
		console.log(response);
	} else if (capsTest.test(question)) {
		response = 'NO, NOT SINCE ' + randomYear;
		console.log(response);
	} else {
		response = 'SPEAK UP SONNY JIM';
		console.log(response);
	}
	return response;
}

grannyTalk('HI GRANDMA');
grannyTalk('BYE');
grannyTalk('Hello Grandma');

var grandpaTalk = function() {
	var vowelsArr = ['a','e','i','o','u'];
	var vowelsIndexes = [];
	var grandmaResponseArr = [];
	var letterArr = [];

	var grandmaResponse1 = grannyTalk('HI GRANDMA');
	grandmaResponseArr = grandmaResponse1.toLowerCase().split('');

	for (var letter = 0; letter < vowelsArr.length; letter++) {
		for (grandmaLetter = 0; grandmaLetter < grandmaResponseArr.length; grandmaLetter++) {			
			if (vowelsArr[letter] === grandmaResponseArr[grandmaLetter]) {
				letterArr.push(grandmaResponseArr[grandmaLetter]);
				vowelsIndexes.push(grandmaLetter);
			}
		}
	}

	console.log('letterArr', letterArr);

	if (letterArr.length !== 0) {
		var scrambledLettersArr = [];
		var newLetterArr = letterArr.slice();
		while (letterArr.length > 0) {
			var random = Math.floor((Math.random() * letterArr.length));
			scrambledLettersArr.push(letterArr[random]);
			letterArr.splice(random,1);
		}
	}

	console.log('grandmaResponseArr', grandmaResponseArr);
	console.log('vowelsIndexes', vowelsIndexes);
	console.log('scrambledLettersArr', scrambledLettersArr);

	var count = 0;
	for (var vowelIndex = 0; vowelIndex < vowelsIndexes.length; vowelIndex++) {
		grandmaResponseArr[vowelsIndexes[vowelIndex]] = scrambledLettersArr[count];
		count++;
	}
	console.log(grandmaResponseArr.join(''));
}

grandpaTalk();