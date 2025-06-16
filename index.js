let humanScore = 0;
let computerScore = 0;

function playRound() {
  // player's move
  let playerMove;
  function getHumanChoice() {
    playerMove = prompt("Enter your move");
    return playerMove;
  }

  // computer's move
  let random = Math.random();
  let move;
  function getComputerChoice(random) {
    if (random < 1/3) {
      move = 'rock';
    }
    else if (random >= 1/3 && random < 2/3) {
      move = 'paper';
    }
    else if (random >= 2/3) {
      move = 'scissors';
    }
    return move;
  }

  const humanMove = getHumanChoice().toLowerCase();
  const computerMove = getComputerChoice(random).toLowerCase();
  console.log('You picked: ' + humanMove);
  console.log('The computer picked: ' + computerMove);

  let result;
  if (humanMove === computerMove){
    result = 'a tie';
    humanScore++;
    computerScore++;
  }
  else if (computerMove=== 'rock' && humanMove === 'paper' || computerMove === 'paper' && humanMove === 'scissors' || computerMove === 'scissors' && humanMove === 'rock'){
    result = 'you win';
    humanScore++;
  }
  else if (humanMove === 'rock' && computerMove === 'paper' || humanMove === 'paper' && computerMove === 'scissors' || humanMove === 'scissors' && computerMove === 'rock'){
    result = 'computer wins';
    computerScore++;
  }
  return result;
}

function playGame() {
  for(let i = 1; i <= 5; i++){
    console.log(`Round ${i}`);
    console.log(`RESULT: ${playRound()}`);
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
    console.log('\n');
  }
  console.log('\n');
}

playGame();
if(humanScore > computerScore){
  console.log('Congratulations, You win!');
}
else if (humanScore === computerScore){
  console.log('Its a tie!');
}
else {
  console.log('NOOO you lost');
}




