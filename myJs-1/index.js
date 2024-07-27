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

//string method

// let myName = "  faizan  ";
// console.log(myName.charAt(2));
// console.log(myName.indexOf("a"));
// console.log(myName.includes("a"));
// console.log(myName.indexOf("a"));
// console.log(myName.length);
// console.log(myName);
// console.log(myName.trim());
// console.log(myName);
// console.log(myName.length);
// console.log(myName.replace("a", "/"));
// console.log(myName.replaceAll("a", "/"));
// console.log(myName.padStart(20, "x"));
// console.log(myName.padEnd(20, "x"));

// let text = "5";
// let padded = text.padStart(4, "0");
// console.log(padded);

/******************************************** */

//string slicing

// let userName = "faizan ali";
// console.log(userName.slice(0, userName.indexOf(" ")));
// console.log(userName.slice(userName.indexOf(" ") + 1));

/****************************************** */
//chaining

// let userName = window.prompt("enter ur name");
// let newUser =
// 	userName.trim().charAt(0).toUpperCase() +
// 	userName.trim().slice(1).toLowerCase();
// console.log(newUser);

/********************************************************************** */
//random number generator game.

// let min = 1;
// let max = 100;
// let running = true;
// let attempt = 0;
// let answer = Math.floor(Math.random() * (max - min + 1)) + min;
// // console.log(answer);
// while (running) {
// 	let guess = window.prompt("enter no between 1-100");
// 	guess = Number(guess);
// 	if (isNaN(guess)) {
// 		console.log("enetr a valid number");
// 	} else if (guess < min || guess > max) {
// 		console.log("enetr a valid number");
// 	} else {
// 		attempt++;
// 		if (guess < answer) console.log("too low plz enter greater no.");
// 		else if (guess > answer) console.log("too high plz enter a lower no.");
// 		else {
// 			console.log(`hurray correct ans is ${answer} and attempt is ${attempt}`);
// 			running = false;
// 		}
// 	}
// }

// let value = window.prompt("enter");
// console.log(value);

/************************************************************************ */

//temperture converter

// let temp;
// let inputId = document.getElementById("inputId");
// let fToc = document.getElementById("fToc");
// let cTof = document.getElementById("cTof");
// let result = document.getElementById("result");

// function changeTemp() {
// 	temp = inputId.value;
// 	temp = Number(temp);

// 	if (cTof.checked) {
// 		temp = (temp * 9) / 5 + 32;
// 		result.textContent = temp.toFixed(2) + "F";
// 	} else if (fToc.checked) {
// 		temp = (temp - 32) * (5 / 9);
// 		result.textContent = temp.toFixed(2) + "C";
// 	} else {
// 		result.textContent = "select a unit";
// 	}

// 	// result.textContent = temp;
// }

/*********************************************************************************** */

//spread operator

// let number = [10, 9, 8, 1, 2, 3, 4, 5, 6, 7];

// // let max = Math.max(10, 9, 8, 1, 2, 3, 4, 5, 6, 7, 11);
// let max = Math.max(...number);
// let min = Math.min(...number);
// console.log(max);
// console.log(min);

// let fruits = ["orange ", "apple"];
// let veg = ["potato", "tomato"];
// let food = [...fruits, ...veg];
// console.log(food);

// let username = "faizan ali";
// let user = [...username];
// let usernew = [...username].join("/");
// console.log(user);
// console.log(usernew);

/**************************************************************** *********************/
//rest operator
// function foods(...food) {
// 	console.log(food);
// 	console.log(...food);
// 	console.log(...food.join("-"));
// }
// foods("apple", "orange", "banana");

// function sum(...num) {
// 	let total = 0;
// 	for (let n of num) {
// 		total += n;
// 	}
// 	return total;
// }
// console.log(sum(1, 2, 3, 4, 8, 9));

/********************************************** */

// let arr = [];

// let contain = document.getElementById("container");
// arr.push(`<img src="images/dice1.png" alt="dice1" >`);
// arr.push(`<img src="images/dice2.png" alt="dice1" >`);
// contain.innerHTML = arr;

/************************************************* */

//callbacks

// hello();
// bye();

// setTimeout(() => {
// 	console.log("hello");
// }, 2000);

// //setTimeout(hello,2000)

// // function hello() {
// // 	console.log("hello");
// // }
// function bye() {
// 	console.log("bye");
// }

// hello(bye);

// function hello(callback) {
// 	console.log("hello");
// 	callback();
// }
// function bye() {
// 	console.log("bye");
// }

// sum(display, 1, 2);
// sum(displayPage, 1, 2);

// function sum(callback, n1, n2) {
// 	let result = n1 + n2;
// 	callback(result);
// }

// function display(result) {
// 	console.log(result);
// }
// function displayPage(result) {
// 	document.getElementById("myH1").textContent = result;
// }

/****************************************************************************** */
//for each

// let number = [1, 2, 3, 4, 5, 6];

// number.forEach(square);
// number.forEach(display);

