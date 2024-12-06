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
    
// Start timer
startTimer('timerText', 1, 5, false);