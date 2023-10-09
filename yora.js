// Get DOM elements
const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const scoreValue = document.getElementById('scoreValue');
const overallScoreValue = document.getElementById('overallScoreValue');
const winnerImg = document.getElementById('winnerImg');
const overallScoreDiv = document.getElementById('overallScore');

// Initialize scores and attempts
let playerScore = 0;
let computerScore = 0;
let attempts = 0;
let overallPlayerScore = 0;
let overallComputerScore = 0;

// Event listeners for user choices
choices.forEach(choice => choice.addEventListener('click', play));

function play(e) {
    if (attempts === 10) {
        return; // Game has ended, no more plays allowed
    }

    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    displayResult(computerChoice);

    if (winner === 'player') {
        result.innerHTML = 'You win!';
        playerScore++;
        showWinnerImage('You win!');
    } else if (winner === 'computer') {
        result.innerHTML = 'Computer wins!';
        computerScore++;
        showWinnerImage('Computer wins!');
    } else {
        result.innerHTML = "It's a draw!";
        showWinnerImage("It's a draw!");
    }

    attempts++;

    if (attempts === 10) {
        showFinalScore();
    } else {
        scoreValue.textContent = `${playerScore} - ${computerScore}`;
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player'; // Fixed: Player wins
    } else {
        return 'computer';
    }
}

function displayResult(computerChoice) {
    const computerImg = document.querySelector(`#${computerChoice}`);
    computerImg.classList.add('animate-rock');
    setTimeout(() => {
        computerImg.classList.remove('animate-rock');
    }, 2000);
}

function showWinnerImage(message) {
    winnerImg.style.display = 'block'; // Show the winner image
    winnerImg.alt = message;
}

function showFinalScore() {
    if (playerScore > computerScore) {
        result.innerHTML = 'You win the game!';
    } else if (playerScore < computerScore) {
        result.innerHTML = 'Computer wins the game!';
    } else {
        result.innerHTML = "It's a tie!";
    }
    scoreValue.textContent = `${playerScore} - ${computerScore}`;

    // Update overall score
    overallPlayerScore += playerScore;
    overallComputerScore += computerScore;
    overallScoreValue.textContent = `${overallPlayerScore} - ${overallComputerScore}`;

    // Reset individual round scores
    playerScore = 0;
    computerScore = 0;
    attempts = 0;

    // Show the overall score
    overallScoreDiv.style.display = 'block';
}
