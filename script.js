const hearts = document.querySelector('.hearts');
const surprise = document.querySelector('#surprise');
const surpriseText = document.querySelector('#surpriseText');
const quizStep = document.querySelector('#quizStep');
const quizScore = document.querySelector('#quizScore');
const questionText = document.querySelector('#questionText');
const answerButtons = document.querySelector('#answerButtons');
const quizFeedback = document.querySelector('#quizFeedback');
const giftMessage = document.querySelector('#giftMessage');

const quizQuestions = [
  {
    question: 'Where did our story begin?',
    answers: ['Camp Brethren High School', 'At the mall', 'On the phone', 'At a concert'],
    correct: 'Camp Brethren High School',
    note: 'Yes — the place where a normal school day became our beginning.',
  },
  {
    question: 'What date did I meet and know you?',
    answers: ['February 4, 2023', 'January 1, 2023', 'April 14, 2023', 'August 1, 2023'],
    correct: 'February 4, 2023',
    note: 'That date is locked in my heart forever.',
  },
  {
    question: 'Which class became part of our history?',
    answers: ['History', 'Math', 'Chemistry', 'CRE'],
    correct: 'History',
    note: 'Exactly — we studied history and made our own.',
  },
  {
    question: 'What were we before we began?',
    answers: ['Besties', 'Strangers', 'Neighbours', 'Rivals'],
    correct: 'Besties',
    note: 'Besties first, love after — that is why it feels real.',
  },
  {
    question: 'What should the answer be when I ask for more memories?',
    answers: ['Always ❤️', 'Maybe', 'Later', 'Never'],
    correct: 'Always ❤️',
    note: 'That is the ending I was hoping for.',
  },
];

let currentQuestion = 0;
let score = 0;

function floatingHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = Math.random() > 0.5 ? '❤️' : '💕';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${18 + Math.random() * 24}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

function launchConfetti() {
  const colors = ['#ff4f87', '#ffb6c1', '#fff0f5', '#ffffff', '#ffd166'];
  for (let i = 0; i < 90; i += 1) {
    const piece = document.createElement('i');
    piece.className = 'confetti';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.55}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3500);
  }
}

function renderQuiz() {
  if (!questionText) return;
  if (currentQuestion >= quizQuestions.length) {
    questionText.textContent = `You unlocked ${score} of ${quizQuestions.length} memories.`;
    answerButtons.innerHTML = '<button type="button" id="restartQuiz">Play again</button>';
    quizFeedback.textContent = score === quizQuestions.length
      ? 'Perfect score. You already know you are my favourite person. ❤️'
      : 'Even if you missed one, you still win — because the whole story is ours.';
    document.querySelector('#restartQuiz').addEventListener('click', () => {
      currentQuestion = 0;
      score = 0;
      renderQuiz();
    });
    return;
  }

  const item = quizQuestions[currentQuestion];
  quizStep.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  quizScore.textContent = `${score} memories unlocked`;
  questionText.textContent = item.question;
  quizFeedback.textContent = '';
  answerButtons.innerHTML = '';

  item.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = answer;
    button.addEventListener('click', () => {
      const correct = answer === item.correct;
      if (correct) score += 1;
      button.classList.add(correct ? 'correct' : 'wrong');
      quizFeedback.textContent = correct ? item.note : `Almost. The answer is ${item.correct}.`;
      [...answerButtons.children].forEach((child) => { child.disabled = true; });
      setTimeout(() => {
        currentQuestion += 1;
        renderQuiz();
      }, 1400);
    });
    answerButtons.appendChild(button);
  });
}

setInterval(floatingHeart, 650);
renderQuiz();

document.querySelectorAll('.gift').forEach((gift) => {
  gift.addEventListener('click', () => {
    gift.classList.add('opened');
    giftMessage.textContent = gift.dataset.message;
  });
});

surprise.addEventListener('click', () => {
  surpriseText.classList.add('show');
  launchConfetti();
});
