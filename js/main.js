var second = document.getElementById("second");
var time = document.getElementById("time");
var speed = document.getElementById("speed");
var fast = document.getElementById("fast");

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var count = 0;
var countersec = 0;
var IntervalId;

start.addEventListener("click", function () {
    IntervalId = setInterval(function (p) {
        count++;
        fast.innerHTML = count;
        if (count > 9) {
            speed.style.display = "none";
        }
        if (count > 59) {
            speed.style.display = "block";
            fast.innerHTML = 0;
            count = 0;
            countersec++;
            time.innerHTML = countersec + ":";
        }
        if (countersec > 9) {
            speed.style.display = "none";
        }
    }, 20, count)
})

stop.addEventListener("click", function () {
    clearInterval(IntervalId);
})


reset.addEventListener("click", function () {
    clearInterval(IntervalId);
    count = 0;
    countersec = 0;
    time.innerHTML = 0 + ":";
    fast.innerHTML = 0;
    second.style.display = "block";
    speed.style.display = "block";
})