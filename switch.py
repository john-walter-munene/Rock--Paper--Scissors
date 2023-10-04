function game(playerSelection, computerSelection) {
  // Check if playerSelection or computerSelection is null or undefined
  if (playerSelection === null || playerSelection === undefined ||
      computerSelection === null || computerSelection === undefined) {
    return "Invalid input.";
  }

  // Convert both selections to lowercase for case-insensitive comparison
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  // Use a switch statement to determine the game result
  switch (player) {
    case "rock":
      switch (computer) {
        case "rock":
          return "It's a tie!";
        case "paper":
          return "You lose! Paper beats rock.";
        case "scissors":
          return "You win! Rock beats scissors.";
        default:
          return "Invalid computer selection.";
      }
      break;
    case "paper":
      switch (computer) {
        case "rock":
          return "You win! Paper beats rock.";
        case "paper":
          return "It's a tie!";
        case "scissors":
          return "You lose! Scissors beats paper.";
        default:
          return "Invalid computer selection.";
      }
      break;
    case "scissors":
      switch (computer) {
        case "rock":
          return "You lose! Rock beats scissors.";
        case "paper":
          return "You win! Scissors beats paper.";
        case "scissors":
          return "It's a tie!";
        default:
          return "Invalid computer selection.";
      }
      break;
    default:
      return "Invalid player selection.";
  }
}

// Example usage
const playerSelection = "rock";
const computerSelection = "scissors"; // Replace with your computer's choice
console.log(game(playerSelection, computerSelection));
