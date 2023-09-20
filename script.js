function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let computerChoice = choices[Math.floor(Math.random()*choices.length)];

    let answer = computerChoice.toLowerCase();

    return answer;
}

function playRound(playerSelection, computerSelection) {

    let winner = '';

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
            alert("Please input a valid game value.")
            winner = "No round!"
        }
    }

    return winner ;
}

let computerChoice = getComputerChoice();

function game() {
    for (let i = 0; i <= 5; i++) {
        let playerChoice = prompt('Enter you choice', '').toLowerCase();
        console.log(playRound(playerChoice, computerChoice));
    }
};

game();



