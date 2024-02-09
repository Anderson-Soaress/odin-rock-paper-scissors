function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice == 0){
        computerSelection = "Rock";
    } else if(randomChoice == 1){
        computerSelection = "Paper";        
    } else {
        computerSelection = "Scissors";
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

getPlayerChoice();