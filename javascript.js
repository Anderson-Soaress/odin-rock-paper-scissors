function game(){
    let playerChoice;
    let computerChoice;
    let result;

    const choiceBtns = document.querySelectorAll(".btn");
    choiceBtns.forEach(button => button.addEventListener("click" , () =>{

        playerChoice = button.value;
        computerChoice = getComputerChoice();

        result = whoWin(playerChoice, computerChoice);

        scoreboard(result);
    }))
}

function getComputerChoice(){
    computerChoice = ["rock", "paper", "scissors"];
    randomChoice = Math.floor(Math.random() * 3);
    computerSelection = computerChoice[randomChoice];

    return computerSelection
}

function whoWin(playerSelection, computerSelection){
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

game();