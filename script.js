const startStopBtn = document.querySelector(".start-stop");
const stoptButton = document.querySelector(".stop");
const resettButton = document.querySelector(".reset");

const txtMilliseconds = document.querySelector(".milliseconds");
const txtSeconds = document.querySelector(".seconds");
const txtMinutes = document.querySelector(".minutes");

let milliNum = 0;
let secNum = 0;
let minNum = 0;
let intervalo;

let isRunning = true;

function milliseconds() {
  milliNum++;
  if (milliNum < 10) {
    txtMilliseconds.innerHTML = "00" + milliNum;
  } else if (milliNum >= 10 || milliNum <= 99) {
    txtMilliseconds.innerHTML = "0" + milliNum;
  } else {
    txtMilliseconds.innerHTML = milliNum;
  }

  if (milliNum === 99) {
    milliNum = 0;
    seconds();
  }
}

function seconds() {
  secNum++;
  if (secNum < 10) {
    txtSeconds.innerHTML = "0" + secNum;
  } else {
    txtSeconds.innerHTML = secNum;
  }

  if (secNum === 59) {
    secNum = 0;
    minutes();
  }
}

function minutes() {
  minNum++;
  if (minNum < 10) {
    txtMinutes.innerHTML = "0" + minNum;
  } else {
    txtMinutes.innerHTML = minNum;
  }
}

function start() {
  isRunning = !isRunning;

  if (isRunning) {
    clearInterval(intervalo);
    startStopBtn.textContent = "INICIAR";
  } else {
    intervalo = setInterval(() => {
      milliseconds();
    }, 10);
    startStopBtn.textContent = "PARAR";
  }
}

const stop = () => clearInterval(intervalo);

function reset() {
  clearInterval(intervalo);
  milliNum = 0;
  secNum = 0;
  minNum = 0;
  txtMilliseconds.innerHTML = "000";
  txtSeconds.innerHTML = "00";
  txtMinutes.innerHTML = "00";
  startStopBtn.textContent = "INICIAR";
}

startStopBtn.addEventListener("click", start);
stoptButton.addEventListener("click", stop);
resettButton.addEventListener("click", reset);
