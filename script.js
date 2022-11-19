const minCounter = document.getElementById("min-counter");
const secCounter = document.getElementById("sec-counter");
const milisecCounter = document.getElementById("milisec-counter");

var minute = 1;
var second = 1;
var milisecond = 1;
var minInterval;
var secInterval;
var milisecInterval;
var timmer = false;

// handle start counter
function startTimmer() {
  // if counter is of then start counter
  if (!timmer) {
    timmer = true;
    // trigger milisecond function
    handleMilisecond();
    // trigger seconds function
    handleSecond();
    // trigger minute function
    handleMinute();
  }
}

// handle milisecond count
function handleMilisecond() {
  milisecInterval = setInterval(function () {
    if (milisecond >= 60) {
      milisecond = 0;
    }
    let milisecValue = milisecond++;
    if (milisecValue < 10) {
      milisecCounter.innerText = "0" + milisecValue;
    } else {
      milisecCounter.innerText = milisecValue;
    }
  }, 1);
}

// handle seconds count
function handleSecond() {
  secInterval = setInterval(function () {
    if (second >= 60) {
      second = 0;
    }
    let secValue = second++;
    if (secValue < 10) {
      secCounter.innerText = "0" + secValue;
    } else {
      secCounter.innerText = secValue;
    }
  }, 1000);
}
//   handle minute count
function handleMinute() {
  minInterval = setInterval(function () {
    let minValue = minute++;
    if (minValue < 10) {
      minCounter.innerText = "0" + minValue;
    } else {
      minCounter.innerText = minValue;
    }
  }, 60000);
}

// handle stop counting
function stopTimmer() {
  // if counter is on then stop counter
  if (timmer) {
    timmer = false;
    clearInterval(milisecInterval);
    clearInterval(secInterval);
    clearInterval(minInterval);
  }
}
// handle reset counter
function resetTimmer() {
  // clear the intervals
  stopTimmer();
  //   reset the values
  minute = 1;
  second = 1;
  milisecond = 1;
  milisecCounter.innerText = "00";
  secCounter.innerText = "00";
  minCounter.innerText = "00";
}
