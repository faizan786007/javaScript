// var string = "He ll o wo rld";

// // h : 1
// // e : 1
// // l : 3
// // o : 2
// // w : 1
// // r : 1
// // d : 1
// function findDup(string) {
// 	let newString = string.split(" ").join("");
// 	// console.log(newString);
// 	let res = {};
// 	for (let i of newString) {
// 		if (!res[i]) {
// 			res[i] = 1;
// 		} else {
// 			res[i]++;
// 		}
// 	}
// 	console.log(res);
// }
// findDup(string);

// Q Give an aray, do addition of numbers by using while loop .

// var array = [2, 4, 5, 6, 7, 8, 3, 2];
// // ouput : 37
// function sum(array) {
// 	let total = 0;
// 	let i = 0;
// 	while (i < array.length) {
// 		total += array[i];
// 		i++;
// 	}
// 	return total;
// }
// console.log(sum(array));

// Q Give an aray, find only odd numbers by using while loop .
var array = [2, 4, 5, 6, 7, 8, 3, 2];

let i = 0;
while (i < array.length) {
	if (array[i] % 2 !== 0) console.log(array[i]);
	i++;
}
// Q Give an aray, find count of even numbers by using while loop .
var array = [2, 4, 5, 6, 7, 8, 3, 2];
let j = 0;
let evenCount = 0;
while (j < array.length) {
	if (array[j] % 2 == 0) evenCount++;
	j++;
}
console.log(evenCount);
