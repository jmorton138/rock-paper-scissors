//computer's choice, random out of 3 options
function computerPlay() {
    const choice = Math.floor(Math.random()*3);
    
//assign rock, paper and scissors to ints
if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";

    } else {
        return "scissors";
    }

}

//User input
function playerSelection() {
    let userChoice = prompt("rock, paper, or scissors");
    userChoice = userChoice.toLowerCase();
    //Only allow 3 choices
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid choice");
        playerSelection();
    } else {
        //console.log(userChoice);
        playRound(userChoice, computerPlay());

    }
    
}
//Compare computer's to user's input
function playRound(userChoice, compsChoice) {
   //const compsChoice = computerPlay()
    console.log("Computer chose: " + compsChoice);
    if (userChoice == compsChoice) {
        alert("draw");
    } else if (userChoice == "rock") {
        if (compsChoice == "scissors") {
            console.log("You win! Rock beats scissors.");
            return;
        } else if (compsChoice == "paper") {
            console.log("You lose! Paper beats rock.");
            return;
        }
    } else if (userChoice == "paper") {
        if (compsChoice == "rock") {
            console.log("You win! Paper beats rock.");
            return;
        } else if (compsChoice == "scissors") {
            console.log("You lose! Scissors beats paper.");
            return;
        }
    } else if (userChoice == "scissors") {
        if (compsChoice == "paper") {
            console.log("You win! Scissors beats paper.");
            return;
        } else if (compsChoice == "rock") {
            console.log("You lose! Rock beats scissors.");
            return;
        }
    }

}

function game() {
    
}


playerSelection();



//return winner