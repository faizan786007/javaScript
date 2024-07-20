// let myName = "ali";
// let myAge = 25;
// let student = true;
// document.getElementById("myName").textContent = `your name is ${myName}`;
// document.getElementById("myAge").textContent = `your age is ${myAge}`;
// document.getElementById("student").textContent = `you are student ${student}`;

/*********************************** */

// let userName = window.prompt("your name");
// console.log(userName);

// let userName;
// document.getElementById("myBtn").onclick = function () {
// 	userName = document.getElementById("myText").value;
// 	document.getElementById("h1").textContent = `your name is ${userName}`;
// };

/******************************************** */

/*type convertion*/

// let age = window.prompt("whats your age");
// age = Number(age);
// age += 1;

// console.log(age);

// let x = "faizan";
// let y = "ali";
// let z = "mohd";

// let x = "0";
// let y = "0";
// let z = "0";

// let x = "";
// let y = "";
// let z = "";

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/************************************************************ */

// const PI = 3.14;
// let radius;
// let circumference;

// document.getElementById("myBtn").onclick = function () {
// 	radius = document.getElementById("myText").value;

// 	radius = Number(radius);
// 	circumference = 2 * PI * radius;

// 	document.getElementById(
// 		"h2"
// 	).textContent = `circumference of circle is ${circumference} cm`;
// };

/********************************************************************** */

//counter

// let count = 0;

// document.getElementById("btnI").onclick = function () {
// 	count++;
// 	document.getElementById("h1").textContent = count;
// };

// document.getElementById("btnD").onclick = function () {
// 	count--;
// 	document.getElementById("h1").textContent = count;
// };
// document.getElementById("btnR").onclick = function () {
// 	count = 0;
// 	document.getElementById("h1").textContent = count;
// };

/******************************************************************** */

//math

// let x = 3.15;
// let y = 5;
// let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(2, y);

// console.log(z);
// console.log(z);
// console.log(z);
// console.log(z);
// console.log(z);

/**************************************************************** */

//dice
// let max = 6;
// let min = 1;
// let btn = document.getElementById("myBtn");
// btn.onclick = function () {
// 	let randomNumber = Math.floor(Math.random() * max) + min;
// 	document.getElementById("h1").textContent = randomNumber;
// };

/**************************************************************** */

//checked property

// let visaBtn = document.getElementById("visaBtn");
// let masterCardBtn = document.getElementById("masterCardBtn");
// let rupayBtn = document.getElementById("rupayBtn");
// let checkBoxBtn = document.getElementById("checkBoxBtn");
// let btn = document.getElementById("btn");

// btn.onclick = function () {
// 	if (checkBoxBtn.checked) {
// 		document.getElementById("subs").textContent = `you are subscribed`;
// 	} else {
// 		document.getElementById("subs").textContent = `you are not subscribed`;
// 	}

// 	if (masterCardBtn.checked) {
// 		document.getElementById("card").textContent = `you have master card`;
// 	} else if (rupayBtn.checked) {
// 		document.getElementById("card").textContent = `you have raupay  card`;
// 	} else if (visaBtn.checked) {
// 		document.getElementById("card").textContent = `you have visa  card`;
// 	} else {
// 		document.getElementById("card").textContent = `you dont have a  card`;
// 	}
// };

/****************************************************************************** */

//terniary operator

// let purchaseAmount = 150;

// let discount = purchaseAmount > 100 ? 50 : 0;

// console.log(
// 	`final price is ${purchaseAmount - purchaseAmount * (discount / 100)}`
// );

/******************************************************************** */

//switch

// let score = 42;
// let grade;

// switch (true) {
// 	case score > 90:
// 		grade = "A";
// 		console.log(`you score ${grade}`);
// 		break;
// 	case score > 75:
// 		grade = "B";
// 		console.log(`you score ${grade}`);
// 		break;
// 	case score > 50:
// 		grade = "C";
// 		console.log(`you score ${grade}`);
// 		break;
// 	case score > 40:
// 		grade = "D";
// 		console.log(`you score ${grade}`);
// 		break;

// 	default:
// 		break;
// }

/************************************************************************ */

//string
