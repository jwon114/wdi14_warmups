// You are a villain trying to trap an adventuring archaeologist. 
// Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. 
// It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.

// Bonus 1

// Modify your function to take a third key argument and generate maps with a single key character inserted randomly.

// Bonus 2

// Modify your function to generate maps with 'regions' that you can control. The regions you should support are below:

// F: generate a forest W: generate a body of water D: generate a desert region

// The argument after the region should be the size of that region. For example, region size 2 would make a 2x2 region within your map (placed randomly) 
// in which one of the tiles is the treasure marker, X. Inspect the sample output below. The Region size argument should not be allowed to be bigger than the map itself.

var makeFakeMap = function(x, y, regionType, regionSize, treasureMark) {
	if ((regionSize <= x) && (regionSize <= y)) {
		// build the map of 'A'
		var outputMap = [];
		for (var yPos = 0; yPos < y; yPos++) {
			var rowArr = [];
			for (var xPos = 0; xPos < x; xPos++) {
				rowArr.push('A')
			}
			outputMap.push(rowArr)
		}
		
		// randomise starting position of treasure area
		var startXPos = Math.floor(Math.random() * (x - regionSize + 1));
		var startYPos = Math.floor(Math.random() * (y - regionSize + 1));

		// draw treasure region from starting point [startYPos, startXPos]
		for (var treasureY = startXPos; treasureY < (startXPos + regionSize); treasureY++) {
			for (var treasureX = startYPos; treasureX < (startYPos + regionSize); treasureX++) {
				outputMap[treasureY][treasureX] = regionType;
			}
		}

		var treasurePosX = Math.floor(Math.random() * regionSize) + startXPos;
		var treasurePosY = Math.floor(Math.random() * regionSize) + startYPos;

		outputMap[treasurePosX][treasurePosY] = 'X';

		// console.log('treasure Y final', startYPos + treasurePosY);
		// console.log('treasure X final', startXPos + treasurePosX);
		// console.log('startYPos', startYPos);
		// console.log('startXPos', startXPos);
		// console.log('treasureX', treasurePosX);
		// console.log('treasureY', treasurePosY);

		return outputMap;
	} else {
		return 'Region size is greater than the grid';
	}
}

console.log(makeFakeMap(5,5,'W', 2, 'X'));
console.log(makeFakeMap(5,5,'W', 6, 'X'));
console.log(makeFakeMap(8,8,'F', 4, 'X'));



