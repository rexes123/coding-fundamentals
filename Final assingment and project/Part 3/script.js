const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

buttons.forEach(button => {
  button.addEventListener('click', playGame);
});

function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showResult(winner, computerChoice);
}

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
    result.innerHTML = `You win! ${computerChoice.charAt(0) +
      computerChoice.slice(1)} loses to ${winner}.`;
  } else if (winner === 'computer') {
    result.innerHTML = `You lose! ${computerChoice.charAt(0) +
      computerChoice.slice(1)} beats ${winner}.`;
  } else {
    result.innerHTML = `It's a tie! Both players chose ${computerChoice}.`;
  }
}