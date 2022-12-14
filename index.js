function setInf(newObjectWithBreakAndMinute) {
  startPomodoro(newObjectWithBreakAndMinute);
}

function startPomodoro(newObjectWithBreakAndMinute) {
  let newObjectWithBreakAndMinuteCopy = {
    ...newObjectWithBreakAndMinute,
  };
  document.querySelector(".start").addEventListener("click", function () {
    playPomodoroSound();
    setTimeout(() => {
      startButton.style.display = "none";
      point.textContent = ":";
      finishButton.classList.remove("invisible");
    }, 1000);
    restartPomodoro(
      newObjectWithBreakAndMinute,
      newObjectWithBreakAndMinuteCopy
    );
  });
}

function restartPomodoro(
  newObjectWithBreakAndMinute,
  newObjectWithBreakAndMinuteCopy,
  pomodoroBreak
) {
  newObjectWithBreakAndMinute = { ...newObjectWithBreakAndMinuteCopy };
  const pomodoroTime = setInterval(() => {
    minutes.textContent = String(newObjectWithBreakAndMinute.minute).padStart(
      2,
      0
    );
    seconds.textContent = String(secondOnTimeDrown--).padStart(2, 0);

    if (newObjectWithBreakAndMinute.minute == 00 && secondOnTimeDrown == 00) {
      setTimeout(() => {
        newProgress(newObjectWithBreakAndMinuteCopy);
      }, 1000);
      changeColor();
      breakTimer(
        pomodoroTime,
        newObjectWithBreakAndMinute,
        newObjectWithBreakAndMinuteCopy
      );
    }

    if (secondOnTimeDrown == -1) {
      seconds.textContent = String(00).padStart(2, 0);
      secondOnTimeDrown = 59;
      newObjectWithBreakAndMinute.minute--;
    }
  }, 1000);
  finishTask(pomodoroBreak, pomodoroTime);
}

function breakTimer(
  pomodoroTime,
  newObjectWithBreakAndMinute,
  newObjectWithBreakAndMinuteCopy
) {
  // Clear last interval
  clearInterval(pomodoroTime);
  //   Pause Timer
  const pomodoroBreak = setInterval(() => {
    minutes.textContent = String(newObjectWithBreakAndMinute.pause).padStart(
      2,
      0
    );
    seconds.textContent = String(secondOnTimeDrown--).padStart(2, 0);
    if (newObjectWithBreakAndMinute.pause == 00 && secondOnTimeDrown == 00) {
      // Putting values again on the constructor main object
      clearInterval(pomodoroBreak);
      returnColor();
      restartPomodoro(
        newObjectWithBreakAndMinute,
        newObjectWithBreakAndMinuteCopy
      );
    }
    if (secondOnTimeDrown == -1) {
      seconds.textContent = String(00).padStart(2, 0);
      secondOnTimeDrown = 59;
      minutes.textContent = String(
        newObjectWithBreakAndMinute.pause--
      ).padStart(2, 0);
    }
  }, 1000);
  finishTask(pomodoroBreak, pomodoroTime);
}

// Initialization the application
document.querySelector("#welcomeButton").addEventListener("click", function () {
  initialScreen.classList.add("hidden");
  secondScreen.classList.remove("hidden");
});

// Looping over a btn-timer options, minutes and break

const allbtnTimerOption = document.querySelectorAll(".btn-timer");
const countOptFunction = 0;
function options(countOptFunction) {
  allbtnTimerOption.forEach((eachTimer) => {
    eachTimer.addEventListener("click", function () {
      if (countOptFunction == 0 && minutesSelected) {
        secondScreen.classList.add("hidden");
        thirdScreen.classList.remove("hidden");
        options(countOptFunction++);
      }
      if (countOptFunction == 1 && breakSelected) {
        thirdScreen.classList.add("hidden");
        startButton.classList.remove("invisible");
        oficialClock.classList.remove("invisible");
        options(countOptFunction++);
      }
      if (countOptFunction == 2) {
        return;
      }
    });
  });
}
options(countOptFunction);
