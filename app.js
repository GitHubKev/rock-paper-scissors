let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choice = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random()*3)
    return choice[random]
}

function restart(){
    buttons.forEach(elem => {
        elem.disabled = true
    })
}


function playRound(playerSelection) {   
    let result = ""
    let computerSelection = computerPlay();

    if((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")){
        playerScore += 1
        result = `You Won! <br/> You chose ${playerSelection} and the Computer chose ${computerSelection} <br/><br/>
        Your Score: ${playerScore} <br/> Computer's Score: ${computerScore}`
        if(playerScore === 5){
            result = `Congratulations!!! You beat the computer <br/><br/> Your Score: ${playerScore} <br/> Computer's Score: ${computerScore}
            <br/><br/>Refresh the page to play again`
            restart()
        }
    } else if (playerSelection === computerSelection){
        result = `Draw, you both chose ${playerSelection} <br/><br/>
        Your Score: ${playerScore} <br/> Computer's Score: ${computerScore}`

    } else {
        computerScore += 1
        result = `You lost! <br/> You chose ${playerSelection} and the Computer chose ${computerSelection} <br/><br/>
        Your score: ${playerScore} <br/> Computer's Score: ${computerScore}`
        if(computerScore === 5){
            result = `You lost! <br/><br/> Your Score: ${playerScore} <br/> Computer's Score: ${computerScore}
            <br/><br/> Refresh the page to play again`
            restart()
        }
    }
    document.getElementById("result").innerHTML = result
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})