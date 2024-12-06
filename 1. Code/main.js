alert("Hello World");

function startTimer() {
    const timerElement = document.getElementById('timerText');
    let remainingTime = 5;
  
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${remainderSeconds.toString().padStart(2, '0')}`;
    }
  
    function countdown() {
      if (remainingTime > 0) {
        timerElement.textContent = formatTime(remainingTime);
        remainingTime--;
        setTimeout(countdown, 1000);
      } else {
        timerElement.textContent = '00:00';
      }
    }
  
    countdown();
  }