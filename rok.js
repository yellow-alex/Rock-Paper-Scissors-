let humScore = 0
let compScore = 0 

function getCompChoice(){
    let rando = Math.floor(Math.random() * 3 )  
    let RPS = ""
    if(rando == 0)
        RPS = "rock"
    else if(rando == 1)
        RPS = "paper"
    else
        RPS = "scissors"
    return RPS
}

function getHumChoice(){
    let Pick = window.prompt("Rock paper or scissors").toLowerCase()
    return Pick
}

function playRound(Human, Computer){
    if(Human == Computer){
        alert(`you both picked ${Human} you both got a point.`)
        compScore++
        humScore++
    }
    else if((Human == "rock" && Computer == "paper") || (Human == "scissors" && Computer == "rock") || (Human == "paper" && Computer == "scissors")){
        alert(`On no! ${Human} loses to ${Computer}, Computer gets one point.`)
        compScore++
    }
    else{
        alert(`Good job! ${Human} beats ${Computer}, you get one point.`)
        humScore++
    }
}
function playGame(){
    let hum = getHumChoice()
    let comp = getCompChoice()
    playRound(hum, comp)
}

playGame()
playGame()
playGame()
playGame()
playGame()

if(humScore > compScore)
    alert('ggs you Win!')
else if(compScore > humScore)
    alert('lmfao you lost, loser!')
else
    alert('What the fuck? how you picked both the same one five tines in a row ?')
