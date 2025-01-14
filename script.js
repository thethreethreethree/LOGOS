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

// DOM elements
const questionText = document.getElementById('questionText');
const nextButton = document.getElementById('nextButton');
const result = document.getElementById('result');
const resultMessage = document.getElementById('resultMessage');
const ticketButton = document.getElementById('ticketButton');

// Display the first question
function showQuestion(index) {
    questionText.textContent = questions[index];
}

// Handle "Next" button click
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        // Show result
        document.getElementById('quiz').classList.add('hidden');
        result.classList.remove('hidden');

        // Always pass the test and show the ticket button
        resultMessage.innerHTML = "🎉 You're warmly welcomed to join our charity event!";
        ticketButton.classList.remove('hidden');
    }
});

// Initialize quiz
showQuestion(currentQuestionIndex);
