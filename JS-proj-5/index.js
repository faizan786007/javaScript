let container = document.getElementById("container");
container.addEventListener("click", (e) => {
	// console.log(e);
	e.target.style.backgroundColor = "red";
	e.target.textContent = "ouchh 🤯";
});

container.addEventListener("mouseover", (e) => {
	e.target.style.backgroundColor = "yellow";
	e.target.textContent = "I'm Angry 😡";
});
container.addEventListener("mouseout", (e) => {
	e.target.style.backgroundColor = "limegreen";
	e.target.textContent = "Click me 😉";
});
