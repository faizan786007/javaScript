//&& =>last truthy and first falsy
//|| =>first truthy and last falsy
// null,undefinded,false,0,'',Nan====>falsy

console.log(5 && 1 && 3);
console.log(5 && false && 3);
console.log(false || "" || null || 2);
console.log(1 || false || "" || null || 2);

// console.log(3 > 2 > 1); //false ==>true==1 && false==0
// console.log(1 < 2 < 3); //true

// console.log(undefined == null); //both are false but type is different
// console.log(undefined === null);

// console.log(String(100));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));

// console.log(Number("123")); //123
// console.log(Number("ali")); //nan
// console.log(Number(true)); //1
// console.log(Number(undefined));//nan
// console.log(Number(null));//0
// console.log(Number(""));//0
// console.log(Number("123abs"));//nan

// let n = "231";
// console.log(+n);//231
// let m = "231m";
// console.log(+m);//nan

// console.log(parseFloat("123.32"));   //123.32
// console.log(parseFloat("123.32mn"));  //123.32
// console.log(parseFloat("mn123.32"));  //nan

// console.log(parseInt("123")); //123
// console.log(parseInt("123nm")); //123
// console.log(parseInt("nm123")); //nan

// console.log(Boolean(0));//f
// console.log(Boolean(""));//f
// console.log(Boolean(null));//f
// console.log(Boolean(undefined));//f
// console.log(Boolean(1));//t
// console.log(Boolean("32131"));//t

// console.log("abc" + undefined);
// console.log("abc" + NaN);

// let x = 0;
// if (x++) console.log("ali");
// else if (x == 0) console.log("faizan");
// else console.log("koi ni");

// let no = ["1abc", "2def", "3ghi", "4jkl"];
// output:30
// let no1 = [];
// no.forEach(square);
// function square(ele) {
// 	let n = parseInt(ele);
// 	no1.push(Math.pow(n, 2));
// 	console.log(no1);
// }
// let total = no1.reduce((sum, cv) => sum + cv, 0);
// console.log(total);
// console.log(parseInt("1a1ab"));

// ["1a2b3c", "2d4e5f", "3g6h7i", "4j8k9l"]
// output:30
// let flag;
// let no = flag ? 100 : 200;
// console.log(no);
// let i=11;
// let j=--(i++)
// console.log(j)
// function main(tempF) {
// 	let result;

// 	// write your code here
// 	let c = ((tempF - 32) * 5) / 9;
// 	c = c.toFixed(2);
// 	result =
// 		c >= 37
// 			? `You have a fever! Your temperature is ${c}°C.`
// 			: `You don't have a fever! Your temperature is  ${c}°C.`;

// 	return result;
// }
// console.log(main(98.6));
// console.log(main(99));
// console.log(main(97));
// function isValidIdentifier(string) {
// 	let ch = string[0];
// 	if (ch >= 0 && ch <= 9) console.log("invalid");
// 	else console.log("valid");
// }

// isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
// isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
// isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.
// let ch = "k";
// if (ch > "a" && ch < "z") console.log("hi");

/****************************************************************** */
// function get() {
// 	return 1, 2, 3;
// }
// console.log(get());//3

/*************************************************************** */

// const arr = ["apple"];
// arr.unshift("mango", "banana");
// console.log(arr);

/********************************************************************* */
// const arr = ["apple", "mango", "bananaa"];
// const arr1 = arr.slice(); // ["apple", "mango", "bananaa"]
// console.log(arr1);

/******************************************************************** */
// const arr = ["a", "b", "c", "d"];
// arr.splice(2, "x", "y");
// console.log(arr);
// arr.splice(2, 0, "x", "y");
// console.log(arr);
/************************************************************* */
// const arr = [5, 3, 2, 1, 9, 7];
// const newArr = arr.toSorted();
// console.log(newArr);
// // let i=0;
// // let j=newArr.length-1
// // while(i<j){
// //     if(newArr[i]+newArr[j]>9)

// // }
/******************************************************************* */
// function reverseString(str) {
// 	//Implement Your function here
// 	let newStr = str.split("");
// 	console.log(newStr);
// 	console.log(newStr.reverse());
// 	console.log(newStr.join(""));

