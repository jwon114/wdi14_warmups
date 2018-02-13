// Finish Him!
// In JavaScript, write a function 'spiner' that takes a string as an argument and returns the string as all lowercase words joined by dashes. Your function should account for upper/lower case inputs, as well as sentences not seperated by spaces.

// spiner("All Lowercase Words Joined By Dashes") --> // "all-lowercase-words-joined-by-dashes"

// spiner("The_Andy_Griffith_Show") --> // "the-andy-griffith-show"

function spiner(sentence) {
	if (typeof sentence !== 'string') { return "Not a string!" }
	return sentence.toLowerCase().replace(/( )|_|([^A-Za-z])/g, '-')
}

console.log(spiner("All Lowercase Words Joined By Dashes"));
console.log(spiner("The_Andy_Griffith_Show"));
console.log(spiner("There&Are&No&Spaces&Here"));
console.log(spiner(123));