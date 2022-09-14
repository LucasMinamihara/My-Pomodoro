// Taking variables values
// Taking Screen Values
const initialScreen = document.getElementById("initialScreen");
const secondScreen = document.getElementById("secondScreen");
const thirdScreen = document.getElementById("thirdScreen");

// Start Button

const startButton = document.getElementById("startButton");
const finishButton = document.getElementById("FinishButton");

// Oficial Clock
const oficialClock = document.getElementById("oficialClock");

// minutes and seconds to change on the clock
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let secondOnTimeDrown = 0;

// taking all minute of activity
let numPomodoro = 0;
let allMinutes = 0;
// Minutes selected
let minutesSelected;
let breakSelected;
let point = window.document.querySelector(".point");

const clock = function (minute, pause) {
  this.minute = minute;
  this.pause = pause;
};

document.querySelectorAll("button").forEach((minutesAndBreak) => {
  minutesAndBreak.addEventListener("click", takingMinutesAndBreak);
});

function takingMinutesAndBreak(element) {
  let minuteOrBreak = element.target.id;
  if (minuteOrBreak.includes("minute")) {
    // the variable will receive the id
    minutesSelected = minuteOrBreak;
    createObjectOfTimer(minutesSelected, breakSelected);
  }
  if (minuteOrBreak.includes("break")) {
    // the variable will receive the id
    breakSelected = minuteOrBreak;
    createObjectOfTimer(breakSelected, minutesSelected);
  }
}
function createObjectOfTimer(breakSelected, minutesSelected) {
  // Condition to create a new Constructor Object
  if (breakSelected && minutesSelected) {
    // If the two conditional is true, then we can create a new Constructor Object
    //  Changing Minutes and Break according to the setted ID

    let breakSelectedConverToNumber = parseInt(breakSelected, 10);
    let MinuteSelectedConverToNumber = parseInt(minutesSelected, 10);

    // Create a new constructor Object
    let newObjectWithBreakAndMinute = new clock(
      MinuteSelectedConverToNumber,
      breakSelectedConverToNumber
    );
    // New function on another page
    setInf(newObjectWithBreakAndMinute);
  }
}

// - create another button that stop the pomodoro

function finishTask(pomodoroBreak, pomodoroTime) {
  finishButton.addEventListener("click", function () {
    clearInterval(pomodoroBreak);
    clearInterval(pomodoroTime);
    setTimeout(() => {
      finishAll();
      document.querySelector(".container").classList.add("hidden");
      finished();
    }, 1000);
  });
}

function finished() {
  let finishP = document.querySelector(".finishScreenP");
  document.querySelector(".finishScreenDiv").classList.remove("hidden");
  finishedScreen(finishP);
}

function finishedScreen(finishP) {
  if (allMinutes > 5) {
    finishP.textContent = `You did ${allMinutes.toFixed(
      2
    )} Hours today! congratulations ❤❤❤❤❤`;
  } else {
    finishP.textContent = `You did ${allMinutes.toFixed(
      2
    )} Hours today 💥💥💥💥`;
  }
}

// reload page button
document.querySelector("#reload").addEventListener("click", function() {
  location.reload();
});


