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

alert(getComputerChoice());