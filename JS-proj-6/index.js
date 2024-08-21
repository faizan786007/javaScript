let container = document.getElementById("container");
document.addEventListener("keydown", (e) => {
	// console.log(e.key);
	container.style.backgroundColor = "red";
	container.textContent = "😲";
});
document.addEventListener("keyup", (e) => {
	// console.log(e.key);
	container.style.backgroundColor = "limegreen";
	container.textContent = " 😃";
});
let x = 0;
let y = 0;
let moving = 10;
document.addEventListener("keydown", (e) => {
	// console.log(e.key);
	if (e.key.startsWith("Arrow")) {
		switch (e.key) {
			case "ArrowUp":
				y -= moving;
				break;
			case "ArrowDown":
				y += moving;
				break;
			case "ArrowLeft":
				x -= moving;
				break;
			case "ArrowRight":
				x += moving;
				break;

			default:
				break;
		}
		container.style.top = `${y}px`;
		container.style.left = `${x}px`;
	}
});
