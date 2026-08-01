const hearts = document.querySelector('.hearts');
const surprise = document.querySelector('#surprise');
const surpriseText = document.querySelector('#surpriseText');

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

setInterval(floatingHeart, 650);
surprise.addEventListener('click', () => {
  surpriseText.classList.add('show');
  launchConfetti();
});
