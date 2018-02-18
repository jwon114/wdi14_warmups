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

	var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
	var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
	var hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
	var thousands = ['', 'M', 'MM', 'MMM']

	var number_arr = number.toString().split('');
	var romanNumerals = '';
	while (number_arr.length > 0) {
		digit = number_arr[0];
		switch(number_arr.length) {
			case 4:
				romanNumerals += (thousands[digit]);
				break;
			case 3:
				romanNumerals += (hundreds[digit]);
				break;
			case 2:
				romanNumerals += (tens[digit]);
				break;
			case 1:
				romanNumerals += (ones[digit]);
				break;
			default:
				break;
		}
		number_arr.shift();
	}

	return romanNumerals
}

console.log(convertToRoman(1));
console.log(convertToRoman(25));
console.log(convertToRoman(24));
console.log(convertToRoman(55));
console.log(convertToRoman(19));
console.log(convertToRoman(29));
console.log(convertToRoman(3000));



