// const person = {
// 	name: "ali",
// 	age: 25,
// 	hobby: ["tennis", "cricket"],
// };
// person.surname = "faizan";
// person["work"] = "sde";
// console.log(person);
// console.log(person.age);
// console.log(person["age"]);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// const myObject = {
// 	name: "Vinay",
// 	age: 20,
// 	surname: "abc",
// };

// for (let key in myObject) {
// 	console.log(key, myObject[key]);
// }

// Q Given an string find out numbers of repetation for single lette.

// v : 1
// i : 1
// n : 1
// a : 2
// y : 1
var string = "bababaabbaaanayannayan";
function findCount(string) {
	let res = {};
	for (let i of string) {
		if (res[i] == undefined) {
			res[i] = 1;
		} else res[i]++;
	}
	console.log(res);
	let max = 0;
	let char = "";
	for (let i in res) {
		if (res[i] > max) {
			max = res[i];
			char = i;
		}
	}
	console.log(`${char}:${max}`);
}
findCount(string);
