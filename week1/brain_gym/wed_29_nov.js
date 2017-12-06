// Check for Palindromes

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Some Palindromes to test against (http://www.palindromelist.net/)

// Good Luck!

var word = prompt("Enter a word to check if its a palindrome");
var checkWord = isPalindrome(word);

if (!checkWord) {
	console.log("Word '" + word + "' is not a palindrome");
} else {
	console.log("Word '" + word + "' is a palindrome");
}

function isPalindrome(word) {
	word = word.replace(/ /g, '').replace(/[^a-zA-Z]/g, '').toLowerCase();

	if (word){
		var reverse = word.split('').reverse().join('');
		if (word === reverse) {
			return true;
		} else {
			return false;
		}
	} else {
		alert("You didn't enter a word!");
	}
}
