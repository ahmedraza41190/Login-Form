


const quizData = [
    {
        question: "What year was HTML5 launched?",
        a: "2012",
        b: "2013",
        c: "2014",
        d: "2015",
        correct: "c",
    },
    {
        question: "What is the difference between XML and HTML?",
        a: "HTML is used for exchanging data, XML is not.",
        b: "XML is used for exchanging data, HTML is not ",
        c: " HTML can have user defined tags, XML cannot",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What is W3C?",
        a: " World Wide Web Consortium ",
        b: "world wide web corporation",
        c: "world wide web company",
        d: "world wide web controlling",
        correct: "a",
    },
    {
        question: "What year was CSS3 launched?",
        a: "1995",
        b: "1997",
        c: "1999",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "How do four values work on border-radius",
        a: "top-left, top-right. bottom-right, bottom-left",
        b: "top-left, top-right, bottom-right, bottom-left",
        c: "bottom-left, bottom-right. top-right, top-left",
        d: "bottom-left, bottom-right, top-right, top-left",
        correct: "b",
    },
    {
        question: "How to add text shadow using CSS3",
        a: "font-shadow: 5px 5px 5px gray;",
        b: "font-shadow: 5px 5px 5px grey;",
        c: "text-shadow: 5px 5px 5px gray;",
        d: "text-shadow: 5px 5px 5px grey;",
        correct: "d",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        a: "visibilty",
        b: "invisibility",
        c: "visible",
        d: "visibility",
        correct: "d",
    },
    {
        question: "If 1 egg is boiling in 1 minute, how many minutes will 3 eggs boil?",
        a: "3 minutes",
        b: "6 minutes",
        c: "9 minutes",
        d: "none of these",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Try again</button>
           <button onclick="location.href = './index.html' ">Back To Home</button>
           `
           
        }
    }
})