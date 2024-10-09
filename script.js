const cards = document.querySelectorAll('.card');
const audio = document.getElementById('background-audio');

let currentCardIndex = 0;

// Function to handle card click
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        if (index === currentCardIndex) {
            card.classList.toggle('flip'); // Flip the current card
            if (audio) {
                audio.play(); // Play audio on first card click
            }

            // Delay showing the next card after the flip
            setTimeout(() => {
                currentCardIndex++;
                if (currentCardIndex < cards.length) {
                    cards[currentCardIndex].style.display = 'block';
                }
            }, 1000); // Adjust timing as needed
        }
    });
});

// Hide all cards except the first one initially
cards.forEach((card, index) => {
    if (index !== 0) {
        card.style.display = 'none';
    }
});
