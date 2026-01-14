const questions = [
  {
    text: "A inteligência artificial já consegue escrever poemas complexos.",
    answer: "IA"
  },
  {
    text: "Essa frase foi escrita por um ser humano em um projeto de teste.",
    answer: "Humano"
  },
  {
    text: "Modelos de linguagem podem gerar código funcional.",
    answer: "IA"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  feedbackEl.textContent = "";
  questionEl.textContent = questions[current].text;
}

function answer(choice) {
  if (choice === questions[current].answer) {
    feedbackEl.textContent = "✅ Acertou!";
    score++;
  } else {
    feedbackEl.textContent = "❌ Errou!";
  }
  scoreEl.textContent = `Pontuação: ${score}`;
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    questionEl.textContent = "🎉 Fim do jogo!";
    feedbackEl.textContent = "";
  } else {
    loadQuestion();
  }
}

loadQuestion();
