//1.
/* js datatype are of two type (primitive ,non primitive)
primitive -string:like -"ali"
            number:like- 123
            boolean: like-true/false
            undefined
            null
            symbol

non primitive - object,array
              object- {name:"ali",age:25}
              array- [1,2,"ali"]

*/
//2.
/*
  var is funtion scoped,
  can be hoisted
  can be redeclared,updated
  if not given value it is undefined


  let is block scoped 
  cannot be redeclared
  can be updated

  const is block scoped
  cannot be redeclared or updated
  must be intialized at the time of declaration


*/

//3

/**
     == compare two value (can do type conversion if needed)
     eg-2=="2" =>true

     === strictly compare both value and type (dont do type conversion)
     eg-2==="2" =>false
 */

//4

/**
    in prototypal inheritence object inherit properties and methods from 
    other objects
 */

//5
/**
  in closure function remembers n can access variables from its lexical scope/environment
  even though when its executed outside that scope

 */

//6

/**
   null:it is by intention absence of any value.,its type is an object
   undefined:if value is not assigned to any varible, absence of value,eg-var userName,here
   userName value is undefined
 */

//7

/**
     when this is used in global context it refers to window object
     in strict mode or with arrow func this retain value from enclosed context
 */

//9

/**
  promise handle asyn operation 
  its has 3 states-pending,fulfilled,rejected
  eg-let p=new Promise((res,rej)=>{
         if(true)
         res("resolved")
         else 
         rej("rejected")

    })
         p.then((res)=>console.log("resolved")).catch((rej)=>console.error(rej))

 */

//10

/*
    sync code is executed line by line n each operation wait from
    prev operation to complete before going further

    asyn code allow other operation to run before the current 1 finishes
    they use callback,promise,async/await...

*/

//11

/**
    hoisting in js ,where variables n function declartion are moved
    to the top of their scope during compilation time
    it means u can use them before they actually declared in code
    but let,const are not hoisted same as var ,they r in temporal dead zone
 */

//12

/**
   arrow func is shorthand of writing func in es6
   its differnt  from regular func
   -they dont have their own 'this' context,they inherit from surrounding scope
   -they dont have the arguments objects
   -cannot be used as constructor n dont have proto type property
   eg---const add=(x,y)=>x+y
 */

//13
/*
      event loop help to perform non blocking oper
      despite being js a single threaded..it continuosly
      checks callback queue and microtask queue
      n process callback when call stack is empty
      --this allow asyn code code to run after sync code finish execution
*/

//14
/**
     try{
        //code which can throw error 
     }catch(error){
        console.log(error)
     }finally{
        //code that will always be executed
     }


     try catch handle error easily ,code which can throw error is placed inside try block
     if error occur control is passed to catch block ,in which error is handled
 */

//15
/*
   -js modules allow better oragnization of code,reusability 
   -scope is managed by import and export (export can be named or default,in
   single js file 1 default by can be many named exports)
   -modules r executedin strict mode by default

   traditional script tags shares same global scope,which can lead to conflict
   script tag loads in the order they appear unleass marked with async
*/

///////////////////////////////////////////////////////////////////////////

// Question 1: Filtering and Transforming Objects You are given an array of objects
// representing products in a store. Each object has three properties: name, category, and
// price.
// Write a function called filterAndTransformProducts that filters the products by a given
// category and then returns an array of strings where each string is the product's name
// and price
// concatenated.
// const products = [
// 	{ name: "Laptop", category: "Electronics", price: 1000 },
// 	{ name: "Shirt", category: "Clothing", price: 50 },
// 	{ name: "Phone", category: "Electronics", price: 500 },
// 	{ name: "Shoes", category: "Clothing", price: 80 },
// ];
// function filterAndTransformProducts(products, category) {
// 	let p1 = products.filter((prod) => prod.category === category);
// 	// console.log(p1);
// 	let p2 = p1.map((prod) => `${prod.name}:$${prod.price}`);
// 	// console.log(p2);
// 	return p2;
// }
// console.log(filterAndTransformProducts(products, "Electronics"));
// Output should be ["Laptop: $1000", "Phone: $500"]

