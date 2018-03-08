// JavaScript Document
(() => {
	console.log('hangman script fired!');

	//create an array to hold the words to be gueesed (MDN ->arrays, MDN const)
	const words = ["dog","cat","bird","horse","snake"];

	//set up variable stack
	//css selector
	//let initButton = document.querySelector('button');// you can enter either the class, id etc.
	let currentWord = null,
		wordHint = document.querySelector('.current-word'),
		guessBox = document.querySelector('input'),
		wrongGuesses = 0,
		correctGuesses = 0,
		resetScreen = document.querySelector('.reset-screen'),
		resetButton = resetScreen.querySelector('button'),
		wrongLetterList = document.querySelector('.wrong-letters'),
		wrongLetterArray = [];

	function showResetScreen(message) {
			//user has lost, reset stuff and start over
			resetScreen.classList.add('show-piece');
			//grabs the header tag and change its content ==> replace it with the message
			resetScreen.querySelector('h1').textContent = message;
	}


	//the first place to go when youre lost and a word says undefined is here

	function resetGame() {
		//debugger;

		let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
		gamePieces.forEach(piece => piece.classList.remove('show-piece'));
		wrongGuesses = 0;
		guessBox.value = "";
		wrongLetterList.textContent = "";
		wrongLetterArray.textContent = "";
		wrongLetterArray = [];
	}

	init();

	function takeGuess() {
		//debugger;
		//MDN => 'this' keyword
		console.log(this.value);

		//if there is no value then exit the game loop -> MDN 'or'
		if (this.value =="" || this.value.length < 1 ) {
			return;
		}

		let currentGuess = this.value; //this is the current letter in the input


	//if (currentWord.indexOf(this.value) < 0) {}
	//set up the win loose paths (if/else)
	if (!currentWord.includes(this.value)) {
		//loosing path
		console.log('valid letter!');
		wrongLetterArray.push(this.value);
		wrongLetterList.textContent = wrongLetterArray
		wrongLetters.textContent = wrongLetterArray.join(" ");
		document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

		if (wrongGuesses >= 5) {
		//console.log('you lose, loser!')

		//add incriment values
		showResetScreen("GAME OVER. You ran out of guesses!");
		} else {
			//if you loose, rest the screen
			wrongGuesses++;
			//its a number i made it, and it will be the last step
		}

		//compare the letter guess to the word to see if it's in there
	} else {
		//debugger;
		let matchAgainst = currentWord.split("");
		var hintString = wordHint.textContent.split(" ");

		matchAgainst.forEach((letter, index) => {
			if (letter === currentGuess) {
				hintString[index] = currentGuess;
				correctGuesses++; //makes sure to track correct guesses
			} //a function is just like a css rule, just a different structure, to the left is an object on the page, and everything that comes after the . is an array aka like a command, a part of the Javascript library
			//
		});

		wordHint.textContent = ""; //make the hint on the screen be empty
		wordHint.textContent = hintString.join(" ");

		if (correctGuesses === currentWord.length) {
			showResetScreen();
		}
		//paragraph(the thing youre working with) aka WORDHINT then the thing you want to change aka TEXTCONTENT
		//winning path
		}
	}

	function init() {
		//look at MDN -> the MATH object
		currentWord = words[Math.floor(Math.random()*words.length)];

		//fill the hint with underscores -> MDN string methods
		//array .map method
		wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");
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
