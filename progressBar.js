const progressBar = document.querySelector(".progressBar");
let maximumPomodoro = 0;

function newProgress(newObjectWithBreakAndMinuteCopy) {
  if (maximumPomodoro < 10) {
    const newSquareProgress = `<div class="squareProgressBar">${++numPomodoro}</div>`;
    progressBar.insertAdjacentHTML("beforeend", newSquareProgress);
    maximumPomodoro++;
    allMinutes =
      (newObjectWithBreakAndMinuteCopy.minute * maximumPomodoro) / 60;
  }
}
