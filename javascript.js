const divScoreboard = document.createElement("div");
const computerChoiceParagraph = document.createElement("p");
const whoWinParagraph = document.createElement("p");
const scoreboardParagraph = document.createElement("p");
const section = document.querySelector(".section");

let textComputerChoice;
let textWhoWin;
let textScoreboard;

textWhoWin = document.createTextNode(``)
textComputerChoice = document.createTextNode(``);
textScoreboard = document.createTextNode(``);
section.appendChild(divScoreboard);

computerChoiceParagraph.appendChild(textComputerChoice);
whoWinParagraph.appendChild(textWhoWin);
scoreboardParagraph.appendChild(textScoreboard);

divScoreboard.appendChild(computerChoiceParagraph);
divScoreboard.appendChild(whoWinParagraph);
divScoreboard.appendChild(scoreboardParagraph);

function game(){
    let playerChoice;
    let computerChoice;
    let result;
    let playerPoints = 0;
    let computerPoints = 0;

    const choiceBtns = document.querySelectorAll(".btn");
    choiceBtns.forEach(button => button.addEventListener("click" , () =>{

        computerChoiceParagraph.removeChild(textComputerChoice);
        whoWinParagraph.removeChild(textWhoWin);
        scoreboardParagraph.removeChild(textScoreboard);
        divScoreboard.removeChild(computerChoiceParagraph);
        divScoreboard.removeChild(whoWinParagraph);
        divScoreboard.removeChild(scoreboardParagraph); 
        section.removeChild(divScoreboard);

        playerChoice = button.value;
        computerChoice = getComputerChoice();

        result = whoWin(playerChoice, computerChoice);

        textComputerChoice = document.createTextNode(`The computer choose: ${computerChoice}`);

        if(result == "player"){
            textWhoWin = document.createTextNode(`You win, ${playerChoice} beats ${computerChoice}!!`)
            playerPoints = playerPoints + 1;
        } else if (result == "computer"){
            textWhoWin = document.createTextNode(`The computer wins, ${computerChoice} beats ${playerChoice}!!`)
            computerPoints = computerPoints + 1;
        } else{
            textWhoWin = document.createTextNode("No winners!! It's a draw.")
        }
        
        textScoreboard = document.createTextNode(`You ${playerPoints} x ${computerPoints} Computer.`);

        section.appendChild(divScoreboard);
        computerChoiceParagraph.appendChild(textComputerChoice);
        whoWinParagraph.appendChild(textWhoWin);
        scoreboardParagraph.appendChild(textScoreboard);

        divScoreboard.appendChild(computerChoiceParagraph);
        divScoreboard.appendChild(whoWinParagraph);
        divScoreboard.appendChild(scoreboardParagraph);
    }))
}

function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    randomChoice = Math.floor(Math.random() * 3);
    computerSelection = computerChoice[randomChoice];

    return computerSelection
}

function whoWin(playerSelection, computerSelection){
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        return "player"
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")){
        return "computer"
    } else{
        return "draw"
    }
}

game();