/****************************************************************************************** */
// Question 2: Grouping and Summing Properties You are given an array of objects
// representing orders in a restaurant. Each object has three properties: orderId,
// tableNumber, and
// amount. Write a function called sumByTable that returns an object where each key is a
// tableNumber and the value is the total amount for that table.
// const orders = [
// 	{ orderId: 1, tableNumber: 2, amount: 30 },
// 	{ orderId: 2, tableNumber: 1, amount: 20 },
// 	{ orderId: 3, tableNumber: 2, amount: 50 },
// 	{ orderId: 4, tableNumber: 3, amount: 40 },
// 	{ orderId: 5, tableNumber: 1, amount: 10 },
// ];
// function sumByTable(orders) {
// 	// Your code here
// 	return orders.reduce((acc, cv) => {
// 		if (acc[cv.tableNumber]) acc[cv.tableNumber] += cv.amount;
// 		else acc[cv.tableNumber] = cv.amount;
// 		return acc;
// 	}, {});
// }
// console.log(sumByTable(orders));
// Output should be { 1: 30, 2: 80, 3: 40 }
/******************************************************************************************** */
// Question 3: Nested Objects and Property Counting You are given an array of objects
// representing students. Each object has a name property and a subjects property, which
// is an
// array of strings representing the subjects the student is enrolled in. Write a function
// called
// countSubjects that returns an object where each key is a subject and the value is the
// number of students enrolled in that subject.
// const students = [
// 	{ name: "Alice", subjects: ["Math", "Science"] },
// 	{ name: "Bob", subjects: ["English", "Math"] },
// 	{ name: "Charlie", subjects: ["Math", "History"] },
// 	{ name: "David", subjects: ["Science", "History"] },
// ];
// function countSubjects(students) {
// 	return students.reduce((acc, cv) => {
// 		cv.subjects.forEach((sub) => {
// 			if (acc[sub]) {
// 				acc[sub] += 1;
// 			} else {
// 				acc[sub] = 1;
// 			}
// 		});
// 		return acc;
// 	}, {});
// 	// Your code here
// }
// console.log(countSubjects(students));
// // Output should be { Math: 3, Science: 2, English: 1, History: 2 }

/************************************************************************* */
// Question 4: Object Transformation and Filtering You are given an array of objects
// representing inventory items. Each object has a name, quantity, and price. Write a
// function
// called inventoryValue that returns the total value of the inventory, but only includes
// items
// where the quantity is greater than zero.
// const inventory = [
// 	{ name: "Laptop", quantity: 5, price: 1000 },
// 	{ name: "Shirt", quantity: 0, price: 50 },
// 	{ name: "Phone", quantity: 10, price: 500 },
// 	{ name: "Shoes", quantity: 3, price: 80 },
// ];
// function inventoryValue(inventory) {
// 	// Your code here
// 	return inventory
// 		.filter((item) => item.quantity > 0)
// 		.reduce((sum, item) => {
// 			return sum + item.quantity * item.price;
// 		}, 0);
// }
// console.log(inventoryValue(inventory));
// Output should be 12600

//**************************************************************************************** */
// Question 5: Aggregating and Sorting Data You are given an array of objects
// representing
// transactions. Each object has a userId, amount, and date. Write a function called
// topSpenders
// that returns an array of userIds sorted by their total transaction amount in descending
// order.
// Only include users who have made more than one transaction.
// const transactions = [
// 	{ userId: 1, amount: 50, date: "2023-01-01" },
// 	{ userId: 2, amount: 20, date: "2023-01-02" },
// 	{ userId: 1, amount: 100, date: "2023-01-03" },
// 	{ userId: 3, amount: 150, date: "2023-01-04" },
// 	{ userId: 2, amount: 30, date: "2023-01-05" },
// ];
// function topSpenders(transactions) {
// 	let res = {};
// 	let finalres = [];
// 	for (let trans of transactions) {
// 		// console.log(trans.userId);
// 		if (res[trans.userId]) {
// 			res[trans.userId] += 1;
// 		} else {
// 			res[trans.userId] = 1;
// 		}
// 	}
// 	// console.log(res);
// 	let key = Object.keys(res);
// 	for (k of key) {
// 		if (res[k] > 1) finalres.push(Number(k));
// 	}
// 	console.log(finalres);
// 	// Your code here
// }
// console.log(topSpenders(transactions));
// // Output should be [1, 2]
/********************************************************************************************** */

