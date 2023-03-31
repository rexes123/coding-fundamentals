const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const scoreBoard = document.querySelector('#scoreboard');
const restartButton = document.querySelector('#reset-score');
let playerWins = localStorage.getItem('playerWins') || 0;
let computerWins = localStorage.getItem('computerWins') || 0;

buttons.forEach(button => {
  button.addEventListener('click', playGame);
});

restartButton.addEventListener('click', restart);

function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showResult(winner, computerChoice); // Pass both variables to showResult()
  updateScore(winner);
  const totalRounds = playerWins + computerWins;
  if (totalRounds < 5) {
    result.innerHTML += "<br>Next round!";
  } else {
    endGame();
  }
}


// }
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(p, c) {
  if (p === c) {
    return 'tie';
  } else if (
    (p === 'rock' && c === 'scissors') ||
    (p === 'paper' && c === 'rock') ||
    (p === 'scissors' && c === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function showResult(winner, computerChoice) {
  if (winner === 'player') {
    result.innerHTML = `You <img src="img/win.png" style="height: 50px; width: 50px;">
    the game! ${computerChoice.charAt(0) +
      computerChoice.slice(1)} loses to ${winner}.`;
  } else if (winner === 'computer') {
    result.innerHTML = `You <img src="img/lose.png" style="height: 50px; width: 50px;">
     the game!
    ${computerChoice.charAt(0) +
      computerChoice.slice(1)} beats ${winner}.`;
  } else {
    result.innerHTML = `It's a tie! Both players chose ${computerChoice}.`;
  }
}

function updateScore(winner) {
  if (winner === 'player') {
    playerWins++;
    localStorage.setItem('playerWins', playerWins);
  } else if (winner === 'computer') {
    computerWins++;
    localStorage.setItem('computerWins', computerWins)
  }
  scoreBoard.innerHTML = `${playerWins} |   <img src="img/player.png" style="height: 50px; width: 50px;">
  <img src="img/vs.png" alt="" style="height: 50px; width: 50px;">    <img src="img/computer.png" style="height: 50px; width: 50px;">
  | ${computerWins}`;
}

function endGame() {
  buttons.forEach(button => {
    button.removeEventListener('click', playGame);
  });
  restartButton.style.display = "inline";
  if (playerWins > computerWins) {
    result.innerHTML += `<br>You <img src="img/win.png" style="height: 50px; width: 50px;">
    the game!`;
  } else if (playerWins < computerWins) {
    result.innerHTML += `<br>You <img src="img/lose.png" style="height: 50px; width: 50px;">
    the game!`;
  } else {
    result.innerHTML += "<br>The game ends in a tie!";
  }
}

function restart() {
  // Reset the player and computer scores in localstorage and memory
  localStorage.setItem('playerWins', 0);
  localStorage.setItem('computerWins', 0);
  playerWins = 0;
  computerWins = 0;
  scoreBoard.innerHTML = ` ${playerWins} | <img src="img/player.png" style="height: 50px; width: 50px;">  <img src="img/vs.png" alt="" style="height: 50px; width: 50px;">   <img src="img/computer.png" style="height: 50px; width: 50px;">
  | ${computerWins}`;
  result.innerHTML = `Let's play again! Choose <img src="img/stone.png" style="height: 50px; width: 50px;">
  , <img src="img/paper.png" style="height: 50px; width: 50px;">
  , or <img src="img/scissors.png" style="height: 50px; width: 50px;">
  :`;
  restartButton.style.display = "none";
  buttons.forEach(button => {
    button.addEventListener('click', playGame);
  });
}