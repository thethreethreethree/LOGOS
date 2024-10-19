const questions = [
    {
        question: "When someone asks for help, I feel motivated to assist them."
    },
    {
        question: "I enjoy meeting new people and learning about their experiences."
    },
    {
        question: "I am open to participating in group activities and events."
    },
    {
        question: "I try to stay positive and encourage others, even when times are tough."
    },
    {
        question: "I believe that small acts of kindness can make a big difference."
    },
    {
        question: "I am willing to share my thoughts and ideas with others in a friendly way."
    },
    {
        question: "I find joy in making others smile or laugh."
    },
    {
        question: "I value collaboration and teamwork in achieving common goals."
    },
    {
        question: "I feel comfortable approaching someone I don’t know to start a conversation."
    },
    {
        question: "I believe in supporting causes that help the community."
    }
];

let currentQuestionIndex = 0;

function displayQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = questions[index];

    questionContainer.innerHTML = `
        <div class="question">
            <p>${question.question}</p>
            <input type="range" id="rating" min="0" max="4" step="1" value="0">
            <p>Rating: <span id="rating-value">0</span></p>
        </div>
    `;

    const ratingInput = document.getElementById('rating');
    const ratingValue = document.getElementById('rating-value');

    // Update the displayed value when the slider is moved
    ratingInput.addEventListener('input', function() {
        ratingValue.textContent = ratingInput.value;
    });
}

// Handle form submission
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading

    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        displayResult(); // Display the final result
    }
});

// Function to display the result based on the final question answered
function displayResult() {
    const questionContainer = document.getElementById('question-container');
    const resultDiv = document.getElementById('result');

    // Remove question boxes
    questionContainer.innerHTML = '';

    // Polite denial or warm welcome based on final question answered
    if (currentQuestionIndex === questions.length) {
        resultDiv.innerHTML = `<h2>Thank you for participating! 😔</h2><p>We appreciate your effort in taking the test, but it seems like you may not be the best fit for this event. We hope you have a wonderful day!</p>`;
    } else {
        resultDiv.innerHTML = `<h2>Welcome! 🎉</h2><p>You're a great fit for our event! We're excited to have you join us! <a href="https://www.google.com">Buy your ticket here</a>.</p>`;
    }
}

// Display the first question when the page loads
displayQuestion(currentQuestionIndex);