// 	// let newStr = "";
// 	// let li = str.length - 1;
// 	// while (li >= 0) {
// 	// 	newStr += str[li];
// 	// 	li--;
// 	// }
// 	// return newStr;
// }
// console.log(reverseString("Hello"));
// //Output : "olleH"

/****************************************************************************** */
// let nums = [2, 7, 11, 15];
// var twoSum = function (nums, target) {
// 	let newNums = nums.map((ele, index) => ({ ele, index }));
// 	// console.log(newNums);
// 	newNums.sort((a, b) => a.ele - b.ele);
// 	let s = 0;
// 	let e = nums.length - 1;
// 	let output = [];
// 	while (s < e) {
// 		if (newNums[s].ele + newNums[e].ele > target) e--;
// 		else if (newNums[s].ele + newNums[e].ele < target) s++;
// 		else {
// 			output.push(newNums[s].index);
// 			output.push(newNums[e].index);
// 			e--;
// 		}
// 	}
// 	return output;
// };
// console.log(twoSum(nums, 9));
/************************************************************************************* */
// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// let ele = 56;
// function deleteOccur(arr, ele) {
// 	let i = arr.indexOf(56);
// 	// console.log(i);
// 	arr.splice(i, 1);
// 	return arr;
// 	//Implement Your function here
// }

// console.log(deleteOccur(arr, ele));
//Output: [23,4,78,5,63,45,210];
/*************************************************************************************** */
// let arr = [4, 2, 34, 4, 1, 12, 1, 4];

// function findDuplicate(arr) {
// 	let counts = {};
// 	let duplicates = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		let num = arr[i];
// 		counts[num] = (counts[num] || 0) + 1;
// 	}
// 	console.log(counts);
// 	for (let num in counts) {
// 		if (counts[num] > 1) {
// 			duplicates.push(parseInt(num));
// 		}
// 	}

// 	return duplicates;
// }

// console.log(findDuplicate(arr));
// Output: [4, 1]

// let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// function findDuplicate(arr) {
// 	let ob = {};
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		let num = arr[i];
// 		ob[num] = (ob[num] || 0) + 1;
// 	}
// 	for (let e in ob) {
// 		if (ob[e] > 1) newArr.push(parseInt(e));
// 	}
// 	return newArr;
// 	//Implement your function here
// }
// console.log(findDuplicate(arr));
/************************************************************************ */

// let no = [];

// function student(...student) {
// 	for (let v of student) no.push(v);
// }
// student("ali", "amit", "ravi");
// console.log(no);

// let n1 = [1, 2, 3];
// let n2 = [4, 5, 6];
// // let n3 = n1;    //permanent copy
// // n3.push(9);
// // console.log(n3);
// // console.log(n1);

// let n4 = [...n1]; //shallow copy
// n4.push(9);
// console.log(n4);
// console.log(n1);
// let n5 = [...n1, ...n2];
// console.log(n5);
/****************************************************************************************** */
//sets

// arr1 = [1, 2, 4, 5, 7];
// arr2 = [3, 4, 6, 7, 9, 0];
// function mergeArray(arr1, arr2) {
// 	let arr3 = arr1.concat(arr2);
// 	let set1 = new Set();
// 	for (v of arr3) set1.add(v);
// 	return set1;
// 	//Implemet your function here
// }
// console.log(mergeArray(arr1, arr2));
// //Output : [1,2,4,5,7,3,6,9,0]

/********************************************************************************************** */
// const a = {
// 	100: "ali",
// 	age: 25,
// 	gender: "male",
// };
// console.log(a["100"]);
// console.log(a[100]); //only for no.
// console.log(a[3]);//undefined
/************************************************************************************* */
// const studentMarks = {
// 	John: [85, 90, 92, 88, 87],
// 	Jane: [92, 95, 89, 91, 94],
// 	David: [78, 85, 90, 92, 84],
// 	Emily: [90, 88, 92, 87, 91],
// 	Michael: [86, 92, 90, 89, 94],
// };
// function sum(ele) {
// 	let sum = 0;
// 	for (let v of ele) console.log(v);
// }
// function findClassTopper(studentMarks) {
// 	let key = Object.keys(studentMarks);
// 	let value = Object.values(studentMarks);

