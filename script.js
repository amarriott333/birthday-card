const audio = document.getElementById('background-audio');

let currentCardIndex = 0; // Start at the card-front

const cards = document.querySelectorAll('.card'); // All cards in the sequence

// Hide all cards except the first one
cards.forEach((card, index) => {
    if (index !== 0) {
        card.style.display = 'none'; // Only the first card is visible
    }
});

// Function to handle card click
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        if (index === currentCardIndex) {
            // Play the audio if it's the first card (card-front)
            if (index === 0 && audio) {
                audio.play();
            }

            // Move to the next card
            if (currentCardIndex < cards.length - 1) {
                cards[currentCardIndex].style.display = 'none'; // Hide the current card
                currentCardIndex++; // Move to the next card
                cards[currentCardIndex].style.display = 'block'; // Show the next card
            }
        }
    });
});
