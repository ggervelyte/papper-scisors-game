const playerRock = document.querySelector(".player-rock")
const playerScissors = document.querySelector(".player-scissors")
const playerPaper = document.querySelector(".player-paper")
const button = document.querySelector("button")

const pick = document.querySelector(".pick")
const computerRock = document.querySelector(".computer-rock")
const computerScissors = document.querySelector(".computer-scissors")
const computerPaper = document.querySelector(".computer-paper")
const pickedSymbol = document.querySelectorAll(".picked-symbol")
let playerScore = document.querySelector("#player-score")
let computerScore = document.querySelector("#computer-score")

let playerPick = ""
let computerPick = ""
// target symbol
function playerPickedSymbol(e) {
    pickedSymbol.forEach(x => x.classList.remove("border"))
    e.target.classList.add("border")
    if(e.target.className.includes("player-rock")) playerPick = "player-rock"
    if(e.target.className.includes("player-scissors")) playerPick = "player-scissors"
    if(e.target.className.includes("player-paper")) playerPick = "player-paper"
    console.log(playerPick)
}
pickedSymbol.forEach(x => x.onclick = playerPickedSymbol)

// Button
button.addEventListener("click", function() {
computerPick  = Math.floor(Math.random() * 3)

    if(computerPick === 0) {
       computerPick = "computer-rock"
       pick.innerHTML = 
       `
       <span class="pick">${computerPick}</span>
       `
       effects()
    }else if(computerPick === 1) {
        computerPick = "computer-scissors"
        pick.innerHTML = 
       `
       <span class="pick">${computerPick}</span>
       `
       effects()
    } else if(computerPick === 2) {
        computerPick = "computer-paper"
        pick.innerHTML = 
       `
       <span class="pick">${computerPick}</span>
       `
       effects()
    }
   
    // console.log(computerPick)
    
    theGame()
})


//efeext pc pick
function effects() {
    if(computerPick === "computer-rock") {
        computerRock.classList.add("hover")
    } else if(computerPick !== "computer-rock") {
        computerRock.classList.remove("hover")
    }if(computerPick === "computer-scissors") {
        computerScissors.classList.add("hover")
    } else if(computerPick !== "computer-scissors") {
        computerScissors.classList.remove("hover")
    }if(computerPick === "computer-paper") {
        computerPaper.classList.add("hover")
    } else if(computerPick !== "computer-paper") {
        computerPaper.classList.remove("hover")
    }
}


// the game 
let playerScore1 = 0
let computerScore1 = 0
function theGame() {
    if(playerPick === "player-rock" && computerPick === "computer-rock") {
        alert("Tie")
    }else if (playerPick === "player-scissors" && computerPick === "computer-scissors") {
        alert("Tie")
    }else if(playerPick === "player-paper" && computerPick === "computer-paper") {
         alert("Tie")
    } else if(playerPick === "player-rock" && computerPick === "computer-scissors") {
        playerScore1++
        playerScore.innerHTML = 
        `
        <span id="player-score">${playerScore1}</span>
        `
    } else if(playerPick === "player-rock" && computerPick === "computer-paper") {
        playerScore1++
        playerScore.innerHTML = 
        `
        <span id="player-score">${playerScore1}</span>
        `
    } else if(playerPick === "player-scissors" && computerPick === "computer-rock") {
        computerScore1++
        computerScore.innerHTML = 
        `
        <span id="computer-score">${computerScore1}</span>
        `
    }else if(playerPick === "player-paper" && computerPick === "computer-rock"){
        computerScore1++
        computerScore.innerHTML = 
        `
        <span id="computer-score">${computerScore1}</span>
        `
    } else if(playerPick === "player-scissors" && computerPick === "computer-paper") {
        playerScore1++
        playerScore.innerHTML = 
        `
        <span id="player-score">${playerScore1}</span>
        `
    }else if(playerPick === "player-paper" && computerPick === "computer-scissors") {
        computerScore1++
        computerScore.innerHTML = 
        `
        <span id="computer-score">${computerScore1}</span>
        `
    }
    
}
