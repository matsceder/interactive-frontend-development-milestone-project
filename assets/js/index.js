 
/* ------------- Modal ------------- */
/* ------------- Code structure from w3schools ------------- */ 
let modal = document.getElementById("rulesModal");
let btnModal = document.getElementById("rulesBtn");
let btnModalClose = document.getElementById("modalBtnClose");
 
btnModal.addEventListener("click", (event) => {
  modal.style.display = "block";
});

btnModalClose.addEventListener("click", (event) => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

/* ------------- Game ------------- */
/* ------------- Code Basic Structure from freeCodeCamp tutorial ------------- */

/* Being my first project in JS, and with restricted basic knowledge I don't want to make to big 
changes to the code. I also know not to reinvent the wheel, so in my opinion I've done enough 
modifications to show my understanding of how the code works and put my own twist on it. */

/* ------------- Variables ------------- */
let order = [];
let playerOrder = [];
let flash;
let round;
let score;
let compRound;
let intervalId;
let power = false;
let win;
let strictButton = false;
let muteButton = false;
let startOver;

/* ------------- Constants ------------- */
const strictToggleBtn = document.getElementById("strictMode");
const sB = document.getElementById("strictBlank");
const sC = document.getElementById("strictCheck");
const muteToggleBtn = document.getElementById("soundOnOff");
const sOn = document.getElementById("soundOn");
const sOff = document.getElementById("soundOff");
const roundCount = document.querySelector(".counter-window");
const gameField1 = document.querySelector(".game-field-1");
const gameField2 = document.querySelector(".game-field-2");
const gameField3 = document.querySelector(".game-field-3");
const gameField4 = document.querySelector(".game-field-4");
const onToggleBtn = document.getElementById("powerOn");
const onLight = document.getElementById("onOffIcon");
const startButton = document.getElementById("playGame");

/* ------------- Buttons for game functions ------------- */
strictToggleBtn.addEventListener("click", (event) => {
    if (strictButton == false) {
        strictButton = true;
        sB.style.display = "none";  
        sC.style.display = "inline-block"
    } else {
        strictButton = false;
        sB.style.display = "inline-block"
        sC.style.display = "none"
    }
});

muteToggleBtn.addEventListener("click", (event) => {
    if (muteButton == false) {
        muteButton = true;
        sOn.style.display = "none";  
        sOff.style.display = "inline-block";
    } else {
        muteButton = false;
        sOn.style.display = "inline-block";
        sOff.style.display = "none";
    }
});

onToggleBtn.addEventListener("click", (event) => {
    if (power == false) {
        power = true;
        onLight.style.color = "#FFFFFF";
        roundCount.innerHTML = "-";
        roundCount.style.color = "#F47C7C"
    } else {
        power = false;
        onLight.style.color = "#232323";
        roundCount.innerHTML = "-";
        roundCount.style.color = "#232323";  
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener("click", (event) => {
    if (power || win) {
        play();
    }
});

/* ------------- Play function - Starting point of the game ------------- */
function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    round = 1;
    roundCount.innerHTML = 1;
    score = true;
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compRound = true;
    intervalId = setInterval(gameRound, 800);
}

/* ------------- Determines if it's the player or computers turn ------------- */
function gameRound() {
    power = false;
    if (flash == round) {
        clearInterval(intervalId);
        compRound = false;
        clearColor();
        power = true;
    }
    if (compRound) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200);
    }
}

/* ------------- A functions for each of the colored play buttons. Plays correct audio and flash color ------------- */
function one() {
    if (muteButton == false) {
        let audio = document.getElementById("clip1");
        audio.play();
    }
    gameField1.style.backgroundColor = "#FBCBCB";
}

function two() {
    if (muteButton == false) {
        let audio = document.getElementById("clip2");
        audio.play();
    }
    gameField2.style.backgroundColor = "#FCFBD1";
}

function three() {
    if (muteButton == false) {
        let audio = document.getElementById("clip3");
        audio.play();
    }
    gameField3.style.backgroundColor = "#D9F2D4";
}

function four() {
    if (muteButton == false) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    gameField4.style.backgroundColor = "#C6D9EF";
}

/* ------------- Clears all color to "normal" ------------- */
function clearColor() {
    gameField1.style.backgroundColor = "#F47C7C";
    gameField2.style.backgroundColor = "#F7F48B";
    gameField3.style.backgroundColor = "#A1DE93";
    gameField4.style.backgroundColor = "#70A1D7";
}

/* ------------- Flashes all colors ------------- */
function flashColor() {
    gameField1.style.backgroundColor = "#FBCBCB";
    gameField2.style.backgroundColor = "#FCFBD1";
    gameField3.style.backgroundColor = "#D9F2D4";
    gameField4.style.backgroundColor = "#C6D9EF";
}

/* ------------- Here are the buttons. Calls functions for audio and flashing colors ------------- */
gameField1.addEventListener("click", (event) => {
    if (power) {
        playerOrder.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

gameField2.addEventListener("click", (event) => {
    if (power) {
        playerOrder.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

gameField3.addEventListener("click", (event) => {
    if (power) {
        playerOrder.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

gameField4.addEventListener("click", (event) => {
    if (power) {
        playerOrder.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

/* ------------- Checking to see if wrong or right answear, and if the game is won ------------- */
function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        score = false;
    if (playerOrder.length == 20 && score) {
        winGame();
    }
    if (score == false) {
        flashColor();
        roundCount.innerHTML = "NO!";
        setTimeout(() => {
            roundCount.innerHTML = round;
            clearColor();

            if (strictButton) {
                play();
            } else {
                compRound = true;
                flash = 0;
                playerOrder = [];
                score = true;
                intervalId = setInterval(gameRound, 800);
            }
        }, 800);
        if (muteButton == false)
            muteButton = false;
    }
    if (round == playerOrder.length && score && !win) {
        round++;
        playerOrder = [];
        compRound = true;
        flash = 0;
        roundCount.innerHTML = round;
        intervalId = setInterval(gameRound, 800);
    }
}

/* ------------- Win function. Congratulates you and on timeout starts game over ------------- */
function winGame() {
    flashColor();
    roundCount.innerHTML = "WIN!";
    power = false;
    win = true;
    startOver = setTimeout(() => {
        play();
    }, 5000);
} 

 