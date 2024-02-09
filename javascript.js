function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice == 0){
        computerSelection = "rock";
    } else if(randomChoice == 1){
        computerSelection = "paper";        
    } else {
        computerSelection = "scissors";
    }

    return computerSelection;
}

function getPlayerChoice(){
    let playerSelection = prompt("Choose: Rock, paper and scissors!!");
    let invalidChoice = true;

    while(invalidChoice){
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){   
            invalidChoice = false;
        } else {
            alert("Can't understand your choice, make sure you're typing correctly.");
            playerSelection = prompt("Try again: Rock, paper and scissors!!");
        }
    }
    return playerSelection;
}

function startGame(playerSelection, computerSelection){
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        alert(" You win! " + playerSelection + " beats " + computerSelection);
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")){
        alert("You lose! " + computerSelection + " beats " + playerSelection)
    } else{
        alert("It's a draw!!")
    }
} 

startGame(getPlayerChoice(), getComputerChoice());