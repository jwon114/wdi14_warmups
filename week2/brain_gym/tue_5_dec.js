// Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.

// If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"

// If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"

// The year will be a random year between 1930 and 1950.

// If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."

// bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.

// sample output of grandpaTalk:

// // NO, NOT SINCE incorrect year // whats that sunny

var grannyTalk = function(question) {
	var capsTest = /\w[A-Z]+/;
	// var firstLetterCaps = /[A-Z][a-z]+/;
	// var lowerCase = /[a-z]+/;
	//  1930 and 1950
	var randomYear = Math.floor((Math.random() * 20)) + 1930; 
	// console.log(question);
	// console.log(randomYear);
	// console.log(capsTest.test(question));
	var response;
	if (question === 'BYE') {
		response = "What's that honey, I didn't hear you..";
	} else if (capsTest.test(question)) {
		response = 'NO, NOT SINCE ' + randomYear;
	} else {
		response = 'SPEAK UP SONNY JIM';
	}
	return response;
}

console.log('GRANDMA SAYS', grannyTalk('HI GRANDMA'));
console.log('GRANDMA SAYS', grannyTalk('BYE'));
console.log('GRANDMA SAYS', grannyTalk('Hello Grandma'));

var grandpaTalk = function(grandpaQuestion) {
	var vowelsArr = ['a','e','i','o','u'];
	//var vowelsIndexes = [];
	var grandmaResponseArr = [];
	//var letterArr = [];

	var grandmaResponse = grannyTalk(grandpaQuestion);
	grandmaResponseArr = grandmaResponse.toLowerCase().split('');

	// Loop through each letter in grandma's response and check if it exists
	for (var letter = 0; letter < grandmaResponseArr.length; letter++) {
		for (var vowel = 0; vowel < vowelsArr.length; vowel++) {
			if (grandmaResponseArr[letter] === vowelsArr[vowel]) {
				var randomVowel = vowelsArr[Math.floor((Math.random() * 5))];
				grandmaResponseArr[letter] = randomVowel;
			}
		}
	}

	// for (var letter = 0; letter < vowelsArr.length; letter++) {
	// 	for (grandmaLetter = 0; grandmaLetter < grandmaResponseArr.length; grandmaLetter++) {			
	// 		if (vowelsArr[letter] === grandmaResponseArr[grandmaLetter]) {
	// 			letterArr.push(grandmaResponseArr[grandmaLetter]);
	// 			vowelsIndexes.push(grandmaLetter);
	// 		}
	// 	}
	// }
	
	//console.log('letterArr', letterArr);

	//if (letterArr.length !== 0) {
		//letterArr.foreach()
		// var scrambledLettersArr = [];
		// var newLetterArr = letterArr.slice();
		// while (letterArr.length > 0) {
		// 	var random = Math.floor((Math.random() * letterArr.length));
		// 	scrambledLettersArr.push(letterArr[random]);
		// 	letterArr.splice(random,1);
		// }

		// console.log('grandmaResponseArr', grandmaResponseArr);
		// console.log('vowelsIndexes', vowelsIndexes);
		// console.log('scrambledLettersArr', scrambledLettersArr);

		// var count = 0;
		// for (var vowelIndex = 0; vowelIndex < vowelsIndexes.length; vowelIndex++) {
		// 	grandmaResponseArr[vowelsIndexes[vowelIndex]] = scrambledLettersArr[count];
		// 	count++;
		// }
		// console.log(grandmaResponseArr.join(''));
	//}
	return grandmaResponseArr.join('');
}

console.log('GRANDPA SAYS', grandpaTalk('HI GRANDMA'));
console.log('GRANDPA SAYS', grandpaTalk('BYE'));
console.log('GRANDPA SAYS', grandpaTalk('Hello Grandma'));

