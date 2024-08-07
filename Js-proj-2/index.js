let inputValue = document.getElementById("inputValue");

function append(input) {
	inputValue.value += input;
}
function clearInput() {
	console.log("clear");
	inputValue.value = "";
}
function calculate() {
	try {
		inputValue.value = eval(inputValue.value).toFixed(5);
	} catch (error) {
		inputValue.value = "error";
	}
}
