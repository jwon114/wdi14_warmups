// # Quiz Letter blocks
// # Language: Javascript or Ruby
// # You are given a collection of ABC blocks. Just like the ones you had when you were a kid. There are twenty blocks with two letters on each block. You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:

// # [['B','O'],
// # ['X','K'],
// # ['D','Q'],
// # ['C','P'],
// # ['N','A'],
// # ['G','T'],
// # ['R','E'],
// # ['T','G'],
// # ['Q','D'],
// # ['F','S'],
// # ['J','W'],
// # ['H','U'],
// # ['V','I'],
// # ['A','N'],
// # ['E','R'],
// # ['F','S'],
// # ['L','Y'],
// # ['P','C'],
// # ['Z','M'],]
// # If you test these words, these results will happen:

// # can_make_word("A")
// # # => true
// # can_make_word("BARK")
// # # => true
// # can_make_word("BOOK")
// # # => false
// # can_make_word("TREAT")
// # # => true
// # can_make_word("COMMON")
// # # => false
// # can_make_word("SQUAD")
// # # => true
// # can_make_word("CONFUSE")
// # # => true
// # can_make_word("BOUGHT")
// # # => false
// # Write a program that evaluates can_make_word

can_make_word = function(word) {

	var blocks = [['B','O'],
	['X','K'],
	['D','Q'],
	['C','P'],
	['N','A'],
	['G','T'],
	['R','E'],
	['T','G'],
	['Q','D'],
	['F','S'],
	['J','W'],
	['H','U'],
	['V','I'],
	['A','N'],
	['E','R'],
	['F','S'],
	['L','Y'],
	['P','C'],
	['Z','M'],]

	result_block = [];

	var word = word.toUpperCase().split('')
	for (var letterIndex = 0; letterIndex < word.length; letterIndex++) {
		for (var blockIndex = 0; blockIndex < blocks.length; blockIndex++) {
			if (blocks[blockIndex].includes(word[letterIndex])) {
				result_block.push(blocks[blockIndex]);
				blocks.splice(blockIndex, 1);
				break;
			}
		}
	}

	if (result_block.length === word.length) {
		return true;
	} else {
		return false;
	}
}

console.log(can_make_word("BARK"));
//=> true
console.log(can_make_word("BOOK"));
//=> false
console.log(can_make_word("TREAT"));
//=> true
console.log(can_make_word("COMMON"));
//=> false
console.log(can_make_word("SQUAD"));
//=> true
console.log(can_make_word("CONFUSE"));
//=> true
console.log(can_make_word("BOUGHT"));
//=> false





