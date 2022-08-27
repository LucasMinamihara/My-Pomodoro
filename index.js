function setInf(newObjectWithBreakAndMinute) {
  startPomodoro(newObjectWithBreakAndMinute);
}

function startPomodoro(newObjectWithBreakAndMinute) {
  let newObjectWithBreakAndMinuteCopy = {
    ...newObjectWithBreakAndMinute,
  };
  document.querySelector(".start").addEventListener("click", function () {
    restartPomodoro(
      newObjectWithBreakAndMinute,
      newObjectWithBreakAndMinuteCopy
    );
  });
}

function restartPomodoro(
  newObjectWithBreakAndMinute,
  newObjectWithBreakAndMinuteCopy
) {
  newObjectWithBreakAndMinute = { ...newObjectWithBreakAndMinuteCopy };
  const pomodoroTime = setInterval(() => {
    minutes.textContent = newObjectWithBreakAndMinute.minute;
    seconds.textContent = secondOnTimeDrown--;

    if (newObjectWithBreakAndMinute.minute == 00 && secondOnTimeDrown == 00) {
      breakTimer(
        pomodoroTime,
        newObjectWithBreakAndMinute,
        newObjectWithBreakAndMinuteCopy
      );
    }

    if (secondOnTimeDrown == 00) {
      secondOnTimeDrown = 59;
      newObjectWithBreakAndMinute.minute--;
    }
  }, 1000);
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
    console.log(newObjectWithBreakAndMinute.pause);
    minutes.textContent = newObjectWithBreakAndMinute.pause;
    seconds.textContent = secondOnTimeDrown--;
    if (newObjectWithBreakAndMinute.pause == 00 && secondOnTimeDrown == 00) {
      // Putting the values again on the constructor main object
      clearInterval(pomodoroBreak);
      console.log("lets try to restart the pomodoro");
      console.log(newObjectWithBreakAndMinute);
      restartPomodoro(
        newObjectWithBreakAndMinute,
        newObjectWithBreakAndMinuteCopy
      );
    }
    if (secondOnTimeDrown == 00) {
      secondOnTimeDrown = 59;
      minutes.textContent = newObjectWithBreakAndMinute.pause--;
    }
  }, 1000);
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
