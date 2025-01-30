// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('2025-02-05T00:00:00');
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);

// Floating Hearts and Balloons
function createParticle() {
    const particles = document.querySelector('.particles');
    const particle = document.createElement('div');
    
    const isHeart = Math.random() > 0.5;
    particle.style.position = 'absolute';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.width = '30px';
    particle.style.height = '30px';
    particle.style.backgroundImage = isHeart ? 'url(heart.png)' : 'url(balloon.png)';
    particle.style.backgroundSize = 'contain';
    particle.style.backgroundRepeat = 'no-repeat';
    particle.style.animation = `float ${Math.random() * 3 + 2}s linear`;
    
    particles.appendChild(particle);
    
    setTimeout(() => particle.remove(), 5000);
}

setInterval(createParticle, 300);

// Music Player
const musicBtn = document.getElementById('musicBtn');
const birthdaySong = document.getElementById('birthdaySong');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        birthdaySong.pause();
        musicBtn.innerHTML = '<span class="music-icon">🎵</span> Play Birthday Song';
    } else {
        birthdaySong.play();
        musicBtn.innerHTML = '<span class="music-icon">🎵</span> Pause Music';
    }
    isPlaying = !isPlaying;
});

// Landing Page Button
document.getElementById('enterBtn')?.addEventListener('click', () => {
    window.location.href = 'birthday.html';
});
// Create Sparkle Effect
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random position
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    
    // Random animation duration
    const duration = Math.random() * 1 + 0.5;
    sparkle.style.animation = `sparkle ${duration}s linear`;
    
    document.querySelector('.sparkles').appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), duration * 1000);
}

// Create Floating Hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    
    // Random position and size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    
    document.querySelector('.hearts').appendChild(heart);
    
    setTimeout(() => heart.remove(), 4000);
}

// Start animation effects
setInterval(createSparkle, 200);
setInterval(createFloatingHeart, 300);

// Photo Gallery Animation
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 1000);
    });
});
// Add hover effect to love letter
const loveLetter = document.querySelector('.love-letter');

loveLetter.addEventListener('mousemove', (e) => {
    const rect = loveLetter.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;
    
    loveLetter.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

loveLetter.addEventListener('mouseleave', () => {
    loveLetter.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// Add sparkle effect when hovering over the message
function createSparkle(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = e.offsetX + 'px';
    sparkle.style.top = e.offsetY + 'px';
    e.target.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

loveLetter.addEventListener('mousemove', createSparkle);
