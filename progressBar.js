const progressBar = document.querySelector(".progressBar");
let maximumPomodoro = 0;

function newProgress(newObjectWithBreakAndMinuteCopy) {
  if (maximumPomodoro < 10) {
    attDataBase(newObjectWithBreakAndMinuteCopy.minute);
    const newSquareProgress = `<div class="squareProgressBar">${++numPomodoro}</div>`;
    progressBar.insertAdjacentHTML("beforeend", newSquareProgress);
    maximumPomodoro++;
    allMinutes =
      (newObjectWithBreakAndMinuteCopy.minute * maximumPomodoro) / 60;
  }
}
