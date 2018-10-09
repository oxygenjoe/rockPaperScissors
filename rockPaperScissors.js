let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerSelection = null;
let computerSelection = null;
let i = 1;
let compCounter = 1;
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.id;
    computerPlay();
    playRound();
});
});

function computerPlay(){
  let picker = Math.floor(Math.random() * 10);
  if (picker <= 2){
    computerSelection = rock;
  }else if (picker >= 7) {
    computerSelection = paper;
  }else {
    computerSelection = scissors;
  }
  return computerSelection;
}
function playRound(){
  computerPlay();
  if (playerSelection == rock && computerSelection == scissors){
    document.getElementById("resultOutput").innerHTML = "You win!";
    document.getElementById("playerWinCounter").innerHTML = "Your Score: " + i++;
  } else if((playerSelection == scissors && computerSelection == paper)){
    document.getElementById("resultOutput").innerHTML = "You win!";
    document.getElementById("playerWinCounter").innerHTML = "Your Score: " + i++;
  } else if((playerSelection == paper && computerSelection == rock)){
    document.getElementById("resultOutput").innerHTML = "You win!";
    document.getElementById("playerWinCounter").innerHTML = "Your Score: " + i++;
  } else if (playerSelection == computerSelection) {
    document.getElementById("resultOutput").innerHTML = "It's a Draw! Play another round, unless you're a filthy Commie!";
  } else {
    document.getElementById("resultOutput").innerHTML = "You Lose!";
    document.getElementById("computerWinCounter").innerHTML =  "Your Opponent's Score: " +  compCounter++;
  }
}
