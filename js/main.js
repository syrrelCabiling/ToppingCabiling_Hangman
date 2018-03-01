// JavaScript Document
(() => {
	console.log('hangman script fired!');
	
	//create an array to hold the words to be gueesed (MDN ->arrays, MDN const)
	const words = ["blue","orange","yellow","magenta","violet"];
	
	//set up variable stack
	//css selector
	//let initButton = document.querySelector('button');// you can enter either the class, id etc.
	let currentWord = null,
		wordHint = document.querySelector('.hint-sting'),
		guessBox = document.querySelector('input');
	
	function takeGuess() {
		//debugger;
		//MDN => 'this' keyword
		console.log(this.value);
		
		//if there is no value then exit the game loop -> MDN 'or'
		if (this.value =="" ||this.value.length < 1 ) { return;
		}
	}
	
	function init()  {
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
	
	guessBox.
	
	init();
})();