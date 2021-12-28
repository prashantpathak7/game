// 'use strict';
// // document.querySelector('.message').textContent = 'correct number';
// // document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 15;
// // document.querySelector('.guess').value = 20;
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayFunction = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // document.querySelector('.check').addEventListener
  if (!guess) {
    displayFunction('No Number');
    //document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secreteNumber) {
    displayFunction('correct number');
    //document.querySelector('.message').textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    // displayFunction(secreteNumber);
    document.querySelector('.number').textContent = secreteNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      displayFunction(guess > secreteNumber ? 'too High' : 'too Low');
      // document.querySelector('.message').textContent =
      // guess > secreteNumber ? 'too High' : 'too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayFunction('you loose the game');
      //document.querySelector('.message').textContent = 'you loose the game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secreteNumber;
    }
  }

  //   else if (guess > secreteNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you loose the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secreteNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you loose the game';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.number').textContent = secreteNumber;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  displayFunction('Start Guessing...');
  //  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
