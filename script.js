const questions = document.querySelectorAll('.question');
const openBtn = document.querySelectorAll('.open-icon');
const closeBtn = document.querySelectorAll('.close-icon');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        openBtn[index].classList.toggle("hide");
        closeBtn[index].classList.toggle("hide");
        answers[index].classList.toggle("close");
    });
    //Adding Keyboard Navigation
    question.setAttribute('tabindex', '0');
    if (index !== 0) {
        question.setAttribute('tabindex', '-1')
    }
    question.addEventListener('keydown', (e) => {
        switch(e.key){
            case 'ArrowDown':
                e.preventDefault();
                if (index < questions.length - 1) {
                    questions[index + 1 ].focus();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (index > 0){
                    questions[index - 1].focus();
                }
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                questions[index].click();
                break;
        }
    })
})

//Adding Accessible Rich Internet Applications
questions.forEach((question, index) => {
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', 'false');
    question.setAttribute('aria-controls', `answer-${index}`);
    answers[index].setAttribute('id', `answer-${index}`);
})






