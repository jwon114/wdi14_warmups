// Roman Numerals
// The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

// The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// Write a function to convert from normal numbers to Roman Numerals: e.g.

//  1  => I
// 10  => X
//  7  => VII
// There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

// Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

// To see this in practice, consider the example of 1990.

// In Roman numerals 1990 is MCMXC:

// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII

// See also: http://www.novaroma.org/via_romana/numbers.html

function convertToRoman(number) {

	ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
	tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
	hundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
	thousands = ['M', 'MM', 'MMM']

	number.split('')

	// var roman_numerals = {
	// 	1: "I",
	// 	2: "II",
	// 	3: "III",
	// 	4: "IV",
	// 	5: "V",
	// 	6: "VI",
	// 	7: "VII",
	// 	8: "VIII",
	// 	9: "IX",
	// 	10: "X",
	// 	50: "L",
	// 	100: "C",
	// 	500: "D",
	// 	1000: "M"
	// }

	// if (number in roman_numerals) { return roman_numerals[number] }

	// var output = '';
	// var roman;
	// var dividedNumber;
	// var floatingNumber;
	// var num = number;
	// do {
	// 	switch(true) {
	// 		case (num > 0 && num < 10):
	// 			output += roman_numerals[num];
	// 			num = 1;
	// 			break;
	// 		case (num > 10 && num < 50):
	// 			dividedNumber = Number((num / 10).toString().split('.')[0]);
				

	// 			for (var i = 1; i <= dividedNumber; i++) {
	// 				output += roman_numerals[10];
	// 			}

	// 			num = Number((num / 10).toString().split('.')[1]);
	// 			break;
	// 		case (num > 50 && num < 100):
	// 			dividedNumber = Number((num / 50).toString().split('.')[0]);
		
	// 			for (var i = 1; i <= dividedNumber; i++) {
	// 				output += roman_numerals[50];
	// 			}

	// 			num = Number((num / 10).toString().split('.')[1]);
	// 		case (num > 100 && num < 500):
	// 			dividedNumber = Number((num / 100).toString().split('.')[0]);
		
	// 			for (var i = 1; i <= dividedNumber; i++) {
	// 				output += roman_numerals[50];
	// 			}

	// 			num = Number((num / 10).toString().split('.')[1]);
	// 		default:
	// 	}
	// } while (num !== 1)

	// return output
}

// console.log(convertToRoman(1));
console.log(convertToRoman(25));
console.log(convertToRoman(24));
console.log(convertToRoman(55));
console.log(convertToRoman(19));
console.log(convertToRoman(29));



