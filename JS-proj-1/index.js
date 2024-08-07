function timer() {
	let now = new Date();

	let hr = now.getHours();
	let meridiam = hr > 12 ? "am" : "pm";
	hr = hr % 12 || 12;
	hr = hr.toString().padStart(2, 0);
	let min = now.getMinutes().toString().padStart(2, 0);
	let sec = now.getSeconds().toString().padStart(2, 0);

	let heading = document.getElementById("heading");
	heading.textContent = `${hr}:${min}:${sec} ${meridiam}`;
	setInterval(timer, 1000);
}
timer();
