function getComputerChoice() {
  // Math.random return values between 0 and 1 so by multiplying it by 2 and then rounding it there is possibility to return 0, 1 or 2
  let randomComputerChoice = Math.round(Math.random() * 2);

  // depending on which number randomComputerChoice variable choosed there are few possibilities of final variable value which will be returned
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

    // try checks if user input is empty string or any character by trying to convert it to lower case, if it can't then catch assumes that value of input is null which means that user clicked cancel in prompt window so it returns null value of input
    try {
      inputHumanChoice = inputHumanChoice.toLowerCase();
    } 
    catch {
      return inputHumanChoice;
    }

    // checks if user didn't type rock, paper or scissors, if didn't then it recall the loop and prompt comes up once again, but if typed then it breaks the loop and returns the value
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
    // define selection for user and computer each time loop runs by using two functions responsible for that
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    // checks if humanSelection is null if so it means that user clicked cancel in prompt window in getHumanChoice() function, so gameCanceled variable is set to true and loop breaks
    if (humanSelection == null) {
      gameCanceled = true;
      break
    }

    // puts values of computer and user selection to playRound function which determines who won the round or if user and computer choosed the same value
    playRound(computerSelection, humanSelection);
  }

  // check if user canceled the game, who won the game or if game ended in a draw
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