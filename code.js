let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let value = Math.floor(Math.random() * 3);
    
    if(value == 0){
        return "Rock";
    }
    else if(value == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

/*
function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}
*/


function playRound(humanChoice, computerChoice){
    let humanChoiceLower = humanChoice.toLowerCase();
    let compChoiceLower = computerChoice.toLowerCase();

    
    if (humanChoiceLower == "rock" && compChoiceLower == "scissors"){
        resultsDiv.textContent = "You win. Rock beats Scissors.";
        humanScore += 1;
    }
    else if(humanChoiceLower == "scissors" && compChoiceLower == "paper"){
        resultsDiv.textContent = "You win. Scissors beats Paper.";
        humanScore += 1;
    }
    else if(humanChoiceLower == "paper" && compChoiceLower == "rock"){
        resultsDiv.textContent = "You win. Paper beats Rock.";
        humanScore += 1;
    }
    else if(compChoiceLower == "paper" && humanChoiceLower == "rock"){
        resultsDiv.textContent = "You lose. Paper beats Rock.";
        computerScore += 1;
    }
    else if(compChoiceLower == "scissors" && humanChoiceLower == "paper"){
        resultsDiv.textContent = "You lose. Scissors beats Paper.";
        computerScore += 1;
    }
    else if(compChoiceLower == "rock" && humanChoiceLower == "scissors"){
        resultsDiv.textContent = "You lose. Rock beats Scissors.";
        computerScore += 1;
    }
    else{
        resultsDiv.textContent = "Tie.";
    }
    console.log(`Human choice: ${humanChoice} Computer choice: ${computerChoice}`);

    if(humanScore == 5){
        finalResults.textContent = `Human wins the game ${humanScore} - ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5){
        finalResults.textContent = `Computer wins the game ${computerScore} - ${humanScore}.`;
        humanScore = 0;
        computerScore = 0;
    }
    else{
        finalResults.textContent = `Human score: ${humanScore}. Computer score: ${computerScore}.`;
    }


}







const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const finalResults = document.querySelector("#finalResult");



btnRock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

btnPaper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});


btnScissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});



/*
if(humanScore > computerScore){
    console.log("Human wins.");
}
else if(computerScore > humanScore){
    console.log("Computer wins.");
}
else{
    console.log("It's a tie.");
}
*/