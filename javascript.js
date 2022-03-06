let choice = ["rock", "paper", "sissors"]
let playerScore = 0
let computerScore = 0
let winner = ""

function computerPlay () {
    
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerChoice, computerChoice) {

    if(computerChoice == playerChoice) {
        winner = "tie"
    } 
    
    if ( 
        (playerChoice == "rock" && computerChoice =="sissors") ||
        (playerChoice == "sissors" && computerChoice == "papper") ||
        (playerChoice == "papper" && computerChoice == "rock")
    ) {
        playerScore++
        winner = "player"
        return console.log(winner)
    } else if ( 
        (computerChoice == "rock" && playerChoice == "sissors") ||
        (computerChoice == "sissors" && playerChoice == "papper") ||
        (computerChoice == "papper" && playerChoice == "rock")
    ) {
        computerScore++
        winner = "computer" 
        return console.log(winner)  
    }
}

function game() {
    if (computerScore != 5 || playerScore != 5){
        playRound(playerChoice, computerChoice)
    } else if (playerScore == 5){
        return alert("player wins")
    } else if (computerScore == 5){
        return alert("computer wins")
    }
}

