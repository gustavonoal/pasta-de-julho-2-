const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answers: ["Rio de Janeiro", "Brasília", "São Paulo"],
        correct: 1
    },
    {
        question: "Qual planeta é conhecido como planeta vermelho?",
        answers: ["Marte", "Júpiter", "Vênus"],
        correct: 0
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        answers: ["Machado de Assis", "Carlos Drummond", "Clarice Lispector"],
        correct: 0
    },
    {
        question: "Qual é o maior oceano do mundo?",
        answers: ["Atlântico", "Índico", "Pacífico"],
        correct: 2
    },
    {
        question: "Qual elemento químico tem o símbolo 'O'?",
        answers: ["Ouro", "Oxigênio", "Prata"],
        correct: 1
    }
];

let current = 0;
let score = 0;
let timer = 30;
let interval;

const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const quizContent = document.getElementById('quiz-content');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const timerDiv = document.getElementById('timer');

startBtn.onclick = () => {
    startScreen.style.display = 'none';
    quizContent.style.display = 'block';
    timerDiv.style.display = 'block';
    current = 0;
    score = 0;
    showQuestion();
};

function startTimer() {
    timer = 30;
    timeEl.textContent = timer;
    interval = setInterval(() => {
        timer--;
        timeEl.textContent = timer;
        if (timer <= 0) {
            clearInterval(interval);
            showFeedback(false, true);
        }
    }, 1000);
}

function showQuestion() {
    questionEl.textContent = questions[current].question;
    answersEl.innerHTML = '';
    feedbackEl.textContent = '';
    nextBtn.style.display = 'none';
    scoreEl.style.display = 'none';
    questions[current].answers.forEach((ans, idx) => {
        const btn = document.createElement('button');
        btn.textContent = ans;
        btn.onclick = () => checkAnswer(idx, btn);
        answersEl.appendChild(btn);
    });
    startTimer();
}

function checkAnswer(idx, btn) {
    clearInterval(interval);
    const correctIdx = questions[current].correct;
    Array.from(answersEl.children).forEach((b, i) => {
        b.disabled = true;
        if (i === correctIdx) b.classList.add('correct');
        if (i === idx && idx !== correctIdx) b.classList.add('incorrect');
    });
    if (idx === correctIdx) {
        score++;
        showFeedback(true);
    } else {
        showFeedback(false);
    }
    nextBtn.style.display = 'inline-block';
}

function showFeedback(isCorrect, timeout = false) {
    if (timeout) {
        feedbackEl.textContent = "Tempo esgotado! 😢";
    } else if (isCorrect) {
        feedbackEl.textContent = "Resposta correta! 🎉";
    } else {
        feedbackEl.textContent = "Resposta errada! 😕";
    }
}

nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

function showScore() {
    questionEl.textContent = '';
    answersEl.innerHTML = '';
    feedbackEl.textContent = '';
    nextBtn.style.display = 'none';
    scoreEl.style.display = 'block';
    scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
    timerDiv.style.display = 'none';
}