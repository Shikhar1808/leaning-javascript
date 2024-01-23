let playerText = document.getElementById("playerText");
let computerText = document.getElementById("computerText");
let resultText = document.getElementById("resultText");
let choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
choiceBtns.forEach(button => button.addEventListener("click",() =>{
    player = button.textContent;
    playerText.innerHTML = `Player: ${player}`;
    computerTurn();
    computerText.innerHTML = `Computer: ${computer}`
    if(player == "ROCK" && computer == "PAPER"){
        result = "Computer Wins";
    }
    else if(player == "ROCK" && computer == "ROCK"){
        result = "TIE";
    }
    else if(player == "ROCK" && computer == "SCISSORS"){
        result = "Player WINS";
    }
    else if(player == "PAPER" && computer == "PAPER"){
        result = "TIE";
    }
    else if(player == "PAPER" && computer == "ROCK"){
        result = "Player Wins";
    }
    else if(player == "PAPER" && computer == "SCISSORS"){
        result = "Computer Wins";
    }
    else if(player == "SCISSORS" && computer == "SCISSORS"){
        result = "TIE";
    }
    else if(player == "SCISSORS" && computer == "PAPER"){
        result = "Player Wins";
    }
    else if(player == "SCISSORS" && computer == "ROCKS"){
        result = "Player Wins";
    }
    resultText.innerHTML = `Result: ${result}`;
}));
function computerTurn(){
    const randomNum = Math.floor(Math.random()*3)+1;
    switch(randomNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}