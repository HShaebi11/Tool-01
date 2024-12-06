alert("Hello World");

function startTimer(targetElementId, duration, startDelay, showMilliseconds = false) {
    setTimeout(() => {
        const timerElement = document.getElementById(targetElementId);
        let remainingTime = duration * 1000; // Convert to milliseconds
      
        function formatTime(milliseconds) {
            const minutes = Math.floor(milliseconds / 60000);
            const seconds = Math.floor((milliseconds % 60000) / 1000);
            const ms = milliseconds % 1000;
            return showMilliseconds 
                ? `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`
                : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
      
        function countdown() {
            if (remainingTime > 0) {
                timerElement.textContent = formatTime(remainingTime);
                remainingTime -= 10; // Update every 10ms for smoother countdown
                setTimeout(countdown, 10);
            } else {
                timerElement.textContent = showMilliseconds ? '00:00:000' : '00:00';
            }
        }
      
        countdown();
    }, startDelay * 1000);
}

function toggleElementVisibility(elementId, show, delay = 0) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = show ? 'block' : 'none';
        }
    }, delay * 1000); // Convert delay to milliseconds
}

function showElement(elementId, delay = 0) {
    toggleElementVisibility(elementId, true, delay);
}

function hideElement(elementId, delay = 0) {
    toggleElementVisibility(elementId, false, delay);
}

// Example usage:
showElement('massege1', 2);  // Makes element visible after 2 seconds
hideElement('massege1', 4);  // Hides element after 4 seconds

showElement('countdown', 4);

// Start a 5 second timer in element with id 'timerText' after 5 seconds
startTimer('timerText', 5, 5, false); // Set to true to show milliseconds

hideElement('countdown', 6);