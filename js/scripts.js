const CHOICES = ["Rock", "Paper", "Scissors"];
let playerWon = 0;
let computerWon = 0;

function capitalizeFirstLetter(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

/* The function compares the playerSelection with the computerSelection
and will return either 0 for a tie, 1 for a win or -1 for a loss */
function playRound(playerSelection) {
    console.log(playerSelection);
    lowerCasePlayerSelection = playerSelection.toLowerCase();
    lowerCaseComputerSelection = getComputerChoice().toLowerCase();

    if (lowerCaseComputerSelection === lowerCasePlayerSelection) {
        return 0
    }
    
    if ((lowerCaseComputerSelection === "paper" && lowerCasePlayerSelection === "scissors")
        || (lowerCaseComputerSelection === "rock" && lowerCasePlayerSelection === "paper")
        || (lowerCaseComputerSelection === "scissors" && lowerCasePlayerSelection === "rock")) {
        return 1
    }

    return -1
}

function updateGameScore(result) {
    updateResultDiv(result);
    updateScoreboard(result);
}

function updateResultDiv(result) {
    const resultText = document.querySelector(".result-text");
    switch (result) {
        case -1:
            resultText.innerText = "You Lose";
            break;
        case 0:
            resultText.innerText = "Tie";
            break;
        case 1:
            resultText.innerText = "You Win";
            break;
    }
}

function updateScoreboard(result) {
    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");
    playerScore.innerText = +playerScore.innerText + (result > 0 ? 1 : 0);
    computerScore.innerText = +computerScore.innerText + (result < 0 ? 1 : 0);
}

const playImages = document.querySelectorAll(".play");
playImages.forEach((images) => {
    images.addEventListener("click", () => {
        updateGameScore(playRound(images.attributes["alt"].value));
    })
});