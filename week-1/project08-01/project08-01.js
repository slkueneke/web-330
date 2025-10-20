"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Shannon Kueneke
      Date:   October 20, 2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

//constructor function for timer
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

//Method for running and pausing the timer countdown
timer.prototype.runPause = function(timer, minBox, secBox) {
  if (!!timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(countdown, 1000);
  }

  //function that updates the timer every second
  function countdown() {
    if (timer.seconds > 0) {
      timer.seconds--;
    } else if (timer.minutes > 0) {
      timer.minutes--;
      timer.seconds = 59;
    } else {
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
}



/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

//new instance of timer object
let myTimer = new timer(minBox.value, secBox.value);

//on change for minutes box, update min value
minBox.onchange = function() {
  myTimer.minutes = minBox.value;
}

//on change of seconds box, update sec value
secBox.onchange = function() {
  myTimer.seconds = secBox.value;
}

//on click of run/pause button, call runPause on myTimer
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
}