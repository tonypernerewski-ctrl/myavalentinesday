function moveButton() {
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container');

    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate max boundaries within the container usually, but let's make it run anywhere on screen for fun if needed.
    // However, keeping it on screen is better.

    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'fixed'; // Switch to fixed to move freely relative to viewport
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function celebrate() {
    const question = document.getElementById('question');
    const image = document.getElementById('main-image');
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');

    // Change text and image
    question.innerHTML = "Yay! I knew you'd say Yes! ❤️";
    image.src = "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif"; // Celebration GIF

    // Hide No button
    noBtn.style.display = 'none';

    // Trigger Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
    });

    // Continuous confetti for a few seconds
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
