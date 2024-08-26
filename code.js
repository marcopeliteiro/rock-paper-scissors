humanScore = 0;
computerScore = 0;

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

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice){
    let humanChoiceLower = humanChoice.toLowerCase();
    let compChoiceLower = computerChoice.toLowerCase();

    if (humanChoiceLower == "rock" && compChoiceLower == "scissors"){
        console.log("You win. Rock beats Scissors.");
        humanScore += 1;
    }
    else if(humanChoiceLower == "scissors" && compChoiceLower == "paper"){
        console.log("You win. Scissors beats Paper.");
        humanScore += 1;
    }
    else if(humanChoiceLower == "paper" && compChoiceLower == "rock"){
        console.log("You win. Paper beats Rock.");
        humanScore += 1;
    }
    else if(compChoiceLower == "paper" && humanChoiceLower == "rock"){
        console.log("You lose. Paper beats Rock.");
        computerScore += 1;
    }
    else if(compChoiceLower == "scissors" && humanChoiceLower == "paper"){
        console.log("You lose. Scissors beats Paper.");
        computerScore += 1;
    }
    else{
        console.log("You lose. Scissors beats Paper.");
        computerScore += 1;
    }
}


let x = 0;

while(x<5){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score: " +humanScore);
    console.log("Computer score: "+computerScore);
    x+=1;
}

if(humanScore > computerScore){
    console.log("Human wins.");
}
else if(computerScore > humanScore){
    console.log("Computer wins.");
}
else{
    console.log("It's a tie.");
}