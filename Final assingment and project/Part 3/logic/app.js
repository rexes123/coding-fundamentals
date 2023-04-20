


const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const scoreBoard = document.querySelector('#scoreboard');
const restartButton = document.querySelector('#reset-score');

const selfPlayBtn = document.querySelector('#self-play-btn')
const player = document.querySelector('#player')
const computer = document.querySelector('#computer')
const playerChoiceImg = document.querySelector('#player-choice-img')
const computerChoiceImg = document.querySelector('#computer-choice-img')


const playerNameInput = document.querySelector('#player-name-input')
const playerName = document.querySelector('#player-name')
const nameInputContainer = document.querySelector('#name-input-container');

const stoneButton = document.querySelector('#stone');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');


const getTotalRounds = localStorage.getItem('totalRounds')
if (getTotalRounds >= 5){
  stoneButton.style.display = 'none';
  paperButton.style.display = 'none';
  scissorsButton.style.display = 'none';
}




stoneButton.addEventListener('click', playAnimation)
paperButton.addEventListener('click', playAnimation)
scissorsButton.addEventListener('click', playAnimation)

stoneButton.addEventListener('click', handleButtonClick)
paperButton.addEventListener('click', handleButtonClick)
scissorsButton.addEventListener('click', handleButtonClick)

stoneButton.addEventListener('click', playGame)
paperButton.addEventListener('click', playGame)
scissorsButton.addEventListener('click', playGame)

var loginUsername = localStorage.getItem('loggedInUsername');
var username = loginUsername;
var userKey = `user_${username}`;
var user = JSON.parse(localStorage.getItem(userKey));
var playerWins = user.playerWins;
var computerWins = user.computerWins



function handleButtonClick() {
  stoneButton.style.display = 'none';
  paperButton.style.display = 'none';
  scissorsButton.style.display = 'none';
  scoreBoard.style.display = 'inline';
  result.style.display = 'inline';

  setTimeout(() => {
    stoneButton.style.display = 'inline';
    paperButton.style.display = 'inline';
    scissorsButton.style.display = 'inline';
    scoreBoard.style.display = 'inline';
    result.style.display = 'inline';
  }, 3000)
}



const addNameBtn = document.querySelector('#add-name')
addNameBtn.addEventListener('click', () => {
  const name = playerNameInput.value;

  if (name == "") {
    alert("Please enter your name");
    return;
  }
  playerName.textContent = `Welcome, ${name}!`;

  nameInputContainer.style.display = 'none';

  //Store the value in local storage
  // localStorage.setItem('name', name);
});


function playAnimation(e) {
  console.log(e.target.id)
  const choice = e.target.id // Get the id of click button
  const playerChoiceImage = document.getElementById('player-choice-image');
  const computerChoiceImage = document.getElementById('computer-choice-image');

  // Add css class to trigger animation for player's choice
  playerChoiceImage.classList.add('animate');
  playerChoiceImage.style.animationName = `${choice}-animation`;

  computerChoiceImage.classList.add('animate');
  computerChoiceImage.style.animationName = `${choice}-animation`;



}


const resetButtonForSelfPlay = document.querySelector('#reset-score-selfPlay');


function selfPlay() {
  var choices = ['stone', 'paper', 'scissors'];
  var playerChoice = choices[Math.floor(Math.random() * choices.length)];

  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update player choice image
  var playerChoiceImg = document.getElementById("player-choice-img");
  playerChoiceImg.src = `img/${playerChoice}.png`;
  const image = document.getElementById('player-choice-img');
  image.classList.toggle("animate"); //add class to trigger css animation


  // Update computer choice image
  var computerChoiceImg = document.getElementById("computer-choice-img");
  computerChoiceImg.src = `img/${computerChoice}.png`;
  const computerImage = document.getElementById('computer-choice-img');
  computerImage.classList.toggle("computerAnimate"); //add class to trigger css animation








  //Update winner and score after 5 seconds
  setTimeout(function () {
    const winner = getWinner(playerChoice, computerChoice);
    showResult(winner, computerChoice); // Pass both variables to showResult()
    updateScore(winner);
    const totalRounds = playerWins + computerWins;
    return totalRounds


  }, 3000)
  playerChoiceImg.src = `img/${playerChoice}.png`;
  computerChoiceImg.src = `img/${computerChoice}.png`;

}
selfPlayBtn.addEventListener('click', function () {
  myInterval = setInterval(selfPlay, 3000)

});





selfPlayBtn.addEventListener('click', function () {
  stoneButton.style.display = 'none';
  paperButton.style.display = 'none';
  scissorsButton.style.display = 'none';
  // restartButton.style.display = 'none';
  const restartButton = document.querySelector('#reset-score');
  restartButton.style.display = 'none'
  resetButtonForSelfPlay.style.display = 'inline'
});

  // If click the self-play button, reset button will be display: none. And apper another button



