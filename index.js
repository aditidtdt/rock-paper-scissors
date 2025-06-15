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


// one round

let humanScore = 0;
let computerScore = 0;
const humanMove = getHumanChoice().toLowerCase();
const computerMove = getComputerChoice(random).toLowerCase();

console.log('You picked: ' + humanMove);
console.log('The computer picked: ' + computerMove);

let result;
function playRound(getHumanChoice, computerChoice) {
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

// game

