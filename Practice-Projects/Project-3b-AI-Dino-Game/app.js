// Before the game start
// - Listen for any keyboard action
// - Start the game

// Afte the game start
// -Jump dino when a space key is pressed
// -Listen for collision between dino cactus
// -If there is a collision, make the game ned
// -If there is no collision, update the score and generate obstacle

// Game ends (Game over)
let gameElem = document.querySelector("#game")
let rootElem = document.querySelector(":root")
let dinoElem = document.querySelector(".dino")
let scoreElem = document.querySelector('.score')
let groundElem = document.querySelector('.ground')
let cactusElem = groundElem.querySelector('.cactus')

let  gameSpeed = 4000; /* In ms*/
let jumpSpeed = (gameSpeed / 10) * 2; /* In ms*/
let maxJump = 250; /* In percentage*/
let speedScale = 1; 

let score = 0;
let gameStarted = false; 
let gameOver = false;
let selfPlayMode = false;
let Jumping = false;


function setCustomProperty(elem, prop,value){
        elem.style.setProperty (prop, value)
}

function handleJump(e){
        if(e.code!== "Space") return
        let audioJump = document.querySelector('.audio-jump')
        audioJump.play()
        dinoElem.classList.add("jump")
        Jumping = true
        dinoElem.addEventListener("animationend",function(){
        Jumping = false
        dinoElem.classList.remove('jump')
        })
}
function shouldJump(){
        let gap = 250;
        let cactus = cactusElem.getBoundingClientRect().x;

        // Validations
        if (cactus <= 0 || Jumping) return false;
        if (cactus < gap){
           return true
        } else{
           return false
        }
}

let gameID
function startGame(){
        gameStarted = true
        gameElem.classList.add("game-started")
        document.addEventListener("keydown",handleJump)
        window.requestAnimationFrame(updateGame)
}

function endGame(){
        let audioDie = document.querySelector('.audio-die')
        audioDie.play()
        gameOver = true
        gameElem.classList.add("game-over")
        document.removeEventListener("keydown",handleJump)
}



// // As long as the game is running, this function is called
function updateGame(){
        setCustomProperty(rootElem, "--game-speed",gameSpeed)
        setCustomProperty(rootElem, "--jump-speed", jumpSpeed)
        setCustomProperty(rootElem, "--max-jump",maxJump)
        setCustomProperty(rootElem, "--speed-scale", speedScale)
        if (selfPlayMode){
                if(shouldJump()){
                        handleJump({ code: "Space"}); // Simulate a Jump
                }
        }
        // Update the score
        updateScore()
        // Update the cactus
        updateCactus()
        // Check if game over
        if(checkGameOver()){
                endGame()
                return  //Wont' recurse
        }
        window.requestAnimationFrame(updateGame)
}

function isCollision(dinoRect, cactusRect) {  
        // AABB - Axis-aligned bounding box  
        return (
                dinoRect.x < cactusRect.x + cactusRect.width &&
                dinoRect.x + dinoRect.width > cactusRect.x &&
                dinoRect.y < cactusRect.y + cactusRect.height &&
                 dinoRect.y + dinoRect.height > cactusRect.y
         );
    }
    
function checkGameOver(){
        if (gameOver) return true
        let dinoRect = dinoElem.getBoundingClientRect()
        let cactusRect = cactusElem.getBoundingClientRect()
        if(isCollision(dinoRect,cactusRect)){
                return true 
        }
        return false
}

let scoreInterval = 10
let currentScoreInterval = 0
function updateScore(){
        currentScoreInterval += 1
        if(currentScoreInterval % scoreInterval !== 0){
                return
        }
        score += 1

        if(score%100 === 0){
                let audioPoint = document.querySelector('.audio-point')
                audioPoint.play()
                gameSpeed -= speedScale
                jumpSpeed = (gameSpeed / 10) * 2
        }

        let currentScoreElem  = scoreElem.querySelector(".current-score")
        currentScoreElem.innerText = score.toString().padStart(5,"0")
}

function updateCactus(){
        // If the cactus is off the screen, randomization occurs. 
        // When cactus is on the screen, randomization stops
        let cactusXPos = cactusElem.getBoundingClientRect().x
        let isOffScreen = cactusXPos > window.innerWidth
        if (isOffScreen === false) return
        
        let cacti = ["cactus-small-1","cactus-small-2","cactus-small-3"]
        let randomNum = Math.floor(Math.random() * cacti.length)
        let cactus = cacti[randomNum]
        cactusElem.classList.remove("cactus-small-1","cactus-small-2","cactus-small-3")
        cactusElem.classList.add(cactus)
}

function fitScreen(){
        let width = window.innerWidth
        let height = window.innerHeight/2
        gameElem.style.width = width + "px"
        gameElem.style.height = height + "px"
        gameElem.style.zoom = 1.5
}

window.addEventListener("load",()=>{
        fitScreen();
        window.addEventListener("resize",fitScreen)
        var selfPlayElement = document.querySelector("#selfplay")
        selfPlayElement.addEventListener("change", function(){
               selfPlayMode = selfPlayElement.checked
        })
        document.addEventListener('keydown',startGame, {once:true})
})
