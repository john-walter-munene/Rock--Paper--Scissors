function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let computerChoice = choices[Math.floor(Math.random()*choices.length)];

    let answer = computerChoice.toLowerCase();

    return answer;
}

function playRound(playerSelection, computerSelection) {

    let winner = '';
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        winner = `Game tie. You both chose ${computerSelection}`
    } else {
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            winner = "Player wins: rock crushes scissors."
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            winner = "Player wins: paper covers rock."
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            winner = "Player wins: scissors cuts paper."
        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            winner = "Computer wins: rock crushes scissors."
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
            winner = "Computer wins: paper covers rock."
        } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
            winner = "Computer wins: scissors cuts paper";
        } else {
            winner = "No round!";
        }
    }

    return winner ;
}

const buttons = document.querySelectorAll('button');
let declareWinner = document.querySelector('.winner');
let overallWinner = document.querySelector('.overall-winner'); 

buttons.forEach((button) => {
    button.addEventListener('click', showWinner);
});

function showWinner(event) {
    let playerChoice = event.target.className;
    let computerChoice = getComputerChoice();
    declareWinner.textContent = '';
    let gameWinner = playRound(playerChoice, computerChoice);
    declareWinner.textContent = gameWinner;
    updateScores(gameWinner);
    let finalWinner = allWinner(playerWins, computerWins);
    overallWinner.textContent = finalWinner
}

let computerWins = 0;
let playerWins = 0;
let ties = 0;

let runningCompWin = document.querySelector('.computer');
let runningPlayerWin = document.querySelector('.player');
let runningTies = document.querySelector('.ties');

function updateScores(winner) {
    let winnerCheck = winner.toLowerCase();
    let players = ['player', 'computer'];
    if (winnerCheck.match(players[0])) {
        playerWins += 1;
        runningPlayerWin.textContent = `Player Wins: ${playerWins}`;
    } else if (winnerCheck.match(players[1])) {
        computerWins += 1;
        runningCompWin.textContent = `Computer Wins: ${computerWins}`;
    } else {
        ties += 1;
        runningTies.textContent = `Tie Counts: ${ties}`;
    }
}

function allWinner(playerScore, computerScore) {
    let overallWinnerText = '';
    if (playerScore === 5) {
        overallWinnerText = "Player wins 5 rounds!";
    } else if (computerScore === 5) {
        overallWinnerText = "Computer wins 5 rounds!"
    }
    return overallWinnerText;
}