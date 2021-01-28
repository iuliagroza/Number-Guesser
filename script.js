let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

generateTarget = () => Math.floor(Math.random()*10);

function outOfRange(userChoice) {
  if(userChoice > 9) {
    console.log('Please choose an integer number from 0 to 9.');
  }
}

function compareGuesses(computerGuess, userGuess, target) {
  const computerDiff = Math.abs(computerGuess-target);
  const userDiff = Math.abs(userGuess-target);
  if(computerDiff <= userDiff) {
    return true;  
  }
  return false;
}

function updateScore(winner) {
  if (winner = 'human') {
    humanScore++;
  }
  else {
    computerScore++;
  }
}

function advanceRound() { 
  currentRoundNumber++;
}