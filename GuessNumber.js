// Guess the number

function guessNumber() {
    
    // to generate a random number 
    const random = Math.floor(Math.random() * 6) + 1;

    // take input from the user
    let num = parseInt(prompt('Guess a number from 1 to 6: '));

    // take the input until the guess is correct

    // while (num !== random) {
    //     num = parseInt(prompt('Guess a number from 1 to 10:'))
    // }
    // checking if the guess is correct
    if (num == random ) {
        console.log('your guess is correct. ');
    }
    else {
        console.log(`Better luck next time, number is ${random} `);
    }
}

guessNumber();