   const questions = [
  {
    question: "HTML stands for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Text Machine Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Java", correct: false },
      { text: "Python", correct: false }
    ]
  },
  {
    question: "Which is used for web interactivity?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const quizBox = document.getElementById("quiz");
const scoreText = document.getElementById("scoreText");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizBox.classList.remove("hide");
  resultBox.classList.add("hide");
  nextBtn.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.onclick = () => selectAnswer(btn, answer.correct);
    answersEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(button, correct) {
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === questions[currentQuestionIndex].answers.find(a => a.correct).text) {
      btn.classList.add("correct");
    }
  });

  if (correct) {
    score++;
  } else {
    button.classList.add("wrong");
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  scoreText.innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
  startQuiz();
}

startQuiz();
