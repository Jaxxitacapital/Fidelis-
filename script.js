const hearts = document.querySelector('.hearts');
const surprise = document.querySelector('#surprise');
const surpriseText = document.querySelector('#surpriseText');
const quizStep = document.querySelector('#quizStep');
const quizScore = document.querySelector('#quizScore');
const questionText = document.querySelector('#questionText');
const answerForm = document.querySelector('#answerForm');
const typedAnswer = document.querySelector('#typedAnswer');
const quizFeedback = document.querySelector('#quizFeedback');
const reasoningList = document.querySelector('#reasoningList');
const checkoutLink = document.querySelector('#checkoutLink');
const summaryScore = document.querySelector('#summaryScore');
const summaryAmount = document.querySelector('#summaryAmount');
const checkoutScore = document.querySelector('#checkoutScore');
const checkoutAmount = document.querySelector('#checkoutAmount');
const mpesaAmount = document.querySelector('#mpesaAmount');
const mpesaForm = document.querySelector('#mpesaForm');
const mpesaMessage = document.querySelector('#mpesaMessage');
const giftMessage = document.querySelector('#giftMessage');

const PRICE_PER_MARK = 0.5;
const TOTAL_MARKS = 30;
const quizQuestions = [
  { question: 'What school made our first hello possible?', answers: ['camp brethren high school', 'camp brethren'], clue: 'Think of the school named in our story.', note: 'Right — Camp Brethren High School is where the story opened.' },
  { question: 'Give the exact date when I met and knew you.', answers: ['february 4 2023', '4 february 2023', 'feb 4 2023', '04 02 2023'], clue: 'Month, day, and year matter.', note: 'Yes. February 4, 2023 stays special.' },
  { question: 'Which class quietly became part of our own history?', answers: ['history', 'history class'], clue: 'The subject matches the memory.', note: 'Exactly — History class became our history too.' },
  { question: 'Before love, what friendship word described us?', answers: ['besties', 'best friends', 'bestfriends'], clue: 'It is sweeter than just classmates.', note: 'Besties first made everything feel real.' },
  { question: 'In which month of 2023 did I ask you?', answers: ['april', 'april 2023'], clue: 'It came after February.', note: 'April is the month our chapter changed.' },
  { question: 'What does the name Fidelis mean? Name any two qualities.', answers: ['faithful loyal', 'faithful true', 'loyal true', 'faithful sincere', 'loyal sincere', 'faithful dependable', 'loyal dependable'], clue: 'Use two words from the meaning section.', note: 'Beautiful — faithful, loyal, and true fit you.' },
  { question: 'What kind of day featured the blue walk memory?', answers: ['cultural day', 'culture day'], clue: 'A school celebration of cultures.', note: 'Yes, Cultural Day made that blue moment unforgettable.' },
  { question: 'What food appears in one of our date memories?', answers: ['pizza'], clue: 'A round favourite to share.', note: 'Pizza date memories always count.' },
  { question: 'Which colour appears again and again in the photos?', answers: ['blue'], clue: 'Uniforms and dress both point to it.', note: 'Blue became one of our memory colours.' },
  { question: 'What one-word answer do I hope you choose for more memories?', answers: ['always'], clue: 'It is stronger than maybe.', note: 'Always is my favourite answer.' },
  { question: 'What did I join in January 2023?', answers: ['form 3', 'form three'], clue: 'It is a school level.', note: 'Correct — Form 3 brought me closer to you.' },
  { question: 'What feeling does the school hug caption compare to home?', answers: ['hug', 'a hug', 'the hug'], clue: 'A warm action, not a place.', note: 'That hug felt like home.' },
  { question: 'What do I say your smile can change?', answers: ['my day', 'whole day', 'my whole day'], clue: 'A small daily unit of time.', note: 'Yes — your smile changes my whole day.' },
  { question: 'Name one thing this site says I will choose you with.', answers: ['patience', 'honesty', 'love'], clue: 'It is inside Gift 1.', note: 'That promise is real.' },
  { question: 'What does the letter say I wanted to last longer than flowers or chocolates?', answers: ['corner of the internet', 'this site', 'website', 'little corner of the internet'], clue: 'You are looking at it.', note: 'Exactly — this little corner is yours.' },
  { question: 'Which word in the wrapped section describes the class where we made our own?', answers: ['history'], clue: 'It repeats from an earlier answer.', note: 'History again — because we made our own.' },
  { question: 'What was ordinary before you made it unforgettable?', answers: ['school days', 'ordinary school days'], clue: 'It is in the first subtitle.', note: 'You made ordinary school days unforgettable.' },
  { question: 'What does Gift 6 wish we keep doing besides laughing and building?', answers: ['growing'], clue: 'Growing, laughing, and building.', note: 'Growing together is the wish.' },
  { question: 'What place is named with a pin emoji in the memory card?', answers: ['camp brethren high school', 'camp brethren'], clue: 'Same place as the beginning.', note: 'Correct — the pin belongs to Camp Brethren.' },
  { question: 'What word describes a presence that feels safe?', answers: ['loyal'], clue: 'It is one of the three meaning cards.', note: 'Loyal is the safe presence.' },
  { question: 'What word describes a love that feels honest?', answers: ['true'], clue: 'Another meaning card.', note: 'True love feels honest.' },
  { question: 'What does Gift 5 say you make love feel like first?', answers: ['friendship'], clue: 'Before peace and home.', note: 'Friendship is the foundation.' },
  { question: 'What should be played softly in Gift 4 date idea?', answers: ['music', 'soft music'], clue: 'It goes with pizza and a walk.', note: 'Soft music belongs on the date.' },
  { question: 'What word in the final message comes between beautiful and unforgettable?', answers: ['funny'], clue: 'Faithful, beautiful, funny, unforgettable.', note: 'Funny — because joy matters too.' },
  { question: 'What month did I join Camp Brethren High School?', answers: ['january', 'january 2023'], clue: 'It came before February 4.', note: 'January started the path.' },
  { question: 'What relationship title is celebrated in the hero eyebrow?', answers: ['girlfriend', 'girlfriends day', 'girlfriend day'], clue: 'Happy ___ Day.', note: 'Happy Girlfriend’s Day, always.' },
  { question: 'What is the signature name at the end of the letter?', answers: ['eustace'], clue: 'Forever yours, ...', note: 'Yes — Eustace.' },
  { question: 'What does Gift 2 call the first hello?', answers: ['memory', 'a memory'], clue: 'It is the gift label.', note: 'A memory that still means everything.' },
  { question: 'What action opens the tiny gifts?', answers: ['tap', 'click', 'tap to open'], clue: 'The section title says tap-to-open.', note: 'Tap or click — the gift opens.' },
  { question: 'What payment method is waiting at checkout?', answers: ['mpesa', 'm pesa', 'm-pesa'], clue: 'Kenya’s mobile money service.', note: 'M-Pesa checkout unlocked.' },
];

