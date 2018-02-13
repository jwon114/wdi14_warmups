// Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #
// bonus When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable 'symbol' that generates the board using the specified character instead.

var grid = [];
var height = 10;
var width = 10;

for (var i = 1; i < height * 2; i++) {
	var row = [];
	if (i % 2 !== 0) {
		for (var j = 1; j < width * 2; j++) {
			j % 2 !== 0 ? row.push('#') : row.push(' ');
		}
	} else {
		for (var j = 1; j < width * 2; j++) {
			j % 2 !== 0 ? row.push(' ') : row.push('#');
		}
	}
	grid.push(row);
};

console.log(grid);

var output = '';
for (var point = 0; point < grid.length; point++) {
	output += grid[point].join('') + '\n';
}

console.log('ARRAY GRID');
console.log(output)

// ALTERNATE WITHOUT ARRAY

var grid = '';
for (var row = 0; row < height * 2; row++) {
	var rowString = '';
	for (var col = 0; col < width * 2; col++) {
		if (row % 2 === 0) {
			col % 2 === 0 ? rowString += ' ' : rowString += '#';
		} else {
			col % 2 === 0 ? rowString += '#' : rowString += ' ';
		}
	}
	grid += rowString + '\n';
}

console.log('NO ARRAY GRID');
console.log(grid);

