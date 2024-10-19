function calculateScore() {
    let score = 0;

    // Get all the quiz form answers
    const form = document.forms['quiz-form'];
    const questions = 10; // Total number of questions

    // Loop through each question and add the selected value to the score
    for (let i = 1; i <= questions; i++) {
        const answer = form[`q${i}`];
        if (answer) {
            for (const option of answer) {
                if (option.checked) {
                    score += parseInt(option.value);
                }
            }
        }
    }

    // Display result based on score
    const resultDiv = document.getElementById('result');
    if (score >= 25) {
        resultDiv.innerHTML = "You're in! Click <a href='https://www.google.com' target='_blank'>here</a> to purchase your ticket!";
    } else if (score >= 15) {
        resultDiv.innerHTML = "Thank you for taking the test, but unfortunately, this event might not be the best fit for you.";
    } else {
        resultDiv.innerHTML = "We appreciate your interest, but this event may not align with your current preferences. Stay tuned for other opportunities!";
    }
}
