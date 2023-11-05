const CHOICES = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
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

    updateChoicesSelection(lowerCasePlayerSelection, lowerCaseComputerSelection);

    if (lowerCaseComputerSelection === lowerCasePlayerSelection) {
        updateGameScore(0);
        return;
    }
    
    if ((lowerCaseComputerSelection === "paper" && lowerCasePlayerSelection === "scissors")
        || (lowerCaseComputerSelection === "rock" && lowerCasePlayerSelection === "paper")
        || (lowerCaseComputerSelection === "scissors" && lowerCasePlayerSelection === "rock")) {
            updateGameScore(1);
            return;
    }

    updateGameScore(-1);
}

function updateChoicesSelection(playerSelection, computerSelection) {
    const playerChoiceText = document.querySelector(".player-choice");
    playerChoiceText.innerText = capitalizeFirstLetter(playerSelection);
    const computerChoiceText = document.querySelector(".computer-choice");
    computerChoiceText.innerText = capitalizeFirstLetter(computerSelection);
}

function updateGameScore(result) {
    updateResultDiv(result);
    updateScoreboard(result);
    checkGameHasEnded();
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
    const playerScoreText = document.querySelector(".player-score");
    const computerScoreText = document.querySelector(".computer-score");
    playerScore = playerScore + (result > 0 ? 1 : 0);
    computerScore = computerScore + (result < 0 ? 1 : 0);

    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
}

function checkGameHasEnded() {
    if (playerScore >= 5 || computerScore >= 5) {
        endGame();
    }

    const resultText = document.querySelector(".result-text");
    if (playerScore >= 5) {
        resultText.innerText = "You win the game!";
    }
    else if (computerScore >= 5) {
        resultText.innerText = "You lose the game!";
    }
}

function endGame() {
    const playButtons = document.querySelectorAll(".play-button");
    playButtons.forEach((playButton) => {
        playButton.disabled = true;
    });
    
    const playAgainButton = document.querySelector(".play-again");
    playAgainButton.classList.toggle("hide-element");
}

function resetGame() {
    const playButtons = document.querySelectorAll(".play-button");
    playButtons.forEach((playButton) => {
        playButton.disabled = false;
    });

    const playAgainButton = document.querySelector(".play-again");
    playAgainButton.classList.toggle("hide-element");


    const playerScoreText = document.querySelector(".player-score");
    playerScoreText.innerText = 0;
    const computerScoreText = document.querySelector(".computer-score");
    computerScoreText.innerText = 0;
    const resultText = document.querySelector(".result-text");
    resultText.innerText = "";

    playerScore = 0;
    computerScore = 0;
    
    const playerChoice = document.querySelector(".player-choice");
    playerChoice.innerText = "";
    const computerChoice = document.querySelector(".computer-choice");
    computerChoice.innerText = "";
}

const playButtons = document.querySelectorAll(".play-button");
playButtons.forEach((playButton) => {
    playButton.addEventListener("click", () => {
        playRound(playButton.innerText.toLowerCase())
    });
});

const playAgainButton = document.querySelector(".play-again");
playAgainButton.addEventListener("click", resetGame);
playAgainButton.classList.toggle("hide-element");