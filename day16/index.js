//async await

// console.log(1);
// setTimeout(() => {
// 	console.log(2);
// }, 1000);
// console.log(3);

// function timerr() {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => {
// 			console.log(2);
// 			res();
// 		}, 2000);
// 	});
// }
// async function printt() {
// 	console.log(1);
// 	await timerr();
// 	console.log(3);
// }
// printt();

// function apiCall() {
// 	fetch("https://fakestoreapi.com/products")
// 		.then((res) => res.json())
// 		.then((data) => console.log(data));
// }
// apiCall();
// let arr = [];
// async function apiCallAsync() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/todos");
// 		if (!response.ok) {
// 			throw new Error("api not found");
// 		}
// 		// console.log(jsonData);
// 		let data = await response.json();
// 		// console.log(data);
// 		arr.push(data);
// 		mapping(data);
// 		// console.log(arr);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// apiCallAsync();
// function mapping(data) {
// 	let newArray = data.map((ele) => ele.title);
// 	console.log(newArray);
// }

// function testing(str) {
// 	try {
// 		if (str) {
// 			throw new Error("error thrown");
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// testing("ali");
