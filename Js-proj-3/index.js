const choices = ["paper", "rock", "scissors"];
let result = document.getElementById("result");
let ps = 0;
let cs = 0;
let cc = document.getElementById("cc");
let pc = document.getElementById("pc");
let playerScore = document.getElementById("playerScore");
let compScore = document.getElementById("compScore");
function player(playerChoice) {
	let comp = choices[Math.floor(Math.random() * 3)];
	pc.textContent = `Player choice: ${playerChoice}`;
	cc.textContent = `Computer choice: ${comp}`;

	if (playerChoice == comp) {
		result.textContent = "Tie";
	} else if (playerChoice == "scissors") {
		if (comp == "paper") {
			result.textContent = "you win";
			ps++;
		}
		if (comp == "rock") {
			result.textContent = "computer win";
			cs++;
		}
	} else if (playerChoice == "rock") {
		if (comp == "paper") {
			result.textContent = "you win";
			ps++;
		}
		if (comp == "scissors") {
			result.textContent = "you win";
			ps++;
		}
	} else if (playerChoice == "paper") {
		if (comp == "rock") {
			result.textContent = "computer win";
			cs++;
		}
		if (comp == "scissors") {
			result.textContent = "computer win";
			cs++;
		}
	}
	playerScore.textContent = `player Score:${ps}`;
	compScore.textContent = `comp Score:${cs}`;
}
