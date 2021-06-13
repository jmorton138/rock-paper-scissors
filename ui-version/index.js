let userStatus = "";

let userScore = 0;
let compScore = 0;

//every game update score variable in playerSelection

//when score = 5, annouce winner and reset scores
function updateScores() {

    const score = document.createElement('div');
    score.style.fontSize = "20px";
    if (userScore === 3) {
        score.style.color = "black";
        score.innerHTML = `You won the match! <br>
        You: ${userScore} Computer: ${compScore}`;
        userScore = 0;
        compScore = 0;
    } else if (compScore === 3) {
        score.style.color = "black";
        score.innerHTML = `You lost the match. <br>You: ${userScore}
        Computer: ${compScore}`;
        userScore = 0;
        compScore = 0;
    
    } else {
        score.innerHTML = `You: ${userScore} <br>
        Computer: ${compScore}`;
    }
    

    
    document.querySelector('#results').appendChild(score)


  

}

//better=> if user's score is 3

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
function playerSelection(e) {
    let userChoice = e.target.id;
    userChoice = userChoice.toLowerCase();
    console.log(userChoice);
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
    if (document.querySelector('#results')) {
        document.querySelector('#results').remove();
    }
    const results = document.createElement('div');
    results.id ='results';
    results.classList.add('btn');
    const btns = document.querySelector('#btns');
    document.querySelector('#bkrd').insertBefore(results, btns);

    if (userChoice == compsChoice) {
        results.textContent = "Draw";
    } else if (userChoice == "rock") {
        if (compsChoice == "scissors") {
            results.textContent = "You win! Rock beats scissors.";
            userScore++;
       
        } else if (compsChoice == "paper") {
            results.textContent ="You lose! Paper beats rock.";
            compScore++;
        }
    } else if (userChoice == "paper") {
        if (compsChoice == "rock") {
            results.textContent= "You win! Paper beats rock.";
            userScore++;
        } else if (compsChoice == "scissors") {
            results.textContent = "You lose! Scissors beats paper.";
            compScore++;
        }
    } else if (userChoice == "scissors") {
        if (compsChoice == "paper") {
            results.textContent = "You win! Scissors beats paper.";
            userScore++;
        } else if (compsChoice == "rock") {
            results.textContent = "You lose! Rock beats scissors.";
            compScore++;
        }
    }
    updateScores();

}






const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', playerSelection);
})




//return winner