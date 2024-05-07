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