let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');
let playerScoreCounter = document.querySelector('.playerScoreDisplay');
let computerScoreCounter = document.querySelector('.computerScoreDisplay');
let playerChoiceDisplay = document.querySelector('.playerChoiceDisplay');
let computerChoiceDisplay = document.querySelector('.computerChoiceDisplay');
let resultGameDisplay = document.querySelector('.gameResult');
let winner = document.querySelector('.winnerResult');

function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let getRandomNumber = Math.floor(Math.random() * 3);
    computerChoice = choices[getRandomNumber];
    computerChoiceDisplay.textContent = (computerChoice);
    return computerChoice;
}

function getPlayerChoice(choice){
    let playerChoice = choice.textContent;
    return playerChoice.toLowerCase();
}

buttons.forEach(function(button) {
    button.addEventListener('click', function(){
        let playerChoice = getPlayerChoice(button);
        playerChoiceDisplay.textContent = (playerChoice);
        resultGameDisplay.textContent = playGame(playerChoice,getComputerChoice());
    });
});

function playGame(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        result = "You WON, Rock beats Scissors!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        result = "You LOSE, Paper beats Rock!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        result = "You WON, Paper beats Rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        result = "You LOSE, Scissors beats Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        result = "You WON, Scissors beats Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        result = "You LOSE, Rock beats Scissors!";
    } else if (playerSelection == computerSelection) {
        result = "It's a Tie!";
    }

    playerScoreCounter.textContent = playerScore;
    computerScoreCounter.textContent = computerScore;
    
    if (playerScore == 5){
        playerScore = 0;
        winner.textContent = "YOU WON THE MATCH! :)";
        computerScore = 0;
    }else if(computerScore == 5){
        winner.textContent = "YOU LOST THE MATCH :(";
        playerScore = 0;
        computerScore = 0;
    }
    return result;
}