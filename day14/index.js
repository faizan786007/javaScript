let flag;
let id;

function start() {
	if (!flag) {
		id = setInterval(colorSwitch, 1000);
	}
}
function colorSwitch() {
	let h1 = document.getElementById("heading");
	h1.className = h1.className === "red" ? "green" : "red";
}
function stop() {
	clearInterval(id);
	flag = null;
}

///localStorage and Json
function add() {
	const user = { name: "ali", age: 25, city: "lucknow" };
	let myData = JSON.stringify(user);
	// console.log(myData);
	localStorage.setItem("userData", myData);
}
function get() {
	console.log(JSON.parse(localStorage.getItem("userData")));
}
function del() {
	localStorage.removeItem("userData");
}
