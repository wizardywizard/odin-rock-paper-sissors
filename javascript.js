let choice = ["rock", "paper", "sissors"]

function computerPlay () {
    
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerChoice, computerChoice) {

    
    // var playerChoice = playerChoice.toLowerCase();

    if(computerChoice == playerChoice) {
        return console.log("Tie game go again")
    } 
    
    if ( 
        (playerChoice == "rock" && computerChoice =="sissors") ||
        (playerChoice == "sissors" && computerChoice == "papper") ||
        (playerChoice == "papper" && computerChoice == "rock")
    ) {
        return console.log("player wins")
    }

    if (
        (computerChoice == "rock" && playerChoice == "sissors") ||
        (computerChoice == "sissors" && playerChoice == "papper") ||
        (computerChoice == "papper" && playerChoice == "rock")
    ) {
        return console.log("computer wins")
    }

}

var playerChoice = "rock"
var computerChoice = computerPlay().toLowerCase();
console.log(playRound())