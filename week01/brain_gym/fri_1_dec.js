// 1. Print out all the leap years in the last 100 years.

var date = new Date();
var currentYear = date.getFullYear();
var firstYear = currentYear - 100;
var leapYears = [];

for (var year = firstYear; year <= currentYear; year++) {
	if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 ===0)) {
		leapYears.push(year);
	}
}

console.log(leapYears);


// 2. For numbers between 0 and 200:
// 	a) print out multiples of 7.
// 	b) print out every second odd number.
// 	c) print out all prime numbers.

var multiplesOfSeven = []
for (var i = 0; i <= 200; i = i + 7) {
	multiplesOfSeven.push(i);
};

console.log(multiplesOfSeven);

var everySecondOddNum = [];
for (var i = 1; i <= 200; i+=4) {
	everySecondOddNum.push(i);
};

console.log(everySecondOddNum);


var primeNum = [];
for (var i = 0; i <= 200; i++) {
	var prime = true;
	if (i === 0 || i === 1) { prime = false }
	for (var num = 2; num < i; num++) {
		if (i % num === 0) {
			prime = false;
			break;
		}
	}
	if (prime) { primeNum.push(i) }
};

console.log(primeNum);