// 	key.forEach((ele) => {
// 		sum(ele);
// 	});
// 	// console.log(key);
// 	// console.log(value);
// 	//Implement your function here
// }
// console.log(findClassTopper(studentMarks));
// //Output : "Jane";
/*********************************************************************************************** */

// function me() {
// 	var a = 10;
// }
// // console.log(a); //ReferenceError: a is not defined
// //functional scope
// {
// 	var x = 10;
// 	let y = 20;
// 	let z = 30;
// }
// console.log(x);
// console.log(y);
// console.log(z);

//var,let,const => all functional scope(inside function)
//let,const =>block scope
//var =>global scope
/************************************************************************************************ */

// function sum() {
// 	return 10, 20, 30;
// }
// var a = sum();
// console.log(a);
/************************************************************************************* */
//var,let,const are hoisted but let n const are in temporal dead zone
// var a = 20;
// {
// 	console.log(a);//20
// 	var a = 10;
// }
// let b = 20;
// {
// 	console.log(b);//ReferenceError: Cannot access 'b' before initialization
// 	let b = 10;
// }
//********************************************************************************************* */
// "use strict";   //without use strict 10 will be print
// a = 10;
// console.log(a); //10
/******************************************************************************************** */
// var a = 10;
// let a = 20;
// console.log(a);//SyntaxError: Identifier 'a' has already been declared
/******************************************************************************************* */
//closure
// let a = 10;

// function outer() {
// 	let b = 20;
// 	return function inner() {
// 		let c = 30;
// 		return `${a},${b},${c}`;
// 	};
// }
// let temp = outer();
// console.log(temp());
//althought outer is out from call stack but inner remember b value through closure
/********************************************************************************************** */
//iifi

// (function (a, b) {
// 	console.log("hi");
// 	console.log(a * b);
// })(2, 3);

// const data = (function () {
// 	const user = {
// 		userName: "ali",
// 		userAge: 25,
// 	};
// 	function getName() {
// 		console.log(user.userName);
// 	}
// 	function updateAge(age) {
// 		console.log(user.userAge + age);
// 	}
// 	return { getName, updateAge };
// })();

// console.log(data.getName());
// console.log(data.updateAge(3));
/*********************************************************************************************** */
//pure function

// function sum(a, b) {
// 	return a + b;
// }
// console.log(sum(10, 2));

// //impure function
// let disc = 10;
// function discount(price) {
// 	return price - disc;
// }
// console.log(discount(20));

//console.log shouldnt be used in pure function as its a webapi
//pure function dont modify input
//output solely depent on input
//pure function are those who dont take data from outside of a function(input output consisitent) or manipute any data outside of a functiom
/************************************************************************************************* */
//callback

// function hello(fun) {
// 	console.log("hello");
// 	fun();
// }
// function hi() {
// 	console.log("hi");
// }
// hello(hi);
/***************************************************************************************** */
//function returning a function

// function greet(message) {
// 	return function (wish) {
// 		console.log(`${message},${wish}`);
// 	};
// }
// // const greeting = greet("i wish u");
// // console.log(greeting);
// // greeting("hi");
// //////or
// greet("i wish u")("hi");

/****************************************************************************************************** */
//higher order fn
//a func taking func as arguments or a func returning a func

// let no = [1, 2, 3, 4, 5];

// function operation(input, fn) {
// 	const result = [];
// 	for (let v of input) {
// 		result.push(fn(v));
// 	}
// 	return result;
// }
// function square(n) {
// 	return n * n;
// }
// function cube(n) {
// 	return n * n * n;
// }
// console.log(operation(no, square));
// console.log(operation(no, cube));
/**************************************************************************************************** */
//currying

// function sum1(a, b, c) {
// 	return a + b + c;
// }
// function sum2(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c;
// 		};
// 	};
// }
// console.log(sum1(1, 2, 3));
// console.log(sum2(1)(2)(3));