function stop() {
  clearInterval(myInterval);
}


  // Play 5 rounds



// const stoneButton = document.querySelector('#stone');
// const papertButton = document.querySelector('#paper');
// const scissorstButton = document.querySelector('#scissors');

function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  setTimeout(function () {
    const winner = getWinner(playerChoice, computerChoice);
    showResult(winner, computerChoice); // Pass both variables to showResult()
    updateScore(winner);
    const totalRounds = playerWins + computerWins;
    if (totalRounds < 5) {
      result.innerHTML += "<br><p>Next round!</p>";
      localStorage.setItem('totalRounds', totalRounds)
       const getTotalRounds = localStorage.getItem('totalRounds', totalRounds)

       console.log(getTotalRounds)

    }
    else if (totalRounds >= 5) {
      stoneButton.style.display = 'none';
      paperButton.style.display = 'none';
      scissorsButton.style.display = 'none';
      localStorage.setItem('totalRounds', totalRounds)
      const getTotalRounds = localStorage.getItem('totalRounds', totalRounds)
      console.log(getTotalRounds)
    }
    else {
      endGame();
    }
  }, 3000)



  

  // stoneButton.style.display = 'none';
  // paperButton.style.display = 'none';
  // scissorsButton.style.display = 'none';

// const stoneButton = document.querySelector('#stone');
// const papertButton = document.querySelector('#paper');
// const scissorstButton = document.querySelector('#scissors');





  // const totalRounds = localStorage.getItem('totalRounds');
  // console.log(totalRounds)
  // if (totalRounds >= 5) {
  //   stoneButton.style.display = 'none';
  //   papertButton.style.display = 'none';
  //   scissorstButton.style.display = 'none';
  // }


  // if (totalRounds >= 3){
  //   stoneButton.style.display = 'none';
  //   papertButton.style.display = 'none';
  //   scissorstButton.style.display = 'none';
  // }




  // window.onload = function(){
  //   // if (totalRounds >=5){
  //     stoneButton.style.display = 'none';
  //     papertButton.style.display = 'none';
  //     scissorstButton.style.display = 'none';
  //    }
  // }


  playerChoiceImg.src = `img/${playerChoice}.png`;
  computerChoiceImg.src = `img/${computerChoice}.png`;

  // Add css animation class to playerChoiceImg and computerChoiceImg
  playerChoiceImg.classList.add("animate");
  computerChoiceImg.classList.add("computerAnimate");


  //Remove CSS animation class after animation complete
  setTimeout(function () {
    playerChoiceImg.classList.remove("animate");
  }, 3000)

  setTimeout(function () {
    computerChoiceImg.classList.remove("computerAnimate");
  }, 3000)


  // console.log(e.target.id)
  // console.log(playerChoice)
}



// setTimeout(function(){
//   updateScore(winner);
// }, 5000);






