
function compPlay() {
  let randomNum = Math.random();
  let compMove = '';

  if (randomNum < 1/3) {
    compMove = 'rock';
  }
  else if (randomNum >= 1/3 && randomNum < 2/3) {
    compMove = 'paper';
  }
  else if (randomNum >= 2/3 && randomNum < 1) {
    compMove = 'scissors';
  }
  return compMove;
}

// comparing player move with computer move and taking out result

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function playGame(playerMove) {
  const compMove = compPlay();
  let result = '';

  if (playerMove === 'rock') {
    if (compMove === 'rock') {
      result = 'It\'s a tie!';
    }
    else if (compMove === 'scissors') {
      result = 'You win!';
    }
    else if (compMove === 'paper') {
      result = 'You lose!';
    }
  }
  else if (playerMove === 'paper') {
    if (compMove === 'paper') {
      result = 'It\'s a tie!';
    }
    else if (compMove === 'rock') {
      result = 'You win!';
    }
    else if (compMove === 'scissors') {
      result = 'You lose!';
    }
  }
  else if (playerMove === 'scissors') {
    if (compMove === 'scissors') {
      result = 'It\'s a tie!';
    }
    else if (compMove === 'paper') {
      result = 'You win!';
    }
    else if (compMove === 'rock') {
      result = 'You lose!';
    }
  }
  
  if (result === 'It\'s a tie!') {
    score.ties += 1;
  }
  else if (result === 'You win!') {
    score.wins += 1;
  }
  else if (result === 'You lose!') {
    score.losses += 1;
  }

  document.querySelector('.js-moves')
   .innerHTML = `Your move
   <img src="./assets/${playerMove}.png" class="move-icon"/>
   <img src="./assets/${compMove}.png" class="move-icon"/>
   Computer`;

  document.querySelector('.js-result')
   .innerHTML = `${result}`;

  localStorage.setItem('score',JSON.stringify(score));

  updateScore();

}

function updateScore() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
 } 



