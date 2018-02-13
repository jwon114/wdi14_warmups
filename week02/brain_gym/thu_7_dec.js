// can you break the secret code?

// Write a program to decode this message:

// NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.

// This is a form of cryptography known as the Caesar Ciper. It has a shift parameter of 3.

// The alphabet is normally:

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// The alphabet with the shift parameter of 3 is now as follows:

// DEFGHIJKLMNOPQRSTUVWXYZABC
// which means if the original message is ABC. The encrypted message will be DEF

// secret message 2:

// ERQXV ILIWHHQ PLQXWHV EUHDN

// METHOD 1 WITH FOREACH
var decodeMessage = function(message) {
	var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	var alphabetOffset = 'DEFGHIJKLMNOPQRSTUVWXYZABC'.split('');
	var isAlpha = /^[A-Z]$/;
	var message = message.toUpperCase().split('');
	var newMessage = '';
	
	message.forEach(character => {
		isAlpha.test(character) ? newMessage += alphabet[alphabetOffset.indexOf(character)] : newMessage += character;
	});
	return newMessage;
}


// METHOD 2 WITH MAP
var decodeMessage2 = function(message) {
	var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	var alphabetOffset = 'DEFGHIJKLMNOPQRSTUVWXYZABC'.split('');
	var isAlpha = /^[A-Z]$/;
	var message = message.toUpperCase().split('');

	var newMessage = message.map(character => {
		if (isAlpha.test(character)) {
			return alphabet[alphabetOffset.indexOf(character)]
		} else {
			return character
		}
	})
	return newMessage.join('');
}

console.log(decodeMessage('ABC'));
console.log(decodeMessage('DEF'));
console.log(decodeMessage('XYZ'));
console.log(decodeMessage('NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.'));
console.log(decodeMessage('ERQXV ILIWHHQ PLQXWHV EUHDN'));
console.log(decodeMessage('KHOOR ZRUOG'));

console.log(decodeMessage2('ABC'));
console.log(decodeMessage2('DEF'));
console.log(decodeMessage2('XYZ'));
console.log(decodeMessage2('NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.'));
console.log(decodeMessage2('ERQXV ILIWHHQ PLQXWHV EUHDN'));
console.log(decodeMessage2('KHOOR ZRUOG'));











