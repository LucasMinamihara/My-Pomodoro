function changeColor() {
  setTimeout(() => {
    if (soundPomodoro.play()) {
      soundPomodoro.pause();
    }
    playBreakSound();
    oficialClock.style.backgroundColor = "#111827";
    finishButton.style.backgroundColor = "#111827";
  }, 1000);
}
function returnColor() {
  setTimeout(() => {
    playPomodoroSound();
    oficialClock.style.backgroundColor = "#18181b";
    finishButton.style.backgroundColor = "#18181b";
  }, 1000);
}
