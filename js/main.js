// JavaScript Document
(() => {
	console.log('hangman script fired!');

	//create an array to hold the words to be gueesed (MDN ->arrays, MDN const)
	const words = ["blue","orange","yellow","magenta","violet"];

	//set up variable stack
	//css selector
	//let initButton = document.querySelector('button');// you can enter either the class, id etc.
	let currentWord = null,
		wordHint = document.querySelector('.current-word'),
		guessBox = document.querySelector('input'),
		wrongGuesses = 0,
		resetScreen = document.querySelector('.reset-screen'),
		resetButton = resetScreen.querySelector('button'),
		wrongLetterList = document.querySelector('.wrong-letters'),
		wrongLetterArray = [];

	function resetGame() {
		debugger;

		let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
		gamePieces.forEach(piece => piece.classList.remove('show-piece'));
		wrongGuesses = 0;
		guessBox.value = "";
	}

	init();


	function showResetScreen() {
		//user has lost, reset stuff and start over
		console.log('you lose, looser!');
		resetScreen.classList.add('show-piece');
}

	function takeGuess() {
		//debugger;
		//MDN => 'this' keyword
		console.log(this.value);

		//if there is no value then exit the game loop -> MDN 'or'
		if (this.value =="" ||this.value.length < 1 ) { return;
		}


	//set up the win loose paths (if/else)
	if (!currentWord.includes(this.value)) {
		//loosing path
		console.log('valid letter!');
		wrongLetterArray.push(this.value);
		wrongLetterList.textContent = wrongLetterArray.join(" ");
		document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

		if (wrongGuesses >= 5) {

		//add incriment values
		showResetScreen();
		} else {
			//if you loose, rest the screen
			wrongGuesses++;
		}

		//compare the letter guess to the word to see if it's in there
	} else {
		//winning path
	}

	}

	function init() {
		//look at MDN -> the MATH object
		currentWord = words[Math.floor(Math.random()*words.length)];

		//fill the hint with underscores -> MDN string methods
		//array .map method
		wordHint.textContent = currentWord.split("").map(letter => letter = "__").join("__");
		console.log(`guess this word: ${currentWord}. it's at ${words.indexOf(currentWord)}`);

	}
		//debugger;
	//console.log(words[3]);


	//event handling always goes at the bottom
	//initButton.addEventListener('click', init);

	guessBox.addEventListener('keyup', takeGuess);
	resetButton.addEventListener('click', resetGame);

	init();
})();
