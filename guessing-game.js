function guessingGame() {
    const sercretNum = Math.floor(Math.random() * 100);
    let numGuess = 0;
    let gameOver = false;

    return function(guess) {
        if (gameOver) {
            return "The game is over, you already won!"
        }

        numGuess++;

        if (guess === sercretNum) {
            gameOver = true;
            return `You win! You found ${guess} in ${numGuess} guesses.`;
        } else if (guess < sercretNum) {
            return `${guess} is too low!`;
        } else {
            return `${guess} is too high!`
        }
    };
}

module.exports = { guessingGame };
