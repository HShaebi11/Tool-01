function startTimer(targetElementId, duration, startDelay, showMilliseconds) {
    const timerElement = document.getElementById(targetElementId);
    
    setTimeout(() => {
        let timeLeft = duration;

        function updateTimer() {
            // Format the time string
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const ms = showMilliseconds ? Math.floor(Math.random() * 999) : 0; // Simulated ms for smoother display
            
            const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}${showMilliseconds ? ':' + String(ms).padStart(3, '0') : ''}`;
            
            timerElement.textContent = timeString;

            if (timeLeft <= 0) {
                return;
            }

            // Update every second
            setTimeout(() => {
                timeLeft--;
                updateTimer();
            }, 1000);
        }

        updateTimer();
    }, startDelay * 1000);
}

// Start a 5-second timer after 2 seconds delay, without milliseconds
startTimer('timerText', 5, 2, false);

// Start a 10-second timer after 1 second delay, with milliseconds
//startTimer('timerText', 10, 1, true);
