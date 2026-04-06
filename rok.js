function getCompChoice(){
    let rando = Math.floor(Math.random() * 3 )  
    let RPS = ""
    if(rando == 0)
        RPS = "Rock"
    else if(rando == 1)
        RPS = "Paper"
    else
        RPS = "Scissors"
    return RPS
}
function getHumChoice(){
    let Pick = window.prompt("Rock paper or scissors")
}