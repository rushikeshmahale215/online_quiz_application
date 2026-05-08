const quizData = [

    {
        question: "Which language is used for web apps?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2
    },

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyperlink Machine Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
        answer: 1
    }

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const scoreElement = document.getElementById("score");

function loadQuestion() {

    const currentQuiz = quizData[currentQuestion];

    questionElement.innerText = currentQuiz.question;

    optionButtons.forEach((button, index) => {
        button.innerText = currentQuiz.options[index];
    });
}

function checkAnswer(selected) {

    if(selected === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if(currentQuestion < quizData.length) {
        loadQuestion();
    }
    else {
        showScore();
    }
}

function showScore() {

    document.getElementById("quiz").innerHTML = "";

    scoreElement.innerHTML =
        `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion();