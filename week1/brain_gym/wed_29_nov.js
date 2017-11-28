var word = prompt("Enter a word to check if its a palindrome");
var checkWord = isPalindrome(word);

if (!checkWord) {
	console.log("Word '" + word + "' is not a palindrome");
} else {
	console.log("Word '" + word + "' is a palindrome");
}

function isPalindrome(word) {
	word = word.replace(/ /g, '').replace(/[^a-zA-Z]/g, '').toLowerCase();
	var palindrome = true;
	var i = 0;

	if (word){
		for (var j = word.length - 1; j >= 0; j--) {
			if (word[i] !== word[j]) {
				palindrome = false;
				break;
			}

			if (i >= j) {
				break;
			} else {
				i++;
			}
		}
		return palindrome;
	} else {
		alert("You didn't enter a word!");
	}
}
