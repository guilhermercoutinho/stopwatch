const startButton = document.querySelector('.start')
const stoptButton = document.querySelector('.stop')
const resettButton = document.querySelector('.reset')

const milli = document.querySelector('.milliseconds')
const sec = document.querySelector('.seconds')
const min = document.querySelector('.minutes')

let milliNum = 0
let secNum = 0
let minNum = 0
let intervalo

function milliseconds() {
    milliNum++
    if (milliNum < 10) {
        milli.innerHTML = '00' + milliNum
    } else if (milliNum >= 10 || milliNum <= 99){
        milli.innerHTML = '0' + milliNum
    } else {
        milli.innerHTML = milliNum
    }

    if (milliNum === 99) {
        milliNum = 0
        seconds()
    }
}

function seconds() {
    secNum++
    if (secNum < 10) {
        sec.innerHTML = '0' + secNum
    } else {
        sec.innerHTML = secNum
    }

    if (secNum === 59) {
        secNum = 0
        minutes()
    }
}

function minutes() {
    minNum++
    if (minNum < 10) {
        min.innerHTML = '0' + minNum
    } else {
        min.innerHTML = minNum
    }
}

function start() {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
        milliseconds()
    }, 10);
}

const stop = () => clearInterval(intervalo)

function reset() {
    clearInterval(intervalo)
    milliNum = 0
    secNum = 0
    minNum = 0
    milli.innerHTML = '000'
    sec.innerHTML = '00'
    min.innerHTML = '00'
  }

startButton.addEventListener("click", start)
stoptButton.addEventListener("click", stop)
resettButton.addEventListener("click", reset)
