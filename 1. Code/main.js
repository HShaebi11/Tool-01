function countdown(targetElementId, duration, startDelay, showMilliseconds) {
    const timerElement = document.getElementById(targetElementId);
    
    setTimeout(() => {
        let timeLeft = duration;
        let ms = 999;

        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            
            const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}${showMilliseconds ? ':' + String(ms).padStart(3, '0') : ''}`;
            
            timerElement.textContent = timeString;

            if (timeLeft <= 0 && ms <= 0) {
                return;
            }

            if (showMilliseconds) {
                setTimeout(() => {
                    ms -= 10;
                    if (ms < 0) {
                        ms = 999;
                        timeLeft--;
                    }
                    requestAnimationFrame(updateTimer);
                }, 10); // Update every 10ms for smooth millisecond display
            } else {
                setTimeout(() => {
                    timeLeft--;
                    updateTimer();
                }, 1000);
            }
        }

        updateTimer();
    }, startDelay * 1000);
}

// Start a 5-second timer after 2 seconds delay, without milliseconds
countdown('timerText', 5, 2, true);

// Start a 10-second timer after 1 second delay, with milliseconds
//countdown('timerText', 10, 1, true);
