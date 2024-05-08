let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let randomComputerChoice = Math.round(Math.random() * 2);
  if (randomComputerChoice === 0) {
    randomComputerChoice = "rock";
  } else if (randomComputerChoice === 1) {
    randomComputerChoice = "paper";
  } else if (randomComputerChoice === 2) {
    randomComputerChoice = "scissors";
  }
  return randomComputerChoice;
}

function getHumanChoice() {
  let inputHumanChoice = prompt("Enter your choice: ").toLowerCase();
  if (inputHumanChoice === "") {
    alert(`Game canceled.`);
    return "error"
  } else if (inputHumanChoice != "rock" && inputHumanChoice != "paper" && inputHumanChoice != "scissors") {
    alert(`Wrong input! You entered ${inputHumanChoice}. Enter 'rock', 'paper', or 'scissors' instead.`);
    return "error"
  }
  return inputHumanChoice;
}