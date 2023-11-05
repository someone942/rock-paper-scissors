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

function updateResultDiv(result) {
    const resultDiv = document.querySelector(".result");
    switch (result) {
        case -1:
            resultDiv.innerText = "You lose";
            break;
        case 0:
            resultDiv.innerText = "Tie";
            break;
        case 1:
            resultDiv.innerText = "You Win";
            break;
    }
}

function getPlayerSelection() {
    return prompt("Enter your choice (Rock/Paper/Scissors): ", "").toLowerCase();
}

const playButtons = document.querySelectorAll(".play-button");
playButtons.forEach((button) => {
    button.addEventListener("click", () => {
        updateResultDiv(playRound(button.innerText.toLowerCase()));
    })
});