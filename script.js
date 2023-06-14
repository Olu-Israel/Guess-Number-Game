'use strict';

// document.querySelector('.message').textContent = '🎉Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    //When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '📛 No Number!';

        //When player wins the game
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? ' 📈 Too High!' : '📉 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💣 You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }

    }




});


document.querySelector('.again').addEventListener('click', () => {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //Restore score
    document.querySelector('.score').textContent = 20;
    //Restore Background
    document.querySelector('body').style.backgroundColor = '#222';
    //Restore Message
    document.querySelector('.message').textContent = 'Start guessing...';
    //Restore width
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';

    //Input Field
    document.querySelector('.guess').value = '';


});



