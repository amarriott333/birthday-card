const card = document.querySelector('.card');
const audio = document.getElementById('background-audio');

// Function to handle the card click
card.addEventListener('click', () => {
    card.classList.toggle('flip'); // Toggle the 'flip' class on click
    if (audio) {
        audio.play(); // Play the audio when the card is clicked
    }
});
