const questions = document.querySelectorAll('.question');
const openBtn = document.querySelectorAll('.open-icon');
const closeBtn = document.querySelectorAll('.close-icon');
const answers = document.querySelectorAll('.answer');

let selectedQuestion = null;

questions.forEach((question, index) => {
    question.addEventListener('click', () => {

        if (selectedQuestion !== null && selectedQuestion !== index){
            openBtn[selectedQuestion].classList.remove('hide');
            closeBtn[selectedQuestion].classList.add('hide');
            answers[selectedQuestion].classList.add('close');
        }

        if(selectedQuestion === index) {
            openBtn[index].classList.remove("hide");
            closeBtn[index].classList.add("hide");
            answers[index].classList.add("close");
            question.setAttribute('aria-expanded', 'false');
            selectedQuestion = null;
        } else {
            openBtn[index].classList.add("hide");
            closeBtn[index].classList.remove("hide");
            answers[index].classList.remove("close");
            question.setAttribute('aria-expanded', 'true');
            selectedQuestion = index;
        }



        selectedQuestion = answers[index].classList.contains('close') ? null : index;
})
    });

    //Adding Keyboard Navigation
questions.forEach((question, index) => {
    question.setAttribute('tabindex', index === 0 ? '0' : '-1')
});

    questions.forEach((question, index) => {
        question.addEventListener('keydown', (e) => {
            switch(e.key){
                case 'ArrowDown':
                e.preventDefault();
                if(index < questions.length - 1){
                    questions[index + 1].focus();
                }
                break;
    
                case 'ArrowUp':
                e.preventDefault();
                if(index > 0){
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
    questions[selectedQuestion].setAttribute('aria-expanded', 'false');
})








