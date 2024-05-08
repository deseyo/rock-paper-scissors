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
  let inputHumanChoice;
  while (true) {
    inputHumanChoice = prompt(`Enter your choice: `);
    try {
      inputHumanChoice = inputHumanChoice.toLowerCase();
    } 
    catch {
      return inputHumanChoice;
    }

    if (inputHumanChoice != `rock` && inputHumanChoice != `paper` && inputHumanChoice != `scissors`) {
      alert(`Wrong input, try again.`);
      continue;
    } else {
      break;
    }
  }
  return inputHumanChoice
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

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

  const numberOfRouds = 5;
  let gameCanceled;
  for (let roundCount = 1; roundCount <= numberOfRouds; roundCount++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    if (humanSelection == null) {
      gameCanceled = true;
      break
    }
    playRound(computerSelection, humanSelection);
  }

  if (gameCanceled === true) {
    console.log("Game canceled");
  } else if (computerScore > humanScore) {
    console.log(`Game over! Computer won. Score: computer ${computerScore}, user ${humanScore}`);
  } else if (humanScore > computerScore) {
    console.log(`Game over! You won. Score: Computer ${computerScore}, User ${humanScore}`);
  } else {
    console.log(`Game over! No one won. Score: User ${humanScore}, Computer ${computerScore}`);
  }
}

playGame();