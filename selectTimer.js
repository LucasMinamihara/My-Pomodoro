// minutes and seconds to change on the clock
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector("seconds");

// Timer to clockdown
let nextStepConditional;

// Minutes selected
let minutesSelected;
let breakSelected;

const clock = function (minute, pause) {
  this.minute = minute;
  this.pause = pause;
};

document.querySelectorAll("button").forEach((minutesAndBreak) => {
  minutesAndBreak.addEventListener("click", takingMinutesAndBreak);
});

function nextStep() {
  // Goes to the next Step when set the two values of the pomodoro, minute and break
  return nextStepConditional++;
}
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
  if (nextStep == 2) {
    document.querySelector(".start").addEventListener("click", function () {
      // Starting Pomodoro
      //   After This process the conditional nextStep will receive 0 again to another person can use it again
    });
  }
  nextStep();
}

function createObjectOfTimer(breakSelected, minutesSelected) {
  // Condition to create a new Constructor Object
  if (breakSelected && minutesSelected) {
    // If the two conditional is true, then we can create a new Constructor Object
    //  Changing Minutes and Break according to the setted ID
    // Filter the difference beetween minute and break
    let breakSelectedConverToNumber = parseInt(breakSelected, 10);
    let MinuteSelectedConverToNumber = parseInt(minutesSelected, 10);
    // Create a new constructor Object
    let newObjectWithBreakAndMinute = new clock(
      breakSelectedConverToNumber,
      MinuteSelectedConverToNumber
    );
    console.log(newObjectWithBreakAndMinute);
  }
}

// setInterval(() => {
//   console.log(minutesSelected);
//   console.log(breakSelected);
// }, 3000);