// function power1(a, b) {
// 	return a ** b;
// }
// function power2(a) {
// 	return function (b) {
// 		return b ** a;
// 	};
// }
// console.log(power1(2, 3));
// console.log(power2(3)(2));
// console.log(power2(3)(3));
// console.log(power2(3)(4));
/******************************************************************************************************************** */
//map
// let np = [1, 2, 3];
// let mp = np.map((ele) => {
// 	ele * ele;
// });
// console.log(mp);//[ undefined, undefined, undefined ]
//reduce
// let no = [1, 2, 3, 4, 5];
// let ev = no.reduce((sum, cv) => {
// 	// return cv % 2 === 0 ? sum + cv : sum;
// 	if (cv % 2 === 0) {
// 		return sum + cv;
// 	} else return sum;
// }, 0);
// console.log(ev);

// let arr = [];
// let red = arr.reduce((acc, cv) => acc + cv, 6);
// console.log(red);
// When using the reduce method on an empty array, the initial value of the accumulator (acc)
//  will be returned as the result. In your code, the initial value of the accumulator is 6,
//  so the result of the reduce operation will simply be 6.

// let arr = [1, 2, 3, 4, 5, 2, 4, 2];
// let fil = arr.filter((ele, index, arr) => {
// 	return arr.indexOf(ele) === index;
// });
// console.log(fil);

/*************************************************************************************************** */
//this
//this is to the obj

// "use strict";
// function normal() {
// 	console.log(this); //undefined
// }
// const arrow = () => {
// 	console.log(this); //window obj
// };
// normal();
// arrow();

// const user1 = {
// 	name: "ali",
// 	getname: function () {
// 		console.log(this);
// 	},
// };
// const user2 = {
// 	name: "faizan",
// };
// user1.getname();
// user2.getname = user1.getname;
// user2.getname();
/******************************************************************************************** */
/********************************************************************************************* */
/********************************************************************************************** */
//OOP  in js
// const movie = {
// 	name: "avenger",
// 	cast: ["ali", "afaiza"],
// 	getMovie: function () {
// 		console.log(`${movie.name}:${movie.cast}`);
// 	},
// 	details: function (de) {
// 		console.log(movie[de]);
// 	},
// };
// const movie2 = {
// 	name: "avenger",
// 	cast: ["ali", "afaiza"],
// 	getMovie: function () {
// 		console.log(`${this.name}:${this.cast}`);
// 	},
// 	details: function (de) {
// 		console.log(movie[de]);
// 	},
// };
// console.log(movie.cast);
// console.log(movie.name);
// movie.getMovie();
// movie.details("cast");
// console.log(movie2.cast);
// console.log(movie2.name);
// movie.getMovie();
// movie.details("cast");
/*************************************************************************************** */
/**************************************************************************************** */
//factory function

// function movie(name, yr) {
// 	const movieObj = {
// 		title: name,
// 		release: yr,
// 		getDeatils() {
// 			console.log(`${this.title}:${this.release}`);
// 		},
// 	};
// 	return movieObj;
// }
// const movie1 = movie("avatar", 2012);
// console.log(movie1);
// const movie2 = movie("hulk", 2018);
// console.log(movie2);
// movie1.getDeatils();
// movie2.getDeatils();

//constructor function
// function Movie(name, yr) {
// 	(this.title = name),
// 		(this.release = yr),
// 		(this.getDeatils = function () {
// 			console.log(`${this.title}:${this.release}`);
// 		});
// }
// const movie1 = new Movie("avatar", 2012);
// console.log(movie1);
// movie1.getDeatils();

//prototype
// function Movie(name) {
// 	this.name = name;
// }
// const movie1 = new Movie("avatar");
// movie1.yr = 2012;
// console.log(movie1);
// const movie2 = new Movie("ironMan");
// console.log(movie2);
// console.log(movie2.__proto__);
// console.log(Movie.prototype);
// console.log(movie2.__proto__.__proto__);
// console.log(Object.prototype);
// console.log(movie2.__proto__.__proto__.__proto__);

// console.log(movie2.__proto__ === Movie.prototype);
// console.log(movie2.__proto__.__proto__ === Object.prototype);

////////////////
// function Movie(name) {
// 	this.name = name;
// 	// this.getDetails = function () {
// 	// 	console.log(`${this.name}`);
// 	// };
// }
// Movie.prototype.getDetails = function () {
// 	console.log(`${this.name}`);
// };
// const movie1 = new Movie("vatar");
// console.log(movie1);
// movie1.getDetails();

