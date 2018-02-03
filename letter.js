function Letter(letter) {
	this.letter = letter;
	this.blank = '_'
	this.guessed = false;
	this.hidden = function() {
		if (!this.guessed || !this.letter === ' ') {
			return this.blank;
		} else {
			return this.letter;
		};
		
	};
	this.test = function(character) {
		if (character === this.letter) {
			this.guessed = true;
		}
		console.log(this.hidden());
	};
};

var character = process.argv[2];
module.exports = Letter;
var letter = new Letter('l');
letter.test(character);
