let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices =["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "paper";
    return "Sissors";
}

function win(userChoice, computerChoice){
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. you win!`;
}

function lose(){
    console.log("lose");
}

function draw(){
    console.log("it's a draw");
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener("click", function(){
        game("r");
    })

    paper_div.addEventListener("click", function(){
        game("p");
    })

    sissors_div.addEventListener("click", function(){
        game("s");
    })
}

main();






















