function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = currentMode === "work" ? workTime : breakTime;
  updateDisplay();
}

function setMode(mode) {
  pauseTimer();
  currentMode = mode;
  timeLeft = mode === "work" ? workTime : breakTime;
  updateDisplay();
}

function toggleMode() {
  currentMode = currentMode === "work" ? "break" : "work";
  timeLeft = currentMode === "work" ? workTime : breakTime;
  updateDisplay();
}

updateDisplay();
