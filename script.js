const questions = [
    {
        question: "🌍 How do you react when a stranger asks you for directions?",
        options: [
            { text: "🚀 I stop everything to help them out!", value: 3 },
            { text: "🤔 I’ll help if I’m not in a rush.", value: 2 },
            { text: "👋 I give them a vague idea but keep moving.", value: 1 },
            { text: "🙈 I usually avoid talking to strangers.", value: 0 },
        ],
    },
    {
        question: "🤷 If a friend makes a mistake that affects you, what’s your move?",
        options: [
            { text: "💖 I forgive them and help fix it!", value: 3 },
            { text: "🤝 I let it slide, but it’s on them.", value: 2 },
            { text: "😒 I’ll forgive, but I might not forget.", value: 1 },
            { text: "😤 I get upset and let them know.", value: 0 },
        ],
    },
    {
        question: "🗣️ When someone shares a personal problem, how do you respond?",
        options: [
            { text: "👂 I listen actively and offer support!", value: 3 },
            { text: "💡 I give practical advice and listen.", value: 2 },
            { text: "😐 I listen a bit but don’t dive deep.", value: 1 },
            { text: "🚶 I avoid these heavy conversations.", value: 0 },
        ],
    },
    {
        question: "🗨️ How do you handle disagreements with friends?",
        options: [
            { text: "🕊️ I talk it out calmly and resolve things.", value: 3 },
            { text: "🤷 I compromise to keep the peace.", value: 2 },
            { text: "😤 I might raise my voice, but we’ll sort it later.", value: 1 },
            { text: "💥 I argue and hold grudges.", value: 0 },
        ],
    },
    {
        question: "👀 How do you feel when you see someone struggling in public?",
        options: [
            { text: "💪 I jump in to help right away!", value: 3 },
            { text: "👐 I’ll offer help if I feel it’s right.", value: 2 },
            { text: "🕰️ I wait for someone else to step up.", value: 1 },
            { text: "🙈 I ignore it and keep going.", value: 0 },
        ],
    },
    {
        question: "👥 When working in a team, how do you contribute?",
        options: [
            { text: "🎉 I go above and beyond to support everyone!", value: 3 },
            { text: "🙌 I do my part and help when asked.", value: 2 },
            { text: "😐 I stick to my tasks and avoid extra work.", value: 1 },
            { text: "🏃 I focus on my tasks and ignore others.", value: 0 },
        ],
    },
    {
        question: "💖 How do you feel about random acts of kindness?",
        options: [
            { text: "✨ I love spreading kindness whenever I can!", value: 3 },
            { text: "😊 I do it occasionally if it comes up.", value: 2 },
            { text: "🤷 I think it’s sweet but rarely do it myself.", value: 1 },
            { text: "😒 I don’t really get it.", value: 0 },
        ],
    },
    {
        question: "🛡️ What’s your reaction to seeing someone treated unfairly?",
        options: [
            { text: "⚔️ I speak up and stand up for them!", value: 3 },
            { text: "🤔 I sympathize but might not get involved.", value: 2 },
            { text: "😕 I feel bad but prefer not to intervene.", value: 1 },
            { text: "🙅 I ignore it since it’s not my problem.", value: 0 },
        ],
    },
    {
        question: "😠 If you’re having a bad day, how do you treat others?",
        options: [
            { text: "😊 I make a point to be kind anyway!", value: 3 },
            { text: "😬 I try, but it’s tough!", value: 2 },
            { text: "😩 I can be short but don’t mean to be rude.", value: 1 },
            { text: "😤 I let my mood affect my interactions.", value: 0 },
        ],
    },
    {
        question: "💪 How do you feel about volunteering for a cause?",
        options: [
            { text: "🌟 I actively look for opportunities to help!", value: 3 },
            { text: "😊 I join in when I can, but I’m not super proactive.", value: 2 },
            { text: "🤷 I volunteer if someone asks, but I don’t usually initiate.", value: 1 },
            { text: "😐 I don’t often volunteer at all.", value: 0 },
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