let currentQuestion = Number(localStorage.getItem('fidelisQuestion') || 0);
let score = Number(localStorage.getItem('fidelisScore') || 0);

function normalizeAnswer(value) {
  return value.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

function earnedAmount() {
  return (score * PRICE_PER_MARK).toFixed(2);
}

function saveProgress() {
  localStorage.setItem('fidelisQuestion', currentQuestion);
  localStorage.setItem('fidelisScore', score);
  localStorage.setItem('fidelisAmount', earnedAmount());
}

function updateCheckoutSummary() {
  const storedScore = Number(localStorage.getItem('fidelisScore') || score || 0);
  const amount = (storedScore * PRICE_PER_MARK).toFixed(2);
  if (summaryScore) summaryScore.textContent = `${storedScore}/${TOTAL_MARKS}`;
  if (summaryAmount) summaryAmount.textContent = `$${amount}`;
  if (checkoutScore) checkoutScore.textContent = `${storedScore}/${TOTAL_MARKS}`;
  if (checkoutAmount) checkoutAmount.textContent = `$${amount}`;
  if (mpesaAmount) mpesaAmount.textContent = `$${amount}`;
}

function floatingHeart() {
  if (!hearts) return;
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

function showReasoning(item, submitted, correct) {
  if (!reasoningList) return;
  const line = document.createElement('li');
  line.innerHTML = `<strong>Q${currentQuestion + 1}:</strong> ${correct ? 'Accepted' : 'Checked'} “${submitted || 'blank'}”. ${correct ? item.note : `Hint: ${item.clue}`}`;
  reasoningList.prepend(line);
}

function renderQuiz() {
  if (!questionText) return;
  updateCheckoutSummary();
  if (currentQuestion >= quizQuestions.length) {
    quizStep.textContent = 'Test complete';
    quizScore.textContent = `${score}/${TOTAL_MARKS} marks`;
    questionText.textContent = `You scored ${score} out of ${TOTAL_MARKS}.`;
    answerForm.innerHTML = '<a class="button" href="checkout.html">Go to M-Pesa checkout</a><button class="button ghost" type="button" id="restartQuiz">Restart test</button>';
    quizFeedback.textContent = `At $${PRICE_PER_MARK.toFixed(2)} per mark, checkout total is $${earnedAmount()}.`;
    checkoutLink.classList.remove('disabled');
    document.querySelector('#restartQuiz').addEventListener('click', () => {
      currentQuestion = 0;
      score = 0;
      localStorage.removeItem('fidelisQuestion');
      localStorage.removeItem('fidelisScore');
      localStorage.removeItem('fidelisAmount');
      window.location.reload();
    });
    return;
  }

  const item = quizQuestions[currentQuestion];
  quizStep.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  quizScore.textContent = `${score}/${TOTAL_MARKS} marks • $${earnedAmount()}`;
  questionText.textContent = item.question;
  quizFeedback.textContent = item.clue;
  typedAnswer.value = '';
  typedAnswer.focus();
}

if (answerForm) {
  answerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const item = quizQuestions[currentQuestion];
    const submitted = typedAnswer.value;
    const normalized = normalizeAnswer(submitted);
    const correct = item.answers.some((answer) => normalizeAnswer(answer) === normalized || normalized.includes(normalizeAnswer(answer)));
    if (correct) score += 1;
    showReasoning(item, submitted, correct);
    quizFeedback.textContent = correct ? item.note : `Not quite. ${item.clue}`;
    currentQuestion += 1;
    saveProgress();
    setTimeout(renderQuiz, 850);
  });
  renderQuiz();
}

updateCheckoutSummary();
setInterval(floatingHeart, 650);

document.querySelectorAll('.gift').forEach((gift) => {
  gift.addEventListener('click', () => {
    gift.classList.add('opened');
    giftMessage.textContent = gift.dataset.message;
  });
});

if (surprise) {
  surprise.addEventListener('click', () => {
    surpriseText.classList.add('show');
    launchConfetti();
  });
}

if (mpesaForm) {
  mpesaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const phone = document.querySelector('#mpesaPhone').value.trim();
    mpesaMessage.textContent = `Checkout request prepared for ${phone}. Connect this page to an M-Pesa STK Push backend to collect $${(Number(localStorage.getItem('fidelisScore') || 0) * PRICE_PER_MARK).toFixed(2)} for the love-test score.`;
  });
}
