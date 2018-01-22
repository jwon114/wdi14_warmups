// # Ruby Squares

// # A perfect square is defined as a whole number that when square rooted is a whole number (such as 1, 4, 9, 16, etc.).

// # Make a new file called get_squares.rb.

// # Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

// # NOTE: The returned array of perfect squares should be in ascending order with no duplicates.

// # get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]
// # Done?
// # Solve it with a JavaScript function!

// # Store your solution in a new file called getSquares.js and run it in the console.

// # HINT: Sorting an array of numbers with .sort in JS would produce the following...

// # getSquares([4, 1, 16, 1, 10, 35, 22]); // => [ 1, 16, 4 ]
// # What's that all about?!?!?!

function getSquare(array) {

	var output = array.filter((element, index, array) => {
		return (Math.sqrt(element) % 1 === 0) && (index === array.indexOf(element))
	}).sort((a,b) => a - b)

	return output;
}

console.log(getSquare([4, 1, 16, 1, 10, 35, 22]));


