
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerMove = ["Rock", "Paper", "Scissors"];
    return computerMove[Math.floor(Math.random() * computerMove.length)];
    }  

function game() {

    function playRound(playerSelection, computerSelection) {

        if (playerScore === 3 || computerScore === 3) {
            declareWinner();
        } 

        let playerPrompt = prompt("Choose one: Rock, Paper, Scissors");

        playerSelection = playerPrompt.toLowerCase();
        computerSelection = computerPlay().toLowerCase();

        if (playerSelection == computerSelection) {
            console.log("It's a tie!");
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            ++computerScore;
            console.log("You lost that round! Paper beats rock.\
            Your score: " + playerScore + " Computer score: " + computerScore);
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            ++computerScore;
            console.log("You lost that round!  Scissors beats paper.\
            Your score: " + playerScore + " Computer score: " + computerScore);
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            ++computerScore;
            console.log("You lost that round! Rock beats scissors.\
            Your score: " + playerScore + " Computer score: " + computerScore);
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            ++playerScore;
            console.log("You won that round! Rock beats scissors.\
            Your score: " + playerScore + " Computer score: " + computerScore);
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            ++playerScore;
            console.log("You won that round! Paper beats rock.\
            Your score: " + playerScore + " Computer score: " + computerScore);
        } else {
            ++playerScore;
            console.log("You won that round! Scissors beats paper.\
            Your score: " + playerScore + " Computer score: " + computerScore);

        }

        function declareWinner () {
            if (playerScore > computerScore) {
                console.log ("You won the game!");
            } else if (playerScore < computerScore) {
                console.log ("You lost the game...");
            } else {
                console.log ("The game is tied!")
            }
        }
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();



}

game();