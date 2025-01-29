const startStopBtn = document.querySelector(".start-stop");
const resetBtn = document.querySelector(".reset");
const markBtn = document.querySelector(".mark");
const markList = document.getElementById("mark-list");

const txtMilliseconds = document.querySelector(".milliseconds");
const txtSeconds = document.querySelector(".seconds");
const txtMinutes = document.querySelector(".minutes");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;

let isRunning = true;

function calcMilliseconds() {
  milliseconds++;
  if (milliseconds < 10) {
    txtMilliseconds.innerHTML = "0" + milliseconds;
  } else if (milliseconds >= 10 || milliseconds <= 99) {
    txtMilliseconds.innerHTML = milliseconds;
  }

  if (milliseconds === 99) {
    milliseconds = 0;
    calcSeconds();
  }
}

function calcSeconds() {
  seconds++;
  seconds < 10
    ? (txtSeconds.innerHTML = "0" + seconds)
    : (txtSeconds.innerHTML = seconds);

  if (seconds === 59) {
    seconds = 0;
    calcMinutes();
  }
}

function calcMinutes() {
  minutes++;
  minutes < 10
    ? (txtMinutes.innerHTML = "0" + minutes)
    : (txtMinutes.innerHTML = minutes);
}

function startStop() {
  isRunning = !isRunning;

  if (isRunning) {
    clearInterval(interval);
    startStopBtn.textContent = "INICIAR";
  } else {
    interval = setInterval(() => {
      calcMilliseconds();
    }, 10);
    startStopBtn.textContent = "PARAR";
  }
}

function reset() {
  clearInterval(interval);

  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  txtMilliseconds.innerHTML = "00";
  txtSeconds.innerHTML = "00";
  txtMinutes.innerHTML = "00";
  startStopBtn.innerHTML = "INICIAR";
  markList.innerHTML = "";
}

function mark() {
  const markItem = document.createElement("li");
  markItem.innerHTML = `${txtMinutes.innerHTML}:${txtSeconds.innerHTML}.<span class="mark-span">${txtMilliseconds.innerHTML}</span>`;
  markList.appendChild(markItem);
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
markBtn.addEventListener("click", mark);
