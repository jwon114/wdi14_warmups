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

console.log(output)