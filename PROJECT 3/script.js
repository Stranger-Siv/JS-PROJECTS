const questions = [
    {
        question: "Which is the largest animal on earth ?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Who is the President of India ?",
        answers: [
            { text: "APJ Abdul Kalam", correct: false },
            { text: "Pranab Mukharjee", correct: false },
            { text: "Draupadi Murmu", correct: true },
            { text: "Narendra Modi", correct: false },
        ]
    },
    {
        question: "Which is the biggest company in the world ?",
        answers: [
            { text: "Apple", correct: true },
            { text: "Google", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Tesla", correct: false },
        ]
    },
    {
        question: "Who invented Zero ?",
        answers: [
            { text: "Einstein", correct: false },
            { text: "Thomas Alva Edission", correct: false },
            { text: "Issac Newton", correct: false },
            { text: "Aryabhatta", correct: true },
        ]
    }
];



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let score=0

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('Game started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function selectAnswer(e){

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{
        displayFinalScore();
        // startButton.innerText = 'Restart'
        // startButton.classList.remove('hide')
       
    }


}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
        score++
    }else{
        element.classList.add('wrong')
    }
}


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


function displayFinalScore() {
    questionContainerElement.innerHTML = `
      <h2>You finished the quiz!</h2>
      <p>Your final score is ${score-4}/${questions.length}</p>
    `;
  }
