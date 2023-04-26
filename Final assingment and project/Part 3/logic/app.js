


const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const scoreBoard = document.querySelector('#scoreboard');
const restartButton = document.querySelector('#reset-score');

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

//............................Fetch API.......................................................................

const endpoint = "https://gist.githubusercontent.com/rexes123/d761372727c0608d8ca7c9267f40ad09/raw/d0d4303d5693751e361868cb1744b316deccfbe2/test.json"
const quote = document.querySelector('.quote')


stoneButton.addEventListener('click',async()=>{
    const response = await fetch(endpoint);
    const data = await response.json();
    quote.textContent = data[0].quote
    displayQuoteForSeconds(3)

    // quote.textContent = JSON.stringify(data[1].quote);
} )

// stoneButton.add('click', ()=>)

paperButton.addEventListener('click',async()=>{
  const response = await fetch(endpoint);
  const data = await response.json();
  quote.textContent = data[1].quote
  displayQuoteForSeconds(3)
} )

scissorsButton.addEventListener('click',async()=>{
  const response = await fetch(endpoint);
  const data = await response.json();
  quote.textContent = data[2].quote
  displayQuoteForSeconds(3)
  // quote.textContent = JSON.stringify(data[1].quote);
} )

function displayQuoteForSeconds(seconds){
  // Show the quote for the specified duration 
  quote.style.display = 'block';

  setTimeout(()=>{
    //Hide the quote after specified duration
    quote.style.display = 'none';
  }, seconds * 1000)
}

//...................................................................................................

const getTotalRounds = localStorage.getItem('totalRounds')
if (getTotalRounds >= 5) {
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






// const winner = getWinner(playerChoice, computerChoice);
// showResult(winner, computerChoice); // Pass both variables to showResult()
// updateScore(winner);
// const totalRounds = playerWins + computerWins;
// if (totalRounds < 5) {
//   result.innerHTML += "<br><p>Next round!</p>";
//   localStorage.setItem('totalRounds', totalRounds)
//   const getTotalRounds = localStorage.getItem('totalRounds', totalRounds)

//   console.log(getTotalRounds)

// }
// else if (totalRounds >= 5) {
//   stoneButton.style.display = 'none';
//   paperButton.style.display = 'none';
//   scissorsButton.style.display = 'none';
//   localStorage.setItem('totalRounds', totalRounds)
//   const getTotalRounds = localStorage.getItem('totalRounds', totalRounds)
//   console.log(getTotalRounds)
// }
// else {
//   endGame();
// }

const resetButtonForSelfPlay = document.querySelector('#reset-score-selfPlay');
const selfPlayBtn = document.querySelector('#self-play-btn')




var totalRounds = 0;

selfPlayBtn.addEventListener('click', function () {
  console.log('Self-Play')


  var myInterval; //delcare my interval variable
  // const totalRounds = playerWins + computerWins;

  // playerWins and computerWins put here
  // const totalRounds = 5;
  const winner = getWinner(playerChoice, computerChoice);
  var playerChoice = choices[Math.floor(Math.random() * choices.length)];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  updateScore(winner);
  showResult(winner); // Pass both variables to showResult()
  // localStorage.setItem('totalRounds', totalRounds)

  updateScore(getWinner(playerChoice, computerChoice));
  showResult(getWinner(playerChoice, computerChoice));


  stoneButton.style.display = 'none';
  paperButton.style.display = 'none';
  scissorsButton.style.display = 'none';

  // restartButton.style.display = 'none';
  const restartButton = document.querySelector('#reset-score');
  restartButton.style.display = 'none'
  resetButtonForSelfPlay.style.display = 'inline'

  // stopPlaying.style.background = 'steelblue'
  // stopPlaying.disabled = false;

    // if click self-play button, stop playing button is enable
    const stopPlaying = document.querySelector('#stop-playing')
    stopPlaying.style.background = 'steelblue';
    stopPlaying.disabled = false;



  //setInterval can repeat for every 3 seconds
  myInterval = setInterval(function selfPlay() {

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

    

//.....................stopPlaying feature........................................................
    const stopPlaying = document.querySelector('#stop-playing')
    //if click the stopPlaying button, selfPlaying is enabled
    stopPlaying.addEventListener('click', ()=>{
      console.log('stop Playing')

      //After click stopPlaying, stop Playing button will disabled, and selfPlayBtn will enabled.
      stopPlaying.disabled = true;
      stopPlaying.style.background = 'grey'


      selfPlayBtn.disabled = false;
      selfPlayBtn.style.background = 'steelblue'

      clearInterval(myInterval);
    })
 //..................................................................................................



    setTimeout(function () {
      const winner = getWinner(playerChoice, computerChoice);
      showResult(winner, computerChoice); // Pass both variables to showResult()
      updateScore(winner);

    }, 3000)
    playerChoiceImg.src = `img/${playerChoice}.png`;
    computerChoiceImg.src = `img/${computerChoice}.png`;


    // for (let totalRounds = 1; totalRounds < 5; totalRounds++) {
    // const totalRounds = playerWins + computerWins;
    totalRounds++;
    if (totalRounds < 5) {
      //If less than 5 round selfPlayBtn will disabled and become grey color
      selfPlayBtn.disabled = true// selfPlayBtn is disabled
      selfPlayBtn.style.background = 'grey';


      //resetButtonForSelfPlay will disabled 
      resetButtonForSelfPlay.disabled = true;
      resetButtonForSelfPlay.style.background = 'grey';


      localStorage.setItem('totalRounds', `Self-Play round: ${totalRounds}`)
      const getTotalRounds = localStorage.getItem('totalRounds', `Sel-fPlay round: ${totalRounds}`);
      console.log(getTotalRounds);


    }
    else if (totalRounds >= 5) {

      //More than and equal to 5 round stop the game
      clearInterval(myInterval);

      //Enable the resetButtonForSelfPlay and become steelblue color.
      resetButtonForSelfPlay.disabled = false
      resetButtonForSelfPlay.style.background = 'steelblue';

      //After click the resetButtonForSelfPlay, the selfPlayBtn.disabled = false
      resetButtonForSelfPlay.addEventListener('click', () => {
        selfPlayBtn.disabled = false// selfPlayBtn is enabled
        selfPlayBtn.style.background = 'steelblue';
      })
      //After click reset can play another five round



      localStorage.setItem('totalRounds', `Self-Play round: ${totalRounds}`);
      const getTotalRounds = localStorage.getItem('totalRounds', `Self-Play round round: ${totalRounds}`);
      console.log(getTotalRounds);
    }
    else if (totalRounds > 5){
      image.classList.remove("animate"); //add class to trigger css animation
      computerImage.classList.remove("computerAnimate"); //add class to trigger css animation

    }
    else {
      endGame();
    }
  }, 3000)
});




// function stop() {
//   // clearInterval(myInterval);
//   // stopPlaying.disabled = true
//   // stopPlaying.background = 'grey'

// }




// selfPlayBtn.disabled = true


// resetBtn.addEventListener('click',()=>{
//   selfPlayBtn.disabled = false

//   console.log('Click resetBtn')

// })


stoneButton.style.display = 'none';
paperButton.style.display = 'none';
scissorsButton.style.display = 'none';

// if (round >= 5){
//   selfPlay.disabled = true
//   resetButton.disabled = false
//   //Need to click disabled reset the score and enable the selfPlayButton
// } 





// If click the self-play button, reset button will be display: none. And apper another button





// Play 5 rounds



// const stoneButton = document.querySelector('#stone');
// const papertButton = document.querySelector('#paper');
// const scissorstButton = document.querySelector('#scissors');





function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  //If totalRounds inside the function, will be reset to 0 every time function is called.
  setTimeout(function () {
    const winner = getWinner(playerChoice, computerChoice);
    showResult(winner, computerChoice); // Pass both variables to showResult()
    updateScore(winner);
    totalRounds++;
    if (totalRounds < 5) {
      result.innerHTML = "<br><p>Next round!</p>";


      
      //restartButton is disabled and change background color to grey
      restartButton.disabled = true
      restartButton.style.background = 'grey'


      localStorage.setItem('totalRounds', `Round: ${totalRounds}`)
      const getTotalRounds = localStorage.getItem('totalRounds', `Self-Play round: ${totalRounds}`)
      console.log(getTotalRounds)

    }
    else if (totalRounds >= 5) {

      //After total 5 rounds, stone, papper and scissors button will be hidden.
      stoneButton.style.display = 'none';
      paperButton.style.display = 'none';
      scissorsButton.style.display = 'none';
      console.log('PlayerScore is ' + `${playerWins}`)
      console.log('ComputerScore is ' + `${computerWins}`) 

      if (playerWins > computerWins){
        result.innerHTML = "<p>Win!</p>"
        result.innerHTML = `<img src="img/win.png" style="height: 50px; width: 50px;">`
        scoreBoard.textContent = "End game!"

        
        console.log('Win!')
      } else if (playerWins < computerWins){
        result.innerHTML = "<p>Lose!</p>"
        result.innerHTML = `<img src="img/lose.png" style="height: 50px; width: 50px;">`
        scoreBoard.textContent = "End game!"

        console.log('Lose')
      } else if(playerWins == computerWins){
        result.innerHTML = "<p>Tie!</p>"
        scoreBoard.textContent = "End game!"        
      }
        


      //selfPlayBtn is disabled
      selfPlayBtn.disabled = true;
      selfPlayBtn.style.background = 'grey'

      //restartButton is enabled and change background color to steelblue
      restartButton.disabled = false
      restartButton.style.background = 'steelblue'

      // when totalRound is more than equal to 5, they will count, totalWins for play and computer.

      // result.innerHTML = "<br><p>End Game!</p>";
      localStorage.setItem('totalRounds', `Round: ${totalRounds}`)
      const getTotalRounds = localStorage.getItem('totalRounds', `Round: ${totalRounds}`)
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


function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  } else if (
    (playerChoice === 'stone' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'stone') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}








function showResult(winner) {
  if (winner === 'player') {
    result.innerHTML = `<img src="img/win.png" style="height: 50px; width: 50px;">`;
  }
   else if (winner === 'computer') {
    result.innerHTML = `<img src="img/lose.png" style="height: 50px; width: 50px;">`;
  }
}



//GetWiiner => showResult => updateScore


// let round = 0;
function updateScore(winner) {
  if (winner === 'player') {
    playerWins++;
    // localStorage.setItem('playerWins')
    //Update playerWins score in localstorage
    user.playerWins = playerWins
    localStorage.setItem(userKey, JSON.stringify(user));
    //Save playerWins data into localStorage
    localStorage.setItem('playerWins', playerWins);
  } else if (winner === 'computer') {
    computerWins++;
    user.computerWins = computerWins
    localStorage.setItem(userKey, JSON.stringify(user));
    //Update computerWins score in localstorage
    //Save computerWins data into localStorage
    localStorage.setItem('computerWins', computerWins)
  }
  scoreBoard.innerHTML = `<span style="color: blue" height: 50px; width: 50px;>${playerWins}</span> |   <img src="img/player.png" style="height: 50px; width: 50px;">
    <img src="img/vs.png" alt="" style="height: 50px; width: 50px;">    <img src="img/computer.png" style="height: 50px; width: 50px;">
    | <span style="color: blue">${computerWins}</span>`;
// round++;//increment for every rounds
//     if(round === 5){
//       if (playerWins > computerWins) {
//         scoreBoard.innerHTML = '<p>Wins</p>'
//         console.log('Wins')
//       } else if (playerWins < computerWins) {
//         scoreBoard.innerHTML = '<p>Lose</p>'
//         console.log('Lose')
//       } else {
//         scoreBoard.innerHTML = '<p>Tie<p>'
//         console.log('Tie')
//       }
//     }
    
}




// const getPlayerWinsData = localStorage.getItem('playerWins', playerWins);
// console.log(getPlayerWinsData)

// const getComputerWinsData = localStorage.getItem('computerWins', computerWins);
// console.log(getComputerWinsData)


// let totalScore = getPlayerWinsData - getComputerWinsData;



// const TotalRounds = localStorage.getItem('totalRounds', `12Round: ${totalRounds}`)
//  console.log(totalRounds)










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

function restart() {
  // Reset the player and computer scores in localstorage and memory
  // result.innerHTML += "<br><p>End Game!</p>";
  localStorage.setItem('playerWins', 0);
  localStorage.setItem('computerWins', 0);
  totalRounds = 0; //when click the reset button, the totalRounds will start from zero again.  
  //localStorage.setItem('key', value)should be in restart function, which means when click the reset button,
  //If totalRounds >=5, button.style.display = 'none' 
  result.textContent = 'Start!';
  // result.innerHTML += "<br><p>End Game!</p>";

  restartButton.disabled = true;
  restartButton.style.background = 'grey'

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


function resetSelfPlayScore() {
  localStorage.setItem('playerWins', 0);
  localStorage.setItem('computerWins', 0);
  localStorage.setItem('totalRounds', 0);
  totalRounds = 0;
  const resetTotalRounds = localStorage.getItem('totalRounds', `Round: ${totalRounds}`);
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


