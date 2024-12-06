function startTimer(targetElementId, duration, startDelay, showMilliseconds = false) {
    const timerElement = document.getElementById(targetElementId);
    if (!timerElement) return; // Guard against missing element

    setTimeout(() => {
        let remainingTime = duration * 1000; // Convert to milliseconds
        let animationFrameId;
      
        function formatTime(milliseconds) {
            const minutes = Math.floor(milliseconds / 60000);
            const seconds = Math.floor((milliseconds % 60000) / 1000);
            const ms = milliseconds % 1000;
            return showMilliseconds 
                ? `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`
                : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
      
        function countdown(timestamp) {
            if (remainingTime > 0) {
                timerElement.textContent = formatTime(remainingTime);
                remainingTime -= 16.67; // Approximately 60fps
                animationFrameId = requestAnimationFrame(countdown);
            } else {
                timerElement.textContent = showMilliseconds ? '00:00:000' : '00:00';
                cancelAnimationFrame(animationFrameId);
            }
        }
      
        animationFrameId = requestAnimationFrame(countdown);
    }, startDelay * 1000);
}

function toggleElementVisibility(elementId, show, delay = 0) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.opacity = show ? '1' : '0';
            element.style.visibility = show ? 'visible' : 'hidden';
            // Using visibility instead of display for smoother transitions
        }
    }, delay * 1000);
}

function showElement(elementId, delay = 0) {
    toggleElementVisibility(elementId, true, delay);
}

function hideElement(elementId, delay = 0) {
    toggleElementVisibility(elementId, false, delay);
}

// Initialize elements
document.addEventListener('DOMContentLoaded', () => {
    // Show first message
    showElement('massage1', 1);
    hideElement('massage1', 4);

    // Show countdown
    showElement('countdown', 4);
    
    // Start timer
    startTimer('timerText', 5, 5, false);
    
    // Hide countdown
    hideElement('countdown', 6);
});