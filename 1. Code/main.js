alert("Hello World");

function startTimer(targetElementId, duration, startDelay) {
    setTimeout(() => {
        const timerElement = document.getElementById(targetElementId);
        let remainingTime = duration * 1000; // Convert to milliseconds
      
        function formatTime(milliseconds) {
            const minutes = Math.floor(milliseconds / 60000);
            const seconds = Math.floor((milliseconds % 60000) / 1000);
            const ms = milliseconds % 1000;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`;
        }
      
        function countdown() {
            if (remainingTime > 0) {
                timerElement.textContent = formatTime(remainingTime);
                remainingTime -= 10; // Update every 10ms for smoother countdown
                setTimeout(countdown, 10);
            } else {
                timerElement.textContent = '00:00:000';
            }
        }
      
        countdown();
    }, startDelay * 1000);
}

// Start a 5 second timer in element with id 'timerText' after 5 seconds
startTimer('timerText', 5, 5);