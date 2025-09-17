'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;


const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

// when there's no input
  if(!guess){
   displayMessage('🙅 Enter a number!');
  } 
  else if(guess > 20 || guess < 1){
      document.querySelector('.between').style.color = 'rgb(169, 6, 6)';
    }
  
// when player wins
  else if(guess === secretNumber){
    displayMessage('🥳 Correct Number!')
    document.querySelector('.number').textContent = secretNumber;
     document.querySelector('.between').style.color = 'white';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    };
  } 

// when guess is wrong
  else if (guess !== secretNumber ){
    if(score > 1){
      score--;
      displayMessage(guess > secretNumber ? '📈Too high' : '📉Too low');
      document.querySelector('.score').textContent = score;
           document.querySelector('.between').style.color = 'white';

    } else{
      displayMessage('🥴 You lost')
      document.querySelector('.score').textContent = 0;
    }
}
});

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random()*20)+1;
  displayMessage('Start guessing...')
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.guess').value= '';
  document.querySelector('.number').textContent = '?'
});





