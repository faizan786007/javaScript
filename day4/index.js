let btn = document.getElementById("btn");
let text = document.getElementById("myText");
let h2 = document.getElementById("h2");
let age;

btn.onclick = function () {
	age = text.value;
	age = Number(age);
	if (age == 18) {
		h2.textContent = `You are eligible for "LEARNING" license`;
	} else if (age > 18 && age <= 60) {
		h2.textContent = `You are eligible for 'DRIVING' license`;
	} else if (age <= 0 || age > 100) h2.textContent = `You DON'T exist`;
	else if (age <= 17 || age > 60)
		h2.textContent = `You are 'NOT' eligible for 'DRIVING' license`;
};
