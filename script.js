const questions = [
    {
        question: "1. How do you react when a stranger asks you for directions?",
        options: [
            { text: "I stop what I’m doing and help them immediately.", value: 3 },
            { text: "I help them, but only if I’m not in a rush.", value: 2 },
            { text: "I point them in the general direction but don’t spend much time.", value: 1 },
            { text: "I usually avoid interacting with strangers.", value: 0 },
        ],
    },
    {
        question: "2. If a friend makes a mistake that impacts you, what do you do?",
        options: [
            { text: "I forgive them and help them fix the situation.", value: 3 },
            { text: "I forgive them, but let them handle the consequences.", value: 2 },
            { text: "I forgive them, but hold a small grudge.", value: 1 },
            { text: "I get upset and let them know how I feel.", value: 0 },
        ],
    },
    {
        question: "3. When someone shares a personal problem with you, how do you respond?",
        options: [
            { text: "I actively listen and offer emotional support.", value: 3 },
            { text: "I listen and give practical advice.", value: 2 },
            { text: "I listen briefly, but don’t get too involved.", value: 1 },
            { text: "I try to avoid conversations about personal problems.", value: 0 },
        ],
    },
    {
        question: "4. How do you handle disagreements with friends or family?",
        options: [
            { text: "I calmly discuss and resolve the issue.", value: 3 },
            { text: "I try to compromise and avoid conflict.", value: 2 },
            { text: "I sometimes raise my voice but try to resolve it later.", value: 1 },
            { text: "I often argue and find it hard to forgive.", value: 0 },
        ],
    },
    {
        question: "5. How do you react when you see someone struggling with a task in public?",
        options: [
            { text: "I offer help immediately, even if I don’t know them.", value: 3 },
            { text: "I offer help if I feel it’s appropriate.", value: 2 },
            { text: "I wait for someone else to help.", value: 1 },
            { text: "I ignore the situation and continue with my day.", value: 0 },
        ],
    },
    {
        question: "6. When working in a team, how do you approach cooperation?",
        options: [
            { text: "I take on extra work if needed and support my teammates.", value: 3 },
            { text: "I do my part and help when asked.", value: 2 },
            { text: "I do my part, but don’t go beyond it.", value: 1 },
            { text: "I focus on my own tasks and avoid getting involved in others' work.", value: 0 },
        ],
    },
    {
        question: "7. How do you feel about random acts of kindness, such as paying for someone’s coffee?",
        options: [
            { text: "I love doing small acts of kindness whenever possible.", value: 3 },
            { text: "I enjoy it occasionally, if the opportunity arises.", value: 2 },
            { text: "I think it’s nice but rarely go out of my way to do it.", value: 1 },
            { text: "I don’t see the point in doing random acts of kindness.", value: 0 },
        ],
    },
    {
        question: "8. What’s your reaction when you see someone being treated unfairly?",
        options: [
            { text: "I speak up and stand up for them.", value: 3 },
            { text: "I sympathize, but don’t always get involved.", value: 2 },
            { text: "I feel bad but prefer not to interfere.", value: 1 },
            { text: "I tend to ignore situations that don’t involve me.", value: 0 },
        ],
    },
    {
        question: "9. If you’re in a bad mood, how do you treat others around you?",
        options: [
            { text: "I make an effort to be kind despite how I feel.", value: 3 },
            { text: "I try to be polite, but it’s harder for me.", value: 2 },
            { text: "I can be short with others, but don’t mean to be.", value: 1 },
            { text: "I often let my mood affect my interactions negatively.", value: 0 },
        ],
    },
    {
        question: "10. How do you feel about volunteering for a good cause?",
        options: [
            { text: "I actively seek out volunteer opportunities.", value: 3 },
            { text: "I participate when I can, but don’t go out of my way to find them.", value: 2 },
            { text: "I volunteer if asked, but don’t usually initiate.", value: 1 },
            { text: "I rarely volunteer for anything.", value: 0 },
        ],
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
            ${question.options.map(option => `
                <label>
                    <input type="radio" name="q${index + 1}" value="${option.value}"> ${option.text}
                </label><br>
            `).join('')}
        </div>
    `;
}

// Handle form submission
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading

    const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
    if (selectedOption) {
        totalScore += parseInt(selectedOption.value); // Add selected answer's score
        currentQuestionIndex++;

        // Check if there are more questions
        if (currentQuestionIndex < questions.length) {
            displayQuestion(currentQuestionIndex);
        } else {
            displayResult(totalScore); // Display the final result
        }
    } else {
        alert("Please select an answer before proceeding."); // Alert if no option is selected
    }
});

// Function to display the result based on the total score
function displayResult(score) {
    const resultDiv = document.getElementById('result');

    const maxScore = questions.length * 3; // Maximum possible score
    if (score >= (maxScore * 0.8)) {
        resultDiv.innerHTML = `<h2>Yes! You're a very kind and friendly person. 🎉</h2><p>You scored ${score} out of ${maxScore}. You're invited to the charity party! <a href="https://www.google.com">Buy your ticket here</a>.</p>`;
    } else {
        resultDiv.innerHTML = `<h2>Sorry, you're not a perfect match for this event. 😔</h2><p>You scored ${score} out of ${maxScore}. Thank you for taking the test.</p>`;
    }
}

// Display the first question when the page loads
displayQuestion(currentQuestionIndex);