/////////
// const obj = { a: 1, b: 2 };
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(obj));

/////
// function Person(name) {
// 	this.name = name;
// }
// Person.prototype.age = 40;
// const man1 = new Person("ali");
// man1.__proto__.look = "hi";
// console.log(man1);
// console.log(man1.__proto__);
// console.log(man1.__proto__.age);
// console.log(Person.prototype.age);

//////
// const no = [1, 2, 3];
// console.log(no.__proto__);
// console.log(no.__proto__.__proto__);

//////////call,apply,bind
// const car = {
// 	name: "audi",
// 	color: "black",
// 	getDetails: function (brand) {
// 		console.log(`${this.name}:${this.color}:${brand}`);
// 	},
// };
// car.getDetails("a4");
// const bus = {
// 	name: "vovlo",
// 	color: "red",
// };
// car.getDetails.call(bus, "sarkari");
// car.getDetails.apply(bus, ["private"]);
// let v1 = car.getDetails.bind(bus);
// v1("meri bus");
//********************************************************************************** */
//********************************************************************************* */
/********************************************************************************** */
/////////class in js
// class Vehicle {
// 	//properties
// 	name;
// 	year;
// 	//constructor
// 	constructor(name, year) {
// 		(this.name = name), (this.year = year);
// 	}
// 	//method
// 	getDetails() {
// 		console.log(`${this.name}:${this.year}`);
// 	}
// }
// const v1 = new Vehicle("scooter", 1335);
// console.log(v1);
// v1.getDetails();

///*********encapsulation =>hidding details that are not imp

// class Vehicle {
// 	//properties
// 	name;
// 	year;
// 	//priavte prop
// 	#regNumber;
// 	//constructor
// 	constructor(name, year, no) {
// 		(this.name = name), (this.year = year), (this.#regNumber = no);
// 	}
// 	//priavte method
// 	#getNumber(num) {
// 		console.log(`${num}`);
// 	}
// 	//method
// 	getDetails() {
// 		console.log(`${this.name}:${this.year}:${this.#regNumber}`);
// 		this.#getNumber(this.#regNumber);
// 	}
// }
// const v1 = new Vehicle("scooter", 1335, 215456);
// console.log(v1);
// v1.getDetails();
// // v1.#regNumber = 4644; //SyntaxError: Private field '#regNumber' must be declared in an enclosing class

/////*******INheritence */

// class Vehicle {
// 	//properties
// 	name;
// 	year;
// 	//constructor
// 	constructor(name, year) {
// 		(this.name = name), (this.year = year);
// 	}
// 	//method
// 	getDetails() {
// 		console.log(`${this.name}:${this.year}`);
// 	}
// }
// class Car extends Vehicle {
// 	constructor(brand, color) {
// 		super("car", 2001);
// 		this.brand = brand;
// 		this.color = color;
// 	}
// 	getDetails() {
// 		console.log(`${this.name}:${this.year}:${this.brand}:${this.color}`);
// 	}
// }
// let car1 = new Car("audi", "red");
// car1.getDetails();

/////in=heritence in constructor fn

// function Vehicle(name, color, wheels) {
// 	this.name = name;
// 	this.color = color;
// 	this.wheels = wheels;
// }
// Vehicle.prototype.getVehDetails = function () {
// 	console.log(
// 		`Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`
// 	);
// };

// function Car(color, brand, seats) {
// 	Vehicle.call(this, "car", "Blue", 4);
// 	this.brand = brand;
// 	this.seats = seats;
// }

// Car.prototype = Object.create(Vehicle.prototype);

// Car.prototype.getDetails = function () {
// 	console.log(`
// 		The ${this.color} ${this.name} is of ${this.brand} company.
// 		It has seating for ${this.seats} people`);
// };

// const car1 = new Car("Black", "Audi", 5);
// car1.getDetails();
// console.log(car1);
// console.log(car1.__proto__);
// car1.getVehDetails();

/////////******* */
//Static

