const question = [
    {
        question: "Which is the longest river in the world?",
        answers: [
            {text: "Great Ganga", correct: false},
            {text: "Nile", correct: true},
            {text: "Amazon", correct: false},
            {text: "Niger", correct: false},
        ]
    },
    {
        question: "Which is largest island in the world?",
        answers: [
            {text: "Greenland", correct: true},
            {text: "New Guinea", correct: false},
            {text: "Andaman Nicobar", correct: false},
            {text: "Hawaii", correct: false},
        ]

    },
    {
        question: "Which is the 29th state of India?",
        answers: [
            {text: "Uttarakhand", correct: false},
            {text: "Madhya Pradesh", correct: false},
            {text: "Uttar Pradesh", correct: false},
            {text: "Telangana", correct: true},
        ]
    },
    {
        question: "Who was India’s first President?",
        answers: [
            {text: "Sarvepalli Radhakrishnan", correct: false},
            {text: "Dr. Rajendra Prasad", correct: true},
            {text: "Jawaharlal Nehru", correct: false},
            {text: "Indra Gandhi", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showquestion();
}
function showquestion(){
    resetstate();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score}out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showquestion();
    }else{
        showScore();
    }
}
question.length
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startquiz();
    }
});

startquiz();