function getComputerChoice() {
  const choices = ['stone', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
// console.log(getComputerChoice('computerChoice'));


function getWinner(p, c) {
  if (p === c) {
    return 'tie';
  } else if (
    (p === 'stone' && c === 'scissors') ||
    (p === 'paper' && c === 'stone') ||
    (p === 'scissors' && c === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function showResult(winner, computerChoice) {
  if (winner === 'player') {
    result.innerHTML = `<img src="img/win.png" style="height: 50px; width: 50px;">`;
  } else if (winner === 'computer') {
    result.innerHTML = `<img src="img/lose.png" style="height: 50px; width: 50px;">`;
  } else {
    result.innerHTML = `<p>Tie!</p>`;
  }
}








function updateScore(winner) {
  if (winner === 'player') {
    playerWins++;
    //Update playerWins score in localstorage
    user.playerWins = playerWins
    localStorage.setItem(userKey, JSON.stringify(user));
    // localStorage.setItem('playerWins', playerWins);
  } else if (winner === 'computer') {
    computerWins++;
    user.computerWins = computerWins
    localStorage.setItem(userKey, JSON.stringify(user));
    //Update computerWins score in localstorage
    // localStorage.setItem('computerWins', computerWins)
  }
  scoreBoard.innerHTML = `<span style="color: blue" height: 50px; width: 50px;>${playerWins}</span> |   <img src="img/player.png" style="height: 50px; width: 50px;">
    <img src="img/vs.png" alt="" style="height: 50px; width: 50px;">    <img src="img/computer.png" style="height: 50px; width: 50px;">
    | <span style="color: blue">${computerWins}</span>`;
}

const getPlayerWinsData = localStorage.getItem('playerWins', playerWins);
// console.log(getPlayerWinsData)

const getComputerWinsData = localStorage.getItem('computerWins', computerWins);
// console.log(getComputerWinsData)


// setTimeout(function () {
//   updateScore(winner);
// }, 3000);



function endGame() {
  buttons.forEach(button => {
    button.removeEventListener('click', playGame);
  });
  restartButton.style.display = "inline";
  // restartButton.style.display = "inline";

}

// Add event listner for the "Play again" button
// const playAgainButton = document.querySelector("#play-again")
// playAgainButton.addEventListener('click', restart)
// const restartButton = document.querySelector('#reset-score');

// const resetScore = document.querySelector('#resetScore');
restartButton.addEventListener('click', restart);
resetButtonForSelfPlay.addEventListener('click', resetSelfPlayScore);


function resetSelfPlayScore(){
  localStorage.setItem('playerWins', 0);
  localStorage.setItem('computerWins', 0);
  localStorage.setItem('totalRounds', 0);
  const resetTotalRounds = localStorage.getItem('totalRounds', 0);
  console.log(resetTotalRounds)
  playerWins = 0;
  computerWins = 0;
  user.playerWins = playerWins
  localStorage.setItem(userKey, JSON.stringify(user));
  user.computerWins = computerWins
  localStorage.setItem(userKey, JSON.stringify(user));
  scoreBoard.innerHTML = ` ${playerWins} | <img src="img/player.png" style="height: 50px; width: 50px;">  <img src="img/vs.png" alt="" style="height: 50px; width: 50px;">   <img src="img/computer.png" style="height: 50px; width: 50px;">
  | ${computerWins}`;
  result;

}



//restart function for player play
function restart() {
  // Reset the player and computer scores in localstorage and memory
  localStorage.setItem('playerWins', 0);
  localStorage.setItem('computerWins', 0);
  //localStorage.setItem('key', value)should be in restart function, which means when click the reset button,
  //If totalRounds >=5, button.style.display = 'none' 
  localStorage.setItem('totalRounds', 0);
  const resetTotalRounds = localStorage.getItem('totalRounds', 0);
  console.log(resetTotalRounds)
  playerWins = 0;
  computerWins = 0;
  user.playerWins = playerWins
  localStorage.setItem(userKey, JSON.stringify(user));
  user.computerWins = computerWins
  localStorage.setItem(userKey, JSON.stringify(user));
  scoreBoard.innerHTML = ` ${playerWins} | <img src="img/player.png" style="height: 50px; width: 50px;">  <img src="img/vs.png" alt="" style="height: 50px; width: 50px;">   <img src="img/computer.png" style="height: 50px; width: 50px;">
  | ${computerWins}`;
  result;
  stoneButton.style.display = 'inline';
  paperButton.style.display = 'inline';
  scissorsButton.style.display = 'inline';
}

//Click reset it will show the button, in restart()


// function restart() {
//   // Reset the player and computer scores in localstorage and memory
//   // localStorage.setItem('playerWins', 0);
//   // localStorage.setItem('computerWins', 0);
//   playerWins = 0;
//   computerWins = 0;
//   user.playerWins = playerWins;
//   localStorage.setItem(userKey, JSON.stringify(user));
//   scoreBoard.innerHTML = ` ${playerWins} | <img src="img/player.png" style="height: 50px; width: 50px;">  <img src="img/vs.png" alt="" style="height: 50px; width: 50px;">   <img src="img/computer.png" style="height: 50px; width: 50px;">
//     | ${computerWins}`;
//   result.innerHTML = `Let's play again! Choose <img src="img/stone.png" style="height: 50px; width: 50px;">
//     , <img src="img/paper.png" style="height: 50px; width: 50px;">
//     , or <img src="img/scissors.png" style="height: 50px; width: 50px;">
//     :`;
//   restartButton.style.display = "none";
//   buttons.forEach(button => {
//     button.addEventListener('click', playGame);
//   });
//   // playAgainButton.style.display = "none";
// }



// const submitBtn = document.querySelector("#submit-name");
// submitBtn.addEventListener("click", submitName);

// function submitName() {
//   const firstName = document.querySelector("#firstname");
//   const lastName = document.querySelector("#lastname");
//   const nameInput = document.querySelector("#player-name-input");
//   const labelPlayerName = document.querySelector('#player-name');



//   // Get the player's first and last name
//   const [first, last] = nameInput.value.split(" ");

//   // Update the HTML with the player's name
//   firstName.textContent = first;
//   lastName.textContent = last || "";

//   // Hide the name input field and submit button
//   nameInput.style.display = "none";
//   submitBtn.style.display = "none";
//   labelPlayerName.style.display = "none";
// }
