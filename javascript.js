let score;

function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let getRandomNumber = Math.floor(Math.random() * 3);
    console.log("Computer: " + choices[getRandomNumber]);
    return choices[getRandomNumber];
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose One:\nRock, Paper or Scissors?");
    console.log("Player: " + playerChoice);
    return playerChoice.toLowerCase();
}

function setScore(score){
    return score;
}

function playRound(playerSelection,computerSelection){
    let result = "";
    if (playerSelection == "rock" && computerSelection == "scissors"){
        score = setScore(1);
        return result = "You WON, Rock beats Scissors!";
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        score = setScore(2);
        return result = "You LOSE, Paper beats Rock!";
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        score = setScore(1);
        return result = "You WON, Paper beats Rock!";
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        score = setScore(2);
        return result = "You LOSE, Scissors beats Paper!";
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        score = setScore(1);
        return result = "You WON, Scissors beats Paper!";
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        score = setScore(2);
        return result = "You LOSE, Rock beats Scissors!";
    }else if (playerSelection == computerSelection){
        score = setScore(3);
        return result = "It's a Tie!";
    }else{
        alert("Invalid Value");
        return result = "Valor Invalido";
    }
}

function playGame(){
    let playerScore = 0,
        computerScore = 0;
    for (let i = 0; i < 5; i++){
        let player = getPlayerChoice(),
            computer = getComputerChoice();
        let playing = playRound(player,computer);
        console.log(playing);
        if(score == 1){
            playerScore++;
        }else if(score == 2){
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("You WON the Match!");
    }else if(playerScore < computerScore){
        console.log("You LOSE the Match!");
    }else{
        console.log("You TIED");
    }
    console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
}

playGame();