function calculateScore() {
    let score = 0;
    const totalQuestions = 10; // Total number of questions in the quiz

    // Get the form element
    const form = document.forms['quiz-form'];

    // Loop through each question (from q1 to q10)
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = form[`q${i}`]; // Get the options for the current question

        // Check if an option is selected for each question
        let questionAnswered = false;
        for (const option of selectedOption) {
            if (option.checked) {
                score += parseInt(option.value); // Add the value of the selected answer to the score
                questionAnswered = true;
                break; // Exit the loop once an answer is found
            }
        }

        // If a question was not answered, show an error message and stop the calculation
        if (!questionAnswered) {
            document.getElementById('result').innerHTML = `Please answer all questions. You missed question ${i}.`;
            return;
        }
    }

    // Display result based on the final score
    const resultDiv = document.getElementById('result');
    if (score >= 25) {
        resultDiv.innerHTML = "You're in! Click <a href='https://www.google.com' target='_blank'>here</a> to purchase your ticket!";
    } else if (score >= 15) {
        resultDiv.innerHTML = "Thank you for taking the test, but unfortunately, this event might not be the best fit for you.";
    } else {
        resultDiv.innerHTML = "We appreciate your interest, but this event may not align with your current preferences. Stay tuned for other opportunities!";
    }
}
