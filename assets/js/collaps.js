document.addEventListener("DOMContentLoaded", function(event) {
    const faqSection = document.querySelector('.faq-section');
    const questions = faqSection.querySelectorAll('.question-answer');

    questions.forEach(question => {
        const button = question.querySelector('.arrow');
        button.addEventListener('click', () => {
            question.classList.toggle('active');
        });
    });
});
