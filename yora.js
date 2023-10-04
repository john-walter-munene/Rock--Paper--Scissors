function playRound(playerSelection, computerSelection) {
  // Convert both selections to lowercase for case-insensitive comparison
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "Its a tie!;
  } else if (
    (player === rock && computer === scissors) ||
    (player === scissors && computer === paper) ||
    (player === paper && computer === rock)
  ) {
    return ;
  } else {
    return ;
  }
}

// A function to randomly select a choice for the computer
function getComputerChoice() {
  const choices = [rock, paper, scissors];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const playerSelection = rock;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));' >> yora.js

exit
echo 'function playRound(playerSelection, computerSelection) {
  // Convert both selections to lowercase for case-insensitive comparison
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return Its a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return `You win! ${player} beats ${computer}.`;
  } else {
    return `You lose! ${computer} beats ${player}.`;
  }
}

// A function to randomly select a choice for the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
