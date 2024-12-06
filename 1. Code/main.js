function startTimer(targetElementId, duration, startDelay, showMilliseconds) {
    // Get the element where we'll show the timer
    const timerElement = document.getElementById(targetElementId);
    
    // Wait for the start delay
    setTimeout(() => {
        const startTime = Date.now();
        const endTime = startTime + (duration * 1000);

        function updateTimer() {
            const currentTime = Date.now();
            const timeLeft = endTime - currentTime;

            if (timeLeft <= 0) {
                timerElement.textContent = '00:00' + (showMilliseconds ? ':000' : '');
                return;
            }

            // Calculate minutes, seconds, and milliseconds
            const minutes = Math.floor(timeLeft / 60000);
            const seconds = Math.floor((timeLeft % 60000) / 1000);
            const ms = timeLeft % 1000;

            // Format the time string
            const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}${showMilliseconds ? ':' + String(ms).padStart(3, '0') : ''}`;
            
            timerElement.textContent = timeString;
            requestAnimationFrame(updateTimer);
        }

        updateTimer();
    }, startDelay * 1000);
}

// Start a 5-second timer after 2 seconds delay, without milliseconds
startTimer('timerText', 5, 2, false);

// Start a 10-second timer after 1 second delay, with milliseconds
//startTimer('timerText', 10, 1, true);
