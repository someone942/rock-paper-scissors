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
function playRound(playerSelection, computerSelection) {
    lowerCasePlayerSelection = playerSelection.toLowerCase();
    lowerCaseComputerSelection = computerSelection.toLowerCase();

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

function getPlayerSelection() {
    return prompt("Enter your choice (Rock/Paper/Scissors): ", "").toLowerCase();
}

function game() {
    for (i = 0; i <= 4; i++) {
        result = playRound(getPlayerSelection(), getComputerChoice())

        switch (result) {
            case -1:
                message = `You Lose! Player: ${capitalizeFirstLetter(lowerCasePlayerSelection)} vs. Computer: ${capitalizeFirstLetter(lowerCaseComputerSelection)}`;
                computerWon += 1;
                break;
            case 0:
                message = `Tie! Player: ${capitalizeFirstLetter(lowerCasePlayerSelection)} vs. Computer: ${capitalizeFirstLetter(lowerCaseComputerSelection)}`;
                break;
            case 1:
                message = `You Win! Player: ${capitalizeFirstLetter(lowerCasePlayerSelection)} vs. Computer: ${capitalizeFirstLetter(lowerCaseComputerSelection)}`;
                playerWon += 1;
                break;
        }
        console.log(message);
    }
    if (playerWon > computerWon) {
        console.log(`You win the game! Player: ${playerWon} Computer: ${computerWon}`)
    }
    else if (playerWon === computerWon) {
        console.log(`Game Tie! Player: ${playerWon} Computer: ${computerWon}`)
    }
    else {
        console.log(`You lose the game! Player: ${playerWon} Computer: ${computerWon}`)
    }
}

game();