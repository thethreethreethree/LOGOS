const questions = [
    {
        question: "🌍 How do you react when a stranger asks you for directions?",
    },
    {
        question: "🤷 If a friend makes a mistake that affects you, what’s your move?",
    },
    {
        question: "🗣️ When someone shares a personal problem, how do you respond?",
    },
    {
        question: "🗨️ How do you handle disagreements with friends?",
    },
    {
        question: "👀 How do you feel when you see someone struggling in public?",
    },
    {
        question: "👥 When working in a team, how do you contribute?",
    },
    {
        question: "💖 How do you feel about random acts of kindness?",
    },
    {
        question: "🛡️ What’s your reaction to seeing someone treated unfairly?",
    },
    {
        question: "😠 If you’re having a bad day, how do you treat others?",
    },
    {
        question: "💪 How do you feel about volunteering for a cause?",
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

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

    const selectedValue = document.getElementById('rating').value;
    totalScore += parseInt(selectedValue); // Add selected answer's score
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        displayResult(totalScore); // Display the final result
    }
});

// Function to display the result based on the total score
function displayResult(score) {
    const resultDiv = document.getElementById('result');

    const maxScore = questions.length * 4; // Maximum possible score
    if (score >= (maxScore * 0.8)) {
        resultDiv.innerHTML = `<h2>Yes! You're a very kind and friendly person. 🎉</h2><p>You scored ${score} out of ${maxScore}. You're invited to the charity party! <a href="https://www.google.com">Buy your ticket here</a>.</p>`;
    } else {
        resultDiv.innerHTML = `<h2>Sorry, you're not a perfect match for this event. 😔</h2><p>You scored ${score} out of ${maxScore}. Thank you for taking the test.</p>`;
    }
}

// Display the first question when the page loads
displayQuestion(currentQuestionIndex);
