// Concat Unique Strings
// Solve in JavaScript
// Take 2 strings s1 and s2 each only containing letters from a to z. Return one new sorted string, the longest possible, containing distinct letters - each taken only once - from s1 and s2.

// We recommend using underscore.js to help with solving the problem: http://underscorejs.org/

// Example:
// s1 = "xyaabbbccccdefww"
// s2 = "xxxxyyyyabklmopq"
// longest(s1, s2) -> "abcdefklmopqwxy"
// Extension
// Now solve in Ruby!

var _ = require('underscore')

if (process.argv.length === 4) {
	var s1 = process.argv[2].toLowerCase();
	var s2 = process.argv[3].toLowerCase();
	if (/^[a-z]+$/.test(s1) && /^[a-z]+$/.test(s2)) {
		console.log('s1 = "' + s1 +'"')
		console.log('s2 = "' + s2 +'"')
		var concatStrings = s1 + s2
		var sortedUniq = _.uniq(concatStrings.split('').sort()).join('')
		console.log('longest sorted unqiue string = "' + sortedUniq + '"');
	} else {
		console.log('s1 and s2 both need to be a string of characters from [a-z]');
	}
} else {
	console.log("Can only have 2 arguments");
}
