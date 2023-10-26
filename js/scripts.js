const CHOICES = ["Rock", "Paper", "Scissors"];

function capitalizeFirstLetter(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerWon = false;
    lowerCasePlayerSelection = playerSelection.toLowerCase();
    lowerCaseComputerSelection = computerSelection.toLowerCase();

    if (lowerCaseComputerSelection === lowerCasePlayerSelection) {
        return `Tie! Player: ${capitalizeFirstLetter(lowerCasePlayerSelection)} vs. Computer: ${capitalizeFirstLetter(lowerCaseComputerSelection)}`
    }
    
    if ((lowerCaseComputerSelection === "paper" && lowerCasePlayerSelection === "scissors")
        || (lowerCaseComputerSelection === "rock" && lowerCasePlayerSelection === "paper")
        || (lowerCaseComputerSelection === "scissors" && lowerCasePlayerSelection === "rock")) {
        playerWon = true;        
    }

    if (playerWon) {
        return `You Win! Player: ${capitalizeFirstLetter(lowerCasePlayerSelection)} vs. Computer: ${capitalizeFirstLetter(lowerCaseComputerSelection)}`
    }
    else {
        return `You Lose! Player: ${capitalizeFirstLetter(lowerCasePlayerSelection)} vs. Computer: ${capitalizeFirstLetter(lowerCaseComputerSelection)}`
    }
}

function getPlayerSelection() {
    return prompt("Enter your choice (Rock/Paper/Scissors): ", "").toLowerCase();
}

function game() {
    for (i = 0; i <= 4; i++) {
        console.log(playRound(getPlayerSelection(), getComputerChoice()));
    }
}

game();