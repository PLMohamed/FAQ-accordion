const questions = document.querySelectorAll(".title");

questions.forEach(question => {
    
    question.addEventListener('click',() => {
        question.parentElement.classList.toggle('opened');
    })

});