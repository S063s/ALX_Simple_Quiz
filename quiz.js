function checkAnswer() {
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const correctAnswer = document.getElementById("correct-answer");

    if (!userAnswer) {
        correctAnswer.textContent = "Please select an answer.";
        return;
    }

    const answer = userAnswer.value;
    if (answer === "4") {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again.";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