// function display(element) {
// 	console.log(element);
// }

// function square(element, index, array) {
// 	array[index] = Math.pow(element, 2);
// }

// let food = ["apple", "mango", "banana"];
// food.forEach(upperCase);
// food.forEach(capitalize);
// food.forEach(display);

// function display(element) {
// 	console.log(element);
// }
// function upperCase(element, index, array) {
// 	array[index] = element.toUpperCase();
// }
// function capitalize(element, index, array) {
// 	array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

/************************************************************************ */
//map

// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.map(square);
// console.log(newArr);
// function square(element) {
// 	return Math.pow(element, 2);
// }

// let date = ["1/2/2021", "5/8/2024"];

// let update = date.map(newDate);
// console.log(update);

// function newDate(element) {
// 	let array = element.split("/");
// 	return `${array[2]}/${array[1]}/${array[0]}`;
// }

/************************************************************************* */
//filter

// let number = [2, 3, 5, 7, 9, 4];

// let evenAray = number.filter(even);
// let oddAray = number.filter(odd);
// console.log(evenAray);
// console.log(oddAray);

// function even(element) {
// 	return element % 2 === 0;
// }
// function odd(element) {
// 	return element % 2 !== 0;
// }

/***************************************************************************** */
//reduce

// let number = [1, 20, 4, 85, 14, 74];

// let newArray = number.reduce(sum);
// let max = number.reduce(maximum);
// console.log(newArray);
// console.log(max);
// function sum(prev, next) {
// 	return prev + next;
// }
// function maximum(prev, next) {
// 	return Math.max(prev, next);
// }

/*************************************************************************** */
//function expression

// const volla = function (value) {
// 	console.log("hello" + " " + value);
// };
// volla("ali");

// let number = [1, 20, 4, 85, 14, 74];

// let squareArray = number.map(function (element) {
// 	return Math.pow(element, 2);
// });

// let evenArray = number.filter(function (element) {
// 	return element % 2 === 0;
// });
// let sumArray = number.reduce(function (acc, ele) {
// 	return acc + ele;
// });
// let maxArray = number.reduce((acc, ele) => {
// 	return Math.max(acc, ele);
// });
// console.log(squareArray);
// console.log(evenArray);
// console.log(sumArray);
// console.log(maxArray);

/************************************************************************** */
//object

// const person = {
// 	name: "ali",
// 	age: 25,
// 	mobile: 8853405237,
// 	call: function () {
// 		return "you can call me baby";
// 	},
// 	busy: () => "busy my love",
// 	free: function () {
// 		return `hi my name is ${this.name} and my age is ${this.age}`;
// 	},
// 	//this doesnt work with arrow function
// };

// console.log(person.age);
// console.log(person.name);
// console.log(person.mobile);
// console.log(person.call());
// console.log(person.busy());
// console.log(person.free());

/************************************************************************** */
//constructor

// function Car(brand, name, model) {
// 	(this.brand = brand),
// 		(this.name = name),
// 		(this.model = model),
// 		(this.drive = function () {
// 			console.log(`you drive ${this.brand} model ${this.model}`);
// 		});
// }

// const car1 = new Car("suzuki", "baleno", 2021);
// const car2 = new Car("honda", "city", 2016);
// console.log(car1.brand);
// console.log(car1.model);
// console.log(car1.name);
// console.log(car1.drive());
// console.log(car2.brand);
// console.log(car2.model);
// console.log(car2.name);
// console.log(car2.drive());

/****************************************************************** */
//class

// class Car {
// 	constructor(brand, model) {
// 		(this.brand = brand), (this.model = model);
// 	}
// 	drive() {
// 		console.log(`u drive a ${this.brand} and ${this.model} model`);
// 	}
// 	sell(tax) {
// 		console.log(`tax on selling is ${tax}`);
// 	}
// }

// const car1 = new Car("honda", 2016);
// console.log(car1.brand);
// console.log(car1.model);
// console.log(car1.drive());
// console.log(car1.sell(100));

/*************************************************************************** */
// //destructure
// let a = 10;
// let b = 20;
// [b, a] = [a, b];
// console.log(a);
// console.log(b);
// let number = [1, 2, 3, 4, 5];
// [number[4], number[0]] = [number[0], number[4]];
// console.log(number);
// const [n1, n2, ...n3] = number;
// console.log(n1);
// console.log(n2);
// console.log(n3);

// const person = {
// 	name: "ali",
// 	age: 25,
// };
// const { name, age } = person;
// console.log(name);
// console.log(age);

// test(person);
// function test({ name, age }) {
// 	console.log(name);
// 	console.log(age);
// }

// const myVehicle = {
// 	brand: "Ford",
// 	model: "Mustang",
// 	color: "red",
// };

// const updateMyVehicle = {
// 	type: "car",
// 	year: 2021,
// 	color: "yellow",
// };

// const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

// //Check the result object in the console:
// console.log(myUpdatedVehicle);
