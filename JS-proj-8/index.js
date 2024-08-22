let min = 0;
let sec = 0;
let milsec = 0;
let flag = false;
let timer;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

function display() {
	document.getElementById("min").textContent = String(min).padStart(2, "0");
	document.getElementById("sec").textContent = String(sec).padStart(2, "0");
	document.getElementById("milsec").textContent = String(milsec).padStart(
		3,
		"0"
	);
}

function starting() {
	if (!flag) {
		flag = true;
		timer = setInterval(() => {
			milsec += 10;
			if (milsec >= 1000) {
				milsec = 0;
				sec++;
			}
			if (sec >= 60) {
				sec = 0;
				min++;
			}
			display();
		}, 10);
	}
}
function stoping() {
	if (flag) {
		flag = false;
		clearInterval(timer);
	}
}
function reseting() {
	clearInterval(timer);
	min = 0;
	sec = 0;
	milsec = 0;
	flag = false;
	display();
}

start.addEventListener("click", starting);
stop.addEventListener("click", stoping);
reset.addEventListener("click", reseting);
