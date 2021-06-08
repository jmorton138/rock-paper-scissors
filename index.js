let userStatus = "";

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
        return userStatus ="draw";
    } else if (userChoice == "rock") {
        if (compsChoice == "scissors") {
            console.log("You win! Rock beats scissors.");
            return userStatus = "You win!";
        } else if (compsChoice == "paper") {
            console.log("You lose! Paper beats rock.");
            return userStatus = "You lose!";
        }
    } else if (userChoice == "paper") {
        if (compsChoice == "rock") {
            console.log("You win! Paper beats rock.");
            return userStatus ="You win!";
        } else if (compsChoice == "scissors") {
            console.log("You lose! Scissors beats paper.");
            return userStatus ="You lose!";
        }
    } else if (userChoice == "scissors") {
        if (compsChoice == "paper") {
            console.log("You win! Scissors beats paper.");
            return userStatus ="You win!";
        } else if (compsChoice == "rock") {
            console.log("You lose! Rock beats scissors.");
            return userStatus ="You lose!";
        }
    }

}

function game() {
    //set score counters
    let userScore = 0;
    let compScore = 0;
    //play 5 rounds
    for (i = 0; i <= 4; i++){
        playerSelection();
        
   
        //keep track of each player's score by updating score each round
        if (userStatus == "draw") {
            i--;
        } else if (userStatus == "You win!") {
            userScore++;
            console.log("you: " + userScore);
        } else if (userStatus == "You lose!") {
            compScore++;
            console.log("comp: " + compScore);
        }

    }
    //decide winner after 5 rounds
    if (userScore > compScore) {
        console.log("You won everything!");  
    } else {
        console.log("You lost everything");
    }
    console.log("Final score: " + "You: " + userScore + "comp: " + compScore);
}


game();



//return winner