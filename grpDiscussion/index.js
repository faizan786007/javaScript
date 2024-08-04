//["1abc", "2def", "3ghi", "4jkl"];
// ["1a2b3c", "2d4e5f", "3g6h7i", "4j8k9l"]
//1,4,9,16=>30   //hint
//[1,2,3,4]      //hint
//output: 30;

// console.log(parseInt("10e1d2ds"));
// console.log(parseInt("aa10edds"));
// console.log(parseFloat("aaa10.2s1q5wwwww65"));
// let arr = ["1abc", "2def", "3ghi", "4jkl"];
// let square = [];
// arr.forEach(arr1);
// function arr1(ele) {
// 	let no = parseInt(ele);
// 	// console.log(no);
// 	square.push(no);
// }
// console.log(square);
// let square1 = square.map((ele) => Math.pow(ele, 2));
// console.log(square1);

// let res = square1.reduce((sum, cv) => {
// 	return (sum += cv);
// }, 0);
// console.log(res);
/************************************************************************* */
// setTimeout(myName, 2000);
// function myName() {
// 	console.log("ali");
// }

/********************************************************************** */
// [23, 56, 4, 78, 5, 63, 45, 210, 56];
// [23, 4, 78, 5, 63, 45, 210];
//target=56
// let arr=[23, 56, 4, 78, 5, 63, 45, 210, 56]
// arr.filter((ele)=>{

// })
// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56, 56];
// let target = 56;
// let arrNew = [];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] != target) arrNew.push(arr[i]);
// }
// console.log(arrNew);
//using filter

// function duplicate(arr, target) {
// 	let arr1 = arr.filter((ele) => {
// 		return ele !== target;
// 	});
// 	console.log(arr1);
// }
// duplicate(arr, target);
// let arr = [23, 56, 4, 78, 5, 63, 45, 210];
// let target = 56;
// function duplicate(arr, target) {
// 	// arr.splice(1, 1);
// 	// console.log(arr);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == target) {
// 			arr.splice(i, 1);
// 			i--; //imp
// 		}
// 	}
// 	console.log(arr);
// }
// duplicate(arr, target);
/************************************************************************************************ */
// [4, 2, 34, 4, 1, 12, 1,4]
// // {
// //     4:3,
// //     2:1,
// //     1:2,
// //     34:1,
// //     12:1
// // }

// // [4,1]
// let arr=[4, 2, 34, 4, 1, 12, 1,4]

/*********************************************************************** */
// Event Loop
// Node single tread

// function Greeting() {
//   console.log("Hello.");
// }
// console.log("1");
// setTimeout(Greeting, 5000);
// console.log("2");
// setTimeout(() => {
//   console.log("hello 2");
// }, 2000);

// setInterval(() => {
//   console.log("Hello");
// }, 2000);
// console.log(3 > 2 > 1); //t
// console.log(3 < 2 < 1); //f

//123456
//654321

//"hello"
//"olleh"

/****************************************************************************************** */
/****************************************************************************************** */
// const employees = [
// 	{ name: "Alice", age: 25, department: "HR" },
// 	{ name: "Bob", age: 30, department: "Engineering" },
// 	{ name: "Charlie", age: 22, department: "HR" },
// 	{ name: "David", age: 35, department: "Engineering" },
// 	{ name: "Eve", age: 28, department: "Marketing" },
// ];
// function sortByDepartmentAndAge(employees) {
// 	// let temp = employees.sort((a, b) => a.department.localeCompare(b.department));
// 	// console.log(temp);
// 	// let temp1 = temp.sort((a, b) => a.age - b.age);
// 	// console.log(temp1);
// 	let temp = employees.sort((a, b) => {
// 		if (a.department < b.department) return -1;
// 		if (a.department > b.department) return 1;

// 		//if value is same now sort age
// 		if (a.age < b.age) return -1;
// 		if (a.age > b.age) return 1;
// 		return 0;
// 	});
// 	return temp;
// }
// console.log(sortByDepartmentAndAge(employees));

// let arr = ["mango", "orange", "apple"];
// let no = [3, 4, 7, 1];
// let temp1 = no.sort((a, b) => a-b);
// console.log(temp1);
// let temp2 = arr.sort((a, b) => a.localeCompare(b));
// console.log(temp2);

// const items = [
// 	{ name: "Edward", value: 21 },
// 	{ name: "Sharpe", value: 37 },
// 	{ name: "And", value: 45 },
// 	{ name: "The", value: -12 },
// 	{ name: "Magnetic", value: 13 },
// 	{ name: "Zeros", value: 37 },
// ];

// let temp = items.sort((a, b) => {
// 	if (a.name < b.name) return -1;
// 	if (a.name > b.name) return 1;
// 	return 0;
// });
// console.log(temp);
/*************************************************************************************** */
// const library = {
// 	books: [
// 		{
// 			title: "The Great Gatsby",
// 			author: "F. Scott Fitzgerald",
// 			copies: [
// 				{ copyNumber: 1, isAvailable: false },
// 				{ copyNumber: 2, isAvailable: true },
// 			],
// 		},
// 		{
// 			title: "1984",
// 			author: "George Orwell",
// 			copies: [
// 				{ copyNumber: 1, isAvailable: false },
// 				{ copyNumber: 2, isAvailable: false },
// 			],
// 		},
// 		{
// 			title: "To Kill a Mockingbird",
// 			author: "Harper Lee",
// 			copies: [{ copyNumber: 1, isAvailable: true }],
// 		},
// 	],
// };
// function availableBooks(library) {
// 	let result = [];
// 	for (let book of library.books) {
// 		// console.log(book);

// 		for (let copy of book.copies) {
// 			if (copy.isAvailable) {
// 				result.push(book.title);
// 			}
// 		}
// 	}
// 	return result;
// 	// Your code here
// }
// console.log(availableBooks(library));
/************************************************************************* */
const employees = [
	{ name: "Alice", age: 25, department: "HR" },
	{ name: "Bob", age: 30, department: "Engineering" },
	{ name: "Charlie", age: 22, department: "HR" },
	{ name: "David", age: 35, department: "Engineering" },
	{ name: "Eve", age: 28, department: "Marketing" },
];

let age = employees.sort((a, b) => a.age - b.age);
console.log(age);
let dept = employees.sort((a, b) => a.department.localeCompare(b.department));
console.log(dept);
