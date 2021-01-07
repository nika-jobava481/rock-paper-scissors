var playerScoreArea = document.querySelector(".player-score")
var pcScoreArea = document.querySelector(".pc-score")
var pcScore = 0;
var playerScore = 0;

var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var playerChoice = document.querySelectorAll(".player-choice");

function getRandomValue() {
    return Math.ceil(Math.random() * 3);
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
    if (pcValue = 1) {
        var randNum = Math.ceil(Math.random() * 2);
        if (randNum == 1) {
            pcValue++;
        } else {
            pcValue += 2;
        }
    }
    if (pcValue == 2) {
        pcPlus();
    } else if (pcValue == 3) {
        playerPlus();
    }
    changePoints();
    checkPoints();
});

paper.addEventListener("click", function () {
    var pcValue = getRandomValue();
    if (pcValue = 2) {
        var randNum = Math.ceil(Math.random() * 2);
        if (randNum == 1) {
            pcValue++;
        } else {
            pcValue--;
        }
    }
    if (pcValue == 3) {
        pcPlus();
    } else if (pcValue == 1) {
        playerPlus();
    }
    changePoints();
    checkPoints();
});

scissors.addEventListener("click", function () {
    var pcValue = getRandomValue();
    if (pcValue = 3) {
        var randNum = Math.ceil(Math.random() * 2);
        if (randNum == 1) {
            pcValue -= 2;
        } else {
            pcValue--;
        }
    }
    if (pcValue == 1) {
        pcPlus();
    } else if (pcValue == 2) {
        playerPlus();
    }
    changePoints();
    checkPoints();
});