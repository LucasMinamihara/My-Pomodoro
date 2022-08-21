function setInf(newObjectWithBreakAndMinute) {
  startPomodoro(newObjectWithBreakAndMinute);
}

function startPomodoro(newObjectWithBreakAndMinute) {
  console.log(newObjectWithBreakAndMinute.minute);
  document.querySelector(".start").addEventListener("click", function () {
    const pomodoroTime = setInterval(() => {
      minutes.textContent = newObjectWithBreakAndMinute.minute;
      seconds.textContent = secondOnTimeDrown--;

      if (newObjectWithBreakAndMinute.minute == 00 && secondOnTimeDrown == 00) {
        breakTimer(pomodoroTime, newObjectWithBreakAndMinute);
      }

      if (secondOnTimeDrown == 00) {
        secondOnTimeDrown = 2;
        newObjectWithBreakAndMinute.minute--;
      }
    }, 1000);
  });
}

function breakTimer(pomodoroTime, newObjectWithBreakAndMinute) {
  // Clear last interval
  clearInterval(pomodoroTime);
  //   Pause Timer
  console.log(newObjectWithBreakAndMinute.pause);
  const pomodoroBreak = setInterval(() => {
    console.log(newObjectWithBreakAndMinute.pause);
    minutes.textContent = newObjectWithBreakAndMinute.pause;
    seconds.textContent = secondOnTimeDrown--;
    if (newObjectWithBreakAndMinute.pause == 00 && secondOnTimeDrown == 00) {
      // Maybe Create a copy of the main Object constructor will resolve my problem here
      clearInterval(pomodoroBreak);
      console.log(newObjectWithBreakAndMinute);
      startPomodoro();
    }
    if (secondOnTimeDrown == 00) {
      secondOnTimeDrown = 2;
      minutes.textContent = newObjectWithBreakAndMinute.pause--;
    }
  }, 1000);
}
