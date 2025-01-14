// Questions for the quiz
const questions = [
    "Do you enjoy helping others without expecting anything in return?",
    "Do you often volunteer your time for causes you believe in?",
    "Do you feel empathy for people in need?",
    "Do you try to avoid judging others?",
    "Do you think sharing is important?",
    "Do you like collaborating with others to achieve a common goal?",
    "Do you stay calm and supportive in tough situations?",
    "Do you encourage others to do their best?",
    "Do you avoid conflicts whenever possible?",
    "Do you believe kindness can change the world?"
];

// Quiz variables
let currentQuestionIndex = 0;
let scores = [];

// DOM elements
const questionText = document.getElementById('questionText');
const answerRange = document.getElementById('answerRange');
const answerValue = document.getElementById('answerValue');
const nextButton = document.getElementById('nextButton');
const result = document.getElementById('result');
const resultMessage = document.getElementById('resultMessage');
const ticketButton = document.getElementById('ticketButton');

// Display the first question
function showQuestion(index) {
    questionText.textContent = questions[index];
}

// Update answer value display
answerRange.addEventListener('input', () => {
    answerValue.textContent = answerRange.value;
});

// Handle "Next" button click
nextButton.addEventListener('click', () => {
    scores.push(parseInt(answerRange.value));
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
        answerRange.value = 5;
        answerValue.textContent = 5;
    } else {
        // Calculate average score
        const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

        // Show result
        document.getElementById('quiz').classList.add('hidden');
        result.classList.remove('hidden');

        if (averageScore >= 7) {
            resultMessage.innerHTML = "🎉 You're warmly welcomed to join our charity event!";
            ticketButton.classList.remove('hidden');
        } else {
            resultMessage.innerHTML = "😔 Unfortunately, our event might not provide you with the best experience.";
        }
    }
});

// Initialize quiz
showQuestion(currentQuestionIndex);
