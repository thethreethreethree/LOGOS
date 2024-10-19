const questions = [
    "I often help others in need.",
    "I enjoy volunteering my time.",
    "I show empathy towards people.",
    "I consider the feelings of others before acting.",
    "I often give compliments.",
    "I try to resolve conflicts peacefully.",
    "I believe in fairness for everyone.",
    "I listen actively when someone is talking.",
    "I forgive others easily.",
    "I feel joy when others succeed."
];

let currentQuestionIndex = 0;
let scores = [];

document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.getElementById('quiz');
    const intro = document.getElementById('intro');
    const result = document.getElementById('result');
    const questionContainer = document.getElementById('questionContainer');
    const resultMessage = document.getElementById('resultMessage');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const restartButton = document.getElementById('restartButton');

    // Show the first question
    function showQuestion(index) {
        questionContainer.innerHTML = `
            <div class="question-box">
                <label>${questions[index]}</label>
                <input type="range" min="0" max="10" value="5" class="slider" data-index="${index}">
            </div>
        `;
        prevButton.classList.toggle('hidden', index === 0);
    }

    // Show quiz
    intro.addEventListener('click', () => {
        intro.classList.add('hidden');
        quiz.classList.remove('hidden');
        showQuestion(currentQuestionIndex);
    });

    // Handle next button click
    nextButton.addEventListener('click', () => {
        const slider = document.querySelector('.slider[data-index="' + currentQuestionIndex + '"]');
        scores[currentQuestionIndex] = parseInt(slider.value);

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            // Calculate the average score
            scores[currentQuestionIndex] = parseInt(slider.value); // Save the last question's score
            const kindnessScore = scores.reduce((a, b) => a + b, 0);
            const averageScore = kindnessScore / questions.length;

            // Result logic
            if (averageScore >= 7) {
                resultMessage.innerHTML = "🎉 You're warmly welcomed to join our charity event!";
            } else {
                resultMessage.innerHTML = "😔 Unfortunately, our event might not provide you with the best experience.";
            }

            quiz.classList.add('hidden');
            result.classList.remove('hidden');
            restartButton.classList.remove('hidden');
        }
    });

    // Handle previous button click
    prevButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    });

    // Restart the test
    restartButton.addEventListener('click', () => {
        scores = [];
        currentQuestionIndex = 0;
        questionContainer.innerHTML = '';
        result.classList.add('hidden');
        intro.classList.remove('hidden');
    });
});
