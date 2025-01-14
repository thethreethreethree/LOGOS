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
let totalScore = 0;
const passingScore = 7 * questions.length; // 70% passing rate

// DOM elements
const questionText = document.getElementById('questionText');
const answerSlider = document.getElementById('answerSlider');
const answerValue = document.getElementById('answerValue');
const nextButton = document.getElementById('nextButton');
const result = document.getElementById('result');
const resultMessage = document.getElementById('resultMessage');
const ticketButton = document.getElementById('ticketButton');

// Update the displayed value of the slider
answerSlider.addEventListener('input', () => {
    answerValue.textContent = answerSlider.value;
});

// Display the first question
function showQuestion(index) {
    questionText.textContent = questions[index];
    answerSlider.value = 5; // Reset slider to middle
    answerValue.textContent = 5; // Reset displayed value
}

// Handle "Next" button click
nextButton.addEventListener('click', () => {
    // Add the slider value to the total score
    totalScore += parseInt(answerSlider.value);

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        // Show result
        document.getElementById('quiz').classList.add('hidden');
        result.classList.remove('hidden');

        if (totalScore >= passingScore) {
            resultMessage.textContent = "🎉 Congratulations! You're a great fit for our charity event.";
            ticketButton.classList.remove('hidden');
        } else {
            resultMessage.textContent = "Thank you for taking the test. Our event may not be the best match for you.";
        }
    }
});

// Initialize quiz
showQuestion(currentQuestionIndex);
