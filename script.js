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

let scores = [];

document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.getElementById('quiz');
    const intro = document.getElementById('intro');
    const result = document.getElementById('result');
    const questionsDiv = document.getElementById('questions');
    const resultMessage = document.getElementById('resultMessage');
    const submitButton = document.getElementById('submitButton');
    const restartButton = document.getElementById('restartButton');

    // Generate questions
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <label>${question}</label>
            <input type="range" min="0" max="10" value="5" class="slider" data-index="${index}">
        `;
        questionsDiv.appendChild(questionDiv);
    });

    // Show quiz
    intro.addEventListener('click', () => {
        intro.classList.add('hidden');
        quiz.classList.remove('hidden');
    });

    // Handle form submission
    submitButton.addEventListener('click', () => {
        scores = [...document.querySelectorAll('.slider')].map(slider => parseInt(slider.value));
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
    });

    // Restart the test
    restartButton.addEventListener('click', () => {
        scores = [];
        questionsDiv.innerHTML = '';
        result.classList.add('hidden');
        intro.classList.remove('hidden');
    });
});
