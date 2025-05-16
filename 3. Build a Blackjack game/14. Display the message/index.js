let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 1. Store the message-el paragraph in a variable called messageEl

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
     
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
     
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
    
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message   
}
