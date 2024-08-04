// You are given an array of objects representing products in a store. Each object has three
// properties: name, category, and price. Write a function called filterAndTransformProducts that
// filters the products by a given category and then returns an array of strings where each string is
// the product's name and price concatenated.
// const products = [
// 	{ name: "Laptop", category: "Electronics", price: 1000 },
// 	{ name: "Shirt", category: "Clothing", price: 50 },
// 	{ name: "Phone", category: "Electronics", price: 500 },
// 	{ name: "Shoes", category: "Clothing", price: 80 },
// ];
// function filterAndTransformProducts(products, category) {
// 	let p1 = products.filter((ele) => ele.category == "Electronics");
// 	// console.log(p1);
// 	return (p2 = p1.map((ele) => {
// 		return `${ele.name},:$${ele.price}`;
// 	}));
// 	// console.log(p2);
// 	// Your code here
// }
// console.log(filterAndTransformProducts(products, "Electronics"));
// // Output should be ["Laptop: $1000", "Phone: $500"]
/***************************************************************************************** */
/******************************************************************************************** */
/******************************************************************************************** */
// You are given an array of objects representing orders in a restaurant. Each object has three
// properties: orderId, tableNumber, and amount. Write a function called sumByTable that returns
// an object where each key is a tableNumber and the value is the total amount for that table.
// const orders = [
// 	{ orderId: 1, tableNumber: 2, amount: 30 },
// 	{ orderId: 2, tableNumber: 1, amount: 20 },
// 	{ orderId: 3, tableNumber: 2, amount: 50 },
// 	{ orderId: 4, tableNumber: 3, amount: 40 },
// 	{ orderId: 5, tableNumber: 1, amount: 10 },
// ];
// function sumByTable(orders) {
// 	let result = {};
// 	for (let order of orders) {
// 		const { tableNumber, amount } = order;
// 		// result[tableNumber] = amount;
// 		// console.log(result);
// 		if (result[tableNumber]) {
// 			// console.log(result[tableNumber]);
// 			result[tableNumber] = result[tableNumber] + amount;
// 			// console.log(result[tableNumber]);
// 		} else result[tableNumber] = amount;
// 	}
// 	return result;
// 	// Your code here
// }
// console.log(sumByTable(orders));
// Output should be { 1: 30, 2: 80, 3: 40 }
/************************************************************************************************ */
/*********************************************************************************************** */
/********************************************************************************************** */
// You are given an array of objects representing students. Each object has a name property and a
// subjects property, which is an array of strings representing the subjects the student is enrolled
// in. Write a function called countSubjects that returns an object where each key is a subject and
// the value is the number of students enrolled in that subject.
// const students = [
// 	{ name: "Alice", subjects: ["Math", "Science"] },
// 	{ name: "Bob", subjects: ["English", "Math"] },
// 	{ name: "Charlie", subjects: ["Math", "History"] },
// 	{ name: "David", subjects: ["Science", "History"] },
// ];
// function countSubjects(students) {
// 	let result = {};
// 	for (let student of students) {
// 		const { subjects } = student;
// 		// console.log(subjects);
// 		for (let eachSub of subjects) {
// 			if (result[eachSub]) {
// 				result[eachSub]++;
// 			} else {
// 				result[eachSub] = 1;
// 			}
// 		}
// 	}
// 	return result;
// 	// Your code here
// }
// console.log(countSubjects(students));
// Output should be { Math: 3, Science: 2, English: 1, History: 2 }
/*********************************************************************** */
/************************************************************************* */
/************************************************************************** */
// You are given an array of objects representing inventory items. Each object has a name,
// quantity, and price. Write a function called inventoryValue that returns the total value of the
// inventory, but only includes items where the quantity is greater than zero.
// const inventory = [
// 	{ name: "Laptop", quantity: 5, price: 1000 },
// 	{ name: "Shirt", quantity: 0, price: 50 },
// 	{ name: "Phone", quantity: 10, price: 500 },
// 	{ name: "Shoes", quantity: 3, price: 80 },
// ];
// function inventoryValue(inventory) {
// 	let total = inventory.reduce((sum, cv) => {
// 		if (cv.quantity > 0) {
// 			sum = sum + cv.price * cv.quantity;
// 		}
// 		return sum;
// 	}, 0);
// 	return total;
// 	// Your code here
// }
// console.log(inventoryValue(inventory));
// // Output should be 12600
/********************************************************************************* */
/*********************************************************************************** */
/************************************************************************************ */
// You are given an array of objects representing transactions. Each object has a userId, amount,
// and date. Write a function called topSpenders that returns an array of userIds sorted by their
// total transaction amount in descending order. Only include users who have made more than one
// transaction.
const transactions = [
	{ userId: 1, amount: 50, date: "2023-01-01" },
	{ userId: 2, amount: 20, date: "2023-01-02" },
	{ userId: 1, amount: 100, date: "2023-01-03" },
	{ userId: 3, amount: 150, date: "2023-01-04" },
	{ userId: 2, amount: 30, date: "2023-01-05" },
];
function topSpenders(transactions) {
	let result = {};
	let actualResult = [];
	for (let trans of transactions) {
		const { userId } = trans;
		if (result[userId]) {
			result[userId]++;
		} else {
			result[userId] = 1;
		}
	}
	console.log(result);
	let value = Object.keys(result);
	// console.log(value);
	for (let v of value) {
		if (result[v] > 1) actualResult.push(Number(v));
	}
	return actualResult;
	// Your code here
}
console.log(topSpenders(transactions));
// Output should be [1, 2]
