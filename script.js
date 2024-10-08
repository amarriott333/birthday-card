const card = document.querySelector('.card');
const iframe = document.getElementById('youtube-audio');
let player;

// YouTube IFrame API ready function
function onYouTubeIframeAPIReady() {
    player = new YT.Player(iframe, {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
}

// Function to handle the card click
card.addEventListener('click', () => {
    card.classList.toggle('flip'); // Toggle the 'flip' class on click
    if (player) {
        player.playVideo(); // Play the audio when the card is clicked
    }
});

// Player ready event
function onPlayerReady(event) {
    event.target.mute(); // Mute the video initially
}

// Player state change event
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        console.log("Video is playing");
    }
    if (event.data == YT.PlayerState.ENDED) {
        console.log("Video has ended");
    }
}