// class Vehicle {
// 	static vName = "static Name";
// 	//constructor
// 	constructor(name, color, wheels) {
// 		this.name = name;
// 		this.color = color;
// 		this.wheels = wheels;
// 	}
// 	//methods
// 	getDetails() {
// 		console.log(`
// 		  The ${this.name} is ${this.color} in color.
// 		  It has ${this.wheels} wheels.
// 		  `);
// 	}
// 	//static method
// 	static showMsg() {
// 		console.log("This is the static method of the class");
// 	}
// }

// const v1 = new Vehicle("Car", "blue", 4);
// console.log(v1);
// Vehicle.showMsg();
// console.log(Vehicle.vName);

/////*********** */

//getter and setter

// class Circle {
// 	constructor(r) {
// 		this.r = r;
// 	}
// 	get diameter() {
// 		return this.r * 2;
// 	}
// 	set radius(newR) {
// 		this.r = newR;
// 	}
// }
// let circle = new Circle(2);
// console.log(circle.diameter);
// circle.radius = 4;
// console.log(circle.diameter);

// /////////////
// lass Circle {
// 	constructor(radius) {
// 	  this.radius = radius;
// 	}

// 	get diameter() {
// 	  return this.radius * 2;
// 	}

// 	set diameter(newDiameter) {
// 	  if (newDiameter >= 0) {
// 		this.radius = newDiameter / 2;
// 	  } else {
// 		console.log('Invalid Input');
// 	  }
// 	}

// 	//   getDiameter() {
// 	//     console.log(this.radius * 2);
// 	//   }
//   }

//   const circle = new Circle(4);
//   console.log(circle.radius);
//   // circle.getDiameter();
//   console.log(circle.diameter);
//   circle.radius = 6;
//   console.log(circle.diameter);
//   circle.diameter = 20;
//   console.log(circle.radius);
//   console.log(circle.diameter);
//   circle.diameter = -2;
//   console.log(circle.radius);

/************************************************************************** */
///built in method

// const today = new Date();
// console.log(today);

// const birthDate = new Date("1999-06-12");
// console.log(birthDate);

// const someDay = new Date(1990, 7);
// console.log(someDay);

// console.log(birthDate.getFullYear());

// console.log(birthDate.toDateString());
// const birthStr = birthDate.toString();
// console.log(birthStr.slice(11, 20));

/******************************************************************* */
//shallow copy

// const user1 = {
// 	username: 'Sara',
// 	age: 12,
// 	marks:{
// 	  maths:20,
// 	  eng:25
// 	}

// 	};

//Deep Copy and shallow Copy

// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Shallow Copy

// const user2 = { ...user1 };
// console.log(user2);
// console.log(user1);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Object.assign
//   const user2 = Object.assign({}, user1);
//   console.log(user2);
//   console.log(user1);

//   user2.username = 'Harry';
//   user2.marks.maths = 10;
//   console.log(user2);
//   console.log(user1);

/////////
// const user1 = {
// 	username: "Sara",
// 	age: 12,
// 	marks: {
// 		maths: 20,
// 		eng: 25,
// 	},
// 	getMarks() {
// 		console.log(this.marks);
// 	},
// };
// //Deep Copy and shallow Copy

// //Deep Copy

// const user2 = JSON.parse(JSON.stringify(user1));

// user2.username = "Harry";
// user2.marks.maths = 10;
// console.log(user2);
// console.log(user1);

/*************************************************************** */
/****************************************************************** */
/***************************************************************** */
//DOM

// let btn = document.createElement("button");
// btn.className = "my-Btn";
// btn.textContent = "click me";

// let div = document.querySelector("div");
// div.appendChild(btn);
// // document.querySelector("h1").remove();
// btn.addEventListener("click", function () {
// 	print("ali");
// });
// function print(value) {
// 	console.log(value);
// }
// function gogo() {
// 	console.log("ggogo");
// }
//******************************************************************** */
/********************************************************************** */
/*********************************************************************** */

///*********************asyn js
// let btn = document.querySelector("button");
// let heading = document.querySelector("h3");
// let sec = 0;
// function start() {
// 	let id = setInterval(() => {
// 		sec++;
// 		heading.textContent = `${sec} second`;
// 		if (sec > 5) clearInterval(id);
// 	}, 1000);
// }
