var Letter = require('./letter');
var words = ['Riastrad', 'Tsukumogami', 'Mjollnir', 'Ulfendir', 'Gae Bolga', 'Kusanagi', 'Ambrosia', 'Gungnir', 'Brant', 'Mistletoe'];

function Word(word) {
	this.word = words[Math.floor(Math.random() * 10)];
	this.array = this.word.split('');
	this.letters = this.array.map((letter) => {
		return new Letter(letter)
	});
	this.together = this.letters.forEach((lttr) => {
			lttr.hidden();
	});
	this.hide = this.letter.hidden();
}; 

module.exports = Word;
var word = new Word;
console.log(this.together)