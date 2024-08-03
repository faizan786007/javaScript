// You are given an array of objects representing employees. Each object has three properties:
// name, age, and department. Write a function called sortByDepartmentAndAge that sorts
// the employees first by department in alphabetical order and then by age in ascending order
// within each department.
const employees = [
	{ name: "Alice", age: 25, department: "HR" },
	{ name: "Bob", age: 30, department: "Engineering" },
	{ name: "Charlie", age: 22, department: "HR" },
	{ name: "David", age: 35, department: "Engineering" },
	{ name: "Eve", age: 28, department: "Marketing" },
];
function sortByDepartmentAndAge(employees) {
	let newEmployees = employees.sort((a, b) =>
		a.department.localeCompare(b.department)
	);
	return newEmployees.sort((a, b) => a.age - b.age);
	// Your code here
}
console.log(sortByDepartmentAndAge(employees));
// Output should be sorted by department and then by age within each department

/*********************************************************************************************** */
// Question 2: Nested Loops and Complex Object Manipulation
// You are given an object representing a library. The object contains an array of books, where
// each book has a title, author, and copies (an array of objects representing individual
// copies, each with a copyNumber and isAvailable property). Write a function called
// availableBooks that returns an array of book titles that have at least one available copy.
const library = {
	books: [
		{
			title: "The Great Gatsby",
			author: "F. Scott Fitzgerald",
			copies: [
				{ copyNumber: 1, isAvailable: false },
				{ copyNumber: 2, isAvailable: true },
			],
		},
		{
			title: "1984",
			author: "George Orwell",
			copies: [
				{ copyNumber: 1, isAvailable: false },
				{ copyNumber: 2, isAvailable: false },
			],
		},
		{
			title: "To Kill a Mockingbird",
			author: "Harper Lee",
			copies: [{ copyNumber: 1, isAvailable: true }],
		},
	],
};
function availableBooks(library) {
	let result = [];
	for (let book of library.books) {
		for (let copy of book.copies) {
			if (copy.isAvailable) {
				result.push(book.title);
			}
		}
	}
	return result;
	// Your code here
}
console.log(availableBooks(library));
// Output should be ["The Great Gatsby", "To Kill a Mockingbird"]
