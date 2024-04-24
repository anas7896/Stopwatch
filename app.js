var hourHeading = document.getElementById("hour")
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

function timer () {
    msec++
    msecHeading.innerHTML = msec
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }

    else if (sec >= 2) {
        min++
    }
}

function start() {
    setInterval (timer, 10)
}

function pause() {
    clearInterval (timer, 10)
}
