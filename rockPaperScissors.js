let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerInput = prompt("Choose rock, paper, or scissors.")
let playerSelection = null;
let computerSelection = null;

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

function playerPlay(){
  let playerSel = playerInput.toUpperCase();
  if (playerSel.match(/ROCK/i)){
    playerSelection = rock;
  } else if (playerSel.match(/PAPER/i)){
    playerSelection = paper;
  } else if (playerSel.match(/SCISSORS/i)){
    playerSelection = scissors;
  }
  return playerSelection;
  }

function playRound(){
  computerPlay();
  playerPlay();
  if (playerSelection == rock && computerSelection == scissors || playerSelection == scissors && computerSelection == paper || playerSelection == paper && computerSelection == rock){
    console.log("You win!");
  } else if (playerSelection == computerSelection) {
    console.log("It's a Draw! Play another round!");
  } else {
    console.log("You lose!");
  }
  }
  playRound();
