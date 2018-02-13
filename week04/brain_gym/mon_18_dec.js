// It belongs in a museum!
// You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below) and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:

// var map1 = [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","X","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// // Sample output:

// treasureFinder(map1) // should return [2, 2];
// You can assume that the size of the treasure map will be the same.

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];

var treasureFinder = function(array) {
	for (var x = 0; x < array.length; x++) {
		if (array[x].includes('X')) {
			var xPos = x;
			break;
		}
	}

	var yPos = array[xPos].indexOf('X');

	return [xPos, yPos];
}

console.log(treasureFinder(map1));
console.log(treasureFinder(map2));
console.log(treasureFinder(map3));
console.log(treasureFinder(map4));

// Bonus:
// Modify your function to accept maps of any size, and to accept a second argument for the key to look for. It should also handle non-unique 'key' values gracefully.

// var holyGrailMap = [
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","G","v","S","S"],
// ["v","v","H","v","S","S"],
// ["v","v","V","v","S","S"],
// ["A","V","A","A","A","S"]
// ];

// //sample outputs:

// treasureFinder(holyGrailMap, "G") // should return [4, 2];
// treasureFinder(holyGrailMap, "H") // should return [5, 2];
// treasureFinder(holyGrailMap, "H") // should return [5, 2];

// treasureFinder(holyGrailMap, "V") // should return 'that doesnt belong in a museum!';

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

var holyGrailMap2 = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","G","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];


var newTreasureFinder = function(array, treasure) {
	var treasureCount = 0;
	for (var x = 0; x < array.length; x++) {
		for (var y = 0; y < array[x].length; y++) {
			if (array[x][y] === treasure) {
				var xPos = x;
				var yPos = y;
				treasureCount++;
				if (treasureCount > 1) { break }
			}
		}
	}

	if (treasureCount === 1) {
		return [xPos, yPos]; 
	} else {
		return 'that doesnt belong in a museum!';
	}
}

console.log(newTreasureFinder(holyGrailMap, "G")); // should return [4, 2];
console.log(newTreasureFinder(holyGrailMap, "H")); // should return [5, 2];
console.log(newTreasureFinder(holyGrailMap, "H")); // should return [5, 2];
console.log(newTreasureFinder(holyGrailMap, "V")); // should return 'that doesnt belong in a museum!';
console.log(newTreasureFinder(holyGrailMap2, "G")); // should return [4, 2];

