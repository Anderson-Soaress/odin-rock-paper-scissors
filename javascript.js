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

function playRound(playerSelection, computerSelection){
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        alert(" You win! " + playerSelection + " beats " + computerSelection);
        return "player"
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")){
        alert("You lose! " + computerSelection + " beats " + playerSelection)
        return "computer"
    } else{
        alert("It's a draw!!")
        return "draw"
    }
} 

function playGame(){
    
    let playerPoints = 0;
    let computerPoints = 0;
    while(playerPoints != 3 && computerPoints != 3){
        let whoWin = playRound(getPlayerChoice(), getComputerChoice());
        if(whoWin == "player"){
            playerPoints = playerPoints + 1;
        } else if (whoWin == "computer"){
            computerPoints = computerPoints + 1;
        } else{}
    alert("Scoreboard:\nPlayer " + playerPoints + " x Computer " + computerPoints)
    }
}

playGame();