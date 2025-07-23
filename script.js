let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const result = document.getElementById("result");
    const restartBtn = document.getElementById("restartBtn");

    if (!guess || guess < 1 || guess > 100) {
        result.textContent = "⛔ Please enter a valid number between 1 and 100.";
        return;
    }

    if (guess === randomNumber) {
        result.textContent = `🎉 Correct! The number was ${randomNumber}.`;
        restartBtn.style.display = "inline-block";
    } else if (guess < randomNumber) {
        result.textContent = "🔼 Too low! Try a higher number.";
    } else {
        result.textContent = "🔽 Too high! Try a lower number.";
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("guessInput").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("restartBtn").style.display = "none";
}
