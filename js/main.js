onload = () => {
    // --- 1. Audio Control Setup ---
    const audio = document.getElementById('background-music');
    const toggleButton = document.getElementById('mute-toggle');
    let isMuted = true; // Initial state matches the audio tag's 'muted' attribute

    if (toggleButton && audio) {
        toggleButton.addEventListener('click', function() {
            if (isMuted) {
                // Unmute the audio
                audio.muted = false;
                toggleButton.textContent = 'Mute Sound';
                isMuted = false;
                // Try to play the audio if it didn't start automatically
                audio.play().catch(error => {
                    console.error("Audio playback failed upon unmute:", error);
                    // You might want to provide feedback to the user here
                });
            } else {
                // Mute the audio
                audio.muted = true;
                toggleButton.textContent = 'Unmute Sound';
                isMuted = true;
            }
        });
    }

    // --- 2. Existing Flower/Title Animation Logic ---
    const c = setTimeout(() => {
        // This removes the "not-loaded" class to start your CSS animations
        document.body.classList.remove("not-loaded");

        // Title typing effect
        const titles = ('Flowers for you💓').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

        function appendTitle() {
            if (index < titles.length) {
                titleElement.innerHTML += titles[index];
                index++;
                // The delay for typing effect is 300ms as per your original code
                setTimeout(appendTitle, 300);
            }
        }

        appendTitle();

        // Clear the timeout 'c' which started this block
        clearTimeout(c);
    }, 1000); // The 1000ms delay for body class removal
};