// Question 6: Filtering and Mapping Arrays You are given an array of objects
// representing
// employees. Each object has a name, department, and salary. Write a function called
// getHighEarningEmployees that returns an array of names of employees who earn more
// than a specified amount.
// const employees = [
// 	{ name: "John", department: "Engineering", salary: 1000 },
// 	{ name: "Jane", department: "Marketing", salary: 1500 },
// 	{ name: "Jim", department: "Engineering", salary: 500 },
// 	{ name: "Jack", department: "HR", salary: 800 },
// ];
// function getHighEarningEmployees(employees, minSalary) {
// 	// Your code here
// 	let res = employees.filter((employee) => employee.salary > minSalary);
// 	let finalRes = res.map((employee) => employee.name);
// 	return finalRes;
// }
// console.log(getHighEarningEmployees(employees, 800));
// // Output should be ["John", "Jane"]
/****************************************************************************************** */
// Question 7: Counting Properties in Nested Objects You are given an array of objects
// representing books. Each object has a title, author, and genres property, which is an
// array of
// strings representing the genres the book belongs to. Write a function called
// countGenres that
// returns an object where each key is a genre and the value is the number of books that
// belong to
// that genre.
// const books = [
// 	{ title: "Book A", author: "Author 1", genres: ["Fiction", "Mystery"] },
// 	{ title: "Book B", author: "Author 2", genres: ["Non-fiction", "History"] },
// 	{ title: "Book C", author: "Author 3", genres: ["Fiction", "History"] },
// 	{ title: "Book D", author: "Author 4", genres: ["Mystery", "Thriller"] },
// ];
// function countGenres(books) {
// 	// Your code here
// 	let res = {};
// 	for (let book of books) {
// 		for (let genre of book.genres) {
// 			// console.log(genre);
// 			if (res[genre]) {
// 				res[genre] += 1;
// 			} else res[genre] = 1;
// 		}
// 	}
// 	return res;
// }
// console.log(countGenres(books));
// Output should be { Fiction: 2, Mystery: 2, Non-fiction: 1, History:
// 2, Thriller: 1 }
/********************************************************************************************* */
// Question 8: Merging and Summing Properties You are given two arrays of objects
// representing sales data. Each object has a productId, productName, and amount. Write
// a
// function called mergeAndSumSales that returns an array of objects where each object
// represents a product and its total amount across both arrays.
// const sales1 = [
// 	{ productId: 1, productName: "Product A", amount: 100 },
// 	{ productId: 2, productName: "Product B", amount: 150 },
// ];
// const sales2 = [
// 	{ productId: 1, productName: "Product A", amount: 200 },
// 	{ productId: 3, productName: "Product C", amount: 300 },
// ];
// function mergeAndSumSales(sales1, sales2) {
// 	// Your code here
// 	let res = [...sales1, ...sales2];
// 	// console.log(res);
// 	let emptyObj = res.reduce((acc, cv) => {
// 		const { productId, productName, amount } = cv;
// 		if (!acc[productId]) {
// 			acc[productId] = { productId, productName, amount: 0 };
// 		}
// 		acc[productId].amount += amount;
// 		return acc;
// 	}, {});
// 	// console.log(emptyObj);
// 	return Object.values(emptyObj);
// }
// console.log(mergeAndSumSales(sales1, sales2));
// Output should be [{ productId: 1, productName: "Product A", amount:
// 300 }, { productId: 2, productName: "Product B", amount: 150 }, {
// productId: 3, productName: "Product C", amount: 300 }]
/****************************************************************************************** */

// Question 9: Complex Nested Objects and Data Transformation You are given an array
// of
// objects representing employees. Each object has a name, department, salary, and
// projects
// property, which is an array of strings representing the projects the employee is working
// on. Write
// a function called projectSummary that returns an object where each key is a project
// name
// and the value is an object containing the total salary of employees working on that
// project and
// the list of their names.
const employees = [
	{
		name: "John",
		department: "Engineering",
		salary: 1000,
		projects: ["Project A", "Project B"],
	},
	{
		name: "Jane",
		department: "Marketing",
		salary: 1500,
		projects: ["Project B", "Project C"],
	},
	{
		name: "Jim",
		department: "Engineering",
		salary: 500,
		projects: ["Project A"],
	},
	{
		name: "Jack",
		department: "HR",
		salary: 800,
		projects: ["ProjectC", "Project A"],
	},
];
function projectSummary(employees) {
	// Your code here
	let res = {};
	employees.forEach((employee) => {
		employee.projects.forEach((proj) => {
			// console.log(proj);
			if (!res[proj]) res[proj] = { totalSalary: 0, names: [] };
			res[proj].totalSalary += employee.salary;
			res[proj].names.push(employee.name);
		});
	});
	return res;
}
console.log(projectSummary(employees));
// Output should be {
// "Project A": { totalSalary: 2300, names: ["John", "Jim", "Jack"]
// },
// "Project B": { totalSalary: 2500, nnames: ["John", "Jane"] }, // "Project C": {
// totalSalary: 2300
