let computerScore = 0;
let humanScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function getComputerChoice() {
  let randomComputerChoice = Math.round(Math.random() * 2);
  if (randomComputerChoice === 0) {
    randomComputerChoice = `rock`;
  } else if (randomComputerChoice === 1) {
    randomComputerChoice = `paper`;
  } else if (randomComputerChoice === 2) {
    randomComputerChoice = `scissors`;
  }
  return randomComputerChoice;
}

function getHumanChoice() {
  let inputHumanChoice = prompt(`Enter your choice: `).toLocaleLowerCase();
  if (inputHumanChoice === ``) {
    alert(`Game canceled.`);
    return `error`
  } else if (inputHumanChoice != `rock` && inputHumanChoice != `paper` && inputHumanChoice != `scissors`) {
    alert(`Wrong input! You entered ${inputHumanChoice}. Enter 'rock', 'paper', or 'scissors' instead.`);
    return `error`
  }
  return inputHumanChoice;
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === `rock` && humanChoice === `scissors`) {
    computerScore += 1;
    console.log(`You lose! Rock beats scissors.`);
  } else if (computerChoice === `paper` && humanChoice === `rock`) {
    computerScore += 1;
    console.log(`You lose! Paper beats rock.`);
  } else if (computerChoice === `scissors` && humanChoice === `paper`) {
    computerScore += 1;
    console.log(`You lose! Scissors beat paper.`);
  } else if (humanChoice === `rock` && computerChoice === `scissors`) {
    humanScore += 1;
    console.log(`You won! Rock beats paper.`);
  } else if (humanChoice === `paper` && computerChoice === `rock`) {
    humanScore += 1;
    console.log(`You won! Paper beats rock.`);
  } else if (humanChoice === `scissors` && computerChoice === `paper`) {
    humanScore += 1;
    console.log(`You won! Scissors beat paper.`);
  } else {
    console.log(`No one won! You and computer choosed ${computerChoice}.`);
  }
}