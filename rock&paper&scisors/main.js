var playerScoreArea = document.querySelector(".player-score");
var pcScoreArea = document.querySelector(".pc-score");
var pcScore = 0;
var playerScore = 0;

var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var playerChoice = document.querySelectorAll(".player-choice");
var difficulty = Number(prompt("choose difficulty in range 1-100"));

if(difficulty>100 || difficulty<1){
    alert("you must choose value between 1-100");
    location.reload();
}

function getRandomValue() {
    return Math.ceil(Math.random() * 100);
}

function changePoints() {
    playerScoreArea.textContent = playerScore;
    pcScoreArea.textContent = pcScore;
}

function pcPlus() {
    setTimeout(function () {
        alert("PC +1");
    }, 100);
    pcScore++;
}

function playerPlus() {
    setTimeout(function () {
        alert("Player +1");
    }, 100);
    playerScore++;
}

function checkPoints() {
    if (playerScore == 3) {
        setTimeout(function () {
            alert("Player won");
        }, 100);
        setTimeout(function () {
            location.reload();
        }, 100);
    } else if (pcScore == 3) {
        setTimeout(function () {
            alert("PC won");
        }, 100);
        setTimeout(function () {
            location.reload();
        }, 100);
    }
}

rock.addEventListener("click", function () {
    var pcValue = getRandomValue();
    if (pcValue <= difficulty) {
        pcPlus();
    }else{
        playerPlus();
    }
    changePoints();
    checkPoints();
});

paper.addEventListener("click", function () {
    var pcValue = getRandomValue();
    if (pcValue <= difficulty) {
        pcPlus();
    }else{
        playerPlus();
    }
    changePoints();
    checkPoints();
});

scissors.addEventListener("click", function () {
    var pcValue = getRandomValue();
    if (pcValue <= difficulty) {
        pcPlus();
    }else{
        playerPlus();
    }
    changePoints();
    checkPoints();
});
