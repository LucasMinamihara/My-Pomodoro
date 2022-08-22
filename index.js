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
