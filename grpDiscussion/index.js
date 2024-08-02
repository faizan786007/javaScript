//["1abc", "2def", "3ghi", "4jkl"];
//1,4,9,16=>30
//[1,2,3,4]
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
