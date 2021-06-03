"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message
}

function backgroundColor(color) {
    document.querySelector("body").style.backgroundColor = color
}

function numberWidth(width) {
    document.querySelector(".number").style.width = width
}

function numberSecret(number) {
    document.querySelector(".number").textContent = number
}

function scoreText(myScore) {
    document.querySelector(".score").textContent = myScore
}


document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    console.log("guess", guess);
    if (score > 0) {
        if (!guess) {
            displayMessage("⛔ No Number")
            backgroundColor("#222")
            numberWidth("15rem")
        } else if (guess === secretNumber) {
            displayMessage("🤜 Correct Number")
            backgroundColor("#60b347")
            numberWidth("30rem")
            numberSecret(secretNumber)
            if (score > highScore) {
                highScore = score
                document.querySelector(".highscore").textContent = highScore
            }
        } else if (guess !== secretNumber) {
            score--
            displayMessage(guess > secretNumber ? "📈 Too High" : "📈 Too Low")
            backgroundColor("#222")
            numberWidth("15rem")
            scoreText(score)
        }
    } else {
        displayMessage("😢 You Lose")
    }
})


document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...")
    backgroundColor("#222")
    numberWidth("15rem")
    numberSecret("?")
    scoreText(score)
    document.querySelector(".guess").value = "";
})