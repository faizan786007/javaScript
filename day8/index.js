var fruits = ["mango", "banana", "lichi", "orange"];
// fruits.push("tomato");
// console.log("push", fruits);
// fruits.pop();
// console.log("pop", fruits);
// fruits.shift();
// console.log("shift", fruits);
// fruits.unshift("tomato");
// console.log("unshift", fruits);
// console.log("slice", fruits.slice(1, 5));
var newFruits = fruits.splice(5, 1, "potato", "mustang");
console.log("new fruits", newFruits);
console.log("fruits", fruits);

// Q Given an array of names find out index of target .
var students = ["rahul", "nehal", "ali", "amod", "adep"];
for (var i = 0; i < students.length; i++) {
	if (students[i] == "adep") console.log("target", i);
}
// var target = "adep"
// output  : 4
