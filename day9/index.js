// let todos = ["eat breakfast", "eat lunch", "eat dinner"];
// function deleteTodo(todos, index) {
// 	todos.splice(index, 1);
// 	return todos;
// }
// console.log(deleteTodo(todos, 0));
// function addTodos(todos, value, index) {
// 	todos.splice(index, 0, value);
// 	return todos;
// }
// console.log(addTodos(todos, "go to gym", 0));

//find pairs who's sum is 5

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let sum = 12;
console.log(`target is ${sum}`);

let start = 0;
let end = number.length - 1;

while (start < end) {
	if (number[start] + number[end] > sum) end--;
	else if (number[start] + number[end] < sum) start++;
	else {
		console.log(`pair is (${number[start]},${number[end]})`);
		end--;
	}
}
