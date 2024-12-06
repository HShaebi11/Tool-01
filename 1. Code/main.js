function startTimer(targetElementId, duration, startDelay, showMilliseconds = false) {
    const timerElement = document.getElementById(targetElementId);
    if (!timerElement) return; // Guard against missing element

    setTimeout(() => {
        let startTime = Date.now();
        let endTime = startTime + (duration * 1000);
        let animationFrameId;
      
        function formatTime(milliseconds) {
            const minutes = Math.floor(milliseconds / 60000);
            const seconds = Math.floor((milliseconds % 60000) / 1000);
            const ms = milliseconds % 1000;
            return showMilliseconds 
                ? `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`
                : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
      
        function countdown() {
            const currentTime = Date.now();
            const remainingTime = endTime - currentTime;
            
            if (remainingTime > 0) {
                timerElement.textContent = formatTime(remainingTime);
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