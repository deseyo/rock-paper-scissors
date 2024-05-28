let computerScore = 0;
let humanScore = 0;
let roundsScore = 0;
const btnContainer = document.querySelector("#btn-container");
const scoreRounds = document.querySelector("#score-rounds")
const scoreComputer = document.querySelector("#score-computer");
const scoreHuman = document.querySelector("#score-human");
const scoreWinner = document.querySelector("#score-winner");
const btnRestart = document.querySelector("#btn-restart");

btnContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "btn-rock":
      checkGameStatus("rock");
      break;
    case "btn-paper":
      checkGameStatus("paper");
      break;
    case "btn-scissors":
      checkGameStatus("scissors");
      break;
  }
});

btnRestart.addEventListener("click", () => {
  let choice = confirm("Do you confirm?");

  if (choice === true) {
    scoreWinner.textContent = "";
    roundsScore = 0;
    computerScore = 0;
    humanScore = 0;
    scoreRounds.textContent = `Round: ${roundsScore}`;
    scoreComputer.textContent = `Computer: ${computerScore}`;
    scoreHuman.textContent = `Human: ${humanScore}`;
  }
  });

function checkGameStatus(humanChoice) {
  if (roundsScore <= 4) {
    roundsScore++
    playRound(getComputerChoice(), humanChoice)
    if (roundsScore == 5) {
      if (computerScore > humanScore) {
        scoreWinner.textContent = `You lost! Computer won.`;
        scoreWinner.style.color = "red";
      } else if (computerScore < humanScore) {
        scoreWinner.textContent = `You won! Computer lost.`;
        scoreWinner.style.color = "green";
      } else { 
        scoreWinner.textContent = "Draw! No one won.";
        scoreWinner.style.color = "grey";
      }
    } 
  }
}

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

function playRound(computerChoice, humanChoice) {
  if (computerChoice === `rock` && humanChoice === `scissors`) {
    computerScore += 1;
  } else if (computerChoice === `paper` && humanChoice === `rock`) {
    computerScore += 1;
  } else if (computerChoice === `scissors` && humanChoice === `paper`) {
    computerScore += 1;
  } else if (humanChoice === `rock` && computerChoice === `scissors`) {
    humanScore += 1;
  } else if (humanChoice === `paper` && computerChoice === `rock`) {
    humanScore += 1;
  } else if (humanChoice === `scissors` && computerChoice === `paper`) {
    humanScore += 1;
  }

  scoreComputer.textContent = `Computer: ${computerScore}`;
  scoreHuman.textContent = `Human: ${humanScore}`;
  scoreRounds.textContent = `Round: ${roundsScore}`;
}



