document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    calculateScore(); // Call the score calculation function
});

function calculateScore() {
    let score = 0;
    const totalQuestions = 10; // Total number of questions

    // Get the form element
    const form = document.forms['quiz-form'];

    // Loop through each question (from q1 to q10)
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = form[`q${i}`];

        // Check if an option is selected for each question
        for (const option of selectedOption) {
            if (option.checked) {
                score += parseInt(option.value); // Add the score of the selected option
            }
        }
    }

    displayResult(score); // Display the final result
}

function displayResult(score) {
    const totalScore = 30; // Maximum possible score
    const resultDiv = document.getElementById('result');

    // Determine the outcome based on the score
    if (score >= 25) {
        resultDiv.innerHTML = `<h2>Yes! You're a very kind and friendly person. 🎉</h2><p>You scored ${score} out of ${totalScore}. You're invited to the charity party!</p>`;
        // Add redirection to ticket page here, for example:
        // window.location.href = 'https://charity-party-ticket-page.com';
    } else {
        resultDiv.innerHTML = `<h2>Sorry, you're not a perfect match for this event. 😔</h2><p>You scored ${score} out of ${totalScore}. Thank you for taking the test.</p>`;
    }
}
