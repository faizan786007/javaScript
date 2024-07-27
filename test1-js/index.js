// 1. Create an array with the numbers 1 through 10. Write a function to remove all even
// numbers from this array and return the new array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [1, 3, 5, 7, 9]

// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function removeEven(input) {
// 	let newInput = [];
// 	for (var i = 0; i <= input.length - 1; i++) {
// 		if (input[i] % 2 !== 0) {
// 			newInput.push(input[i]);
// 		}
// 	}
// 	return newInput;
// }
// console.log(removeEven(input));
/****************************************************************************************************** */
// 2. Write a function that takes a string as an argument and returns the number of
// vowels in the string. Ignore case sensitivity.
// Input: "Hello World"
// Output: 3

// let input = "HEllo World";

// function vowels(input) {
// 	let output = 0;
// 	let length = input.length - 1;
// 	for (var i = 0; i <= length; i++) {
// 		// console.log(input.charAt(i));
// 		if (
// 			input.charAt(i) === "a" ||
// 			input.charAt(i) === "e" ||
// 			input.charAt(i) === "i" ||
// 			input.charAt(i) === "o" ||
// 			input.charAt(i) === "u"
// 		) {
// 			output++;
// 		}
// 		if (
// 			input.charAt(i) === "A" ||
// 			input.charAt(i) === "E" ||
// 			input.charAt(i) === "I" ||
// 			input.charAt(i) === "O" ||
// 			input.charAt(i) === "U"
// 		) {
// 			output++;
// 		}
// 	}
// 	return output;
// }
// console.log(vowels(input));
/******************************************************************************************************* */
// 3. Write a for loop that prints the first 10 Fibonacci numbers.
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// let pre = 0;
// let next = 1;
// for (var i = 0; i < 10; i++) {
// 	if (i == 0) {
// 		console.log(pre);
// 		continue;
// 	}
// 	if (i == 1) {
// 		console.log(next);
// 		continue;
// 	}
// 	let temp = next;
// 	next = pre + next;
// 	pre = temp;

// 	console.log(next);
// }
/***************************************************************************************************** */
// 4. Write a function that takes a month as an argument (e.g., "January") and returns
// the number of days in that month. Consider leap years for February. Use a switch
// statement.
// Input: "February"
// Output: 28 or 29 (depending on whether it's a leap year)

// function months(month) {
// 	switch (month) {
// 		case "January":
// 			return 31;
// 			break;

// 		case "Feb":
// 			return 28 || 29;
// 			break;
// 		case "March":
// 			return 31;
// 			break;
// 		case "April":
// 			return 30;
// 			break;
// 		case "May":
// 			return 31;
// 			break;
// 		case "June":
// 			return 30;
// 			break;
// 		case "July":
// 			return 31;
// 			break;
// 		case "August":
// 			return 31;
// 			break;
// 		case "September":
// 			return 30;
// 			break;
// 		case "October":
// 			return 31;
// 			break;
// 		case "November":
// 			return 30;
// 			break;
// 		case "December":
// 			return 31;
// 			break;

// 		default:
// 			break;
// 	}
// }
// console.log(months("January"));
// console.log(months("Feb"));
// console.log(months("November"));
// console.log(months("April"));
/*************************************************************************************************** */
// 5. Write a function that takes an array of numbers and returns a new array with only
// the prime numbers from the original array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 3, 5, 7]

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isPrime(num) {
// 	if (num === 0 || num === 1) return false;
// 	for (var i = 2; i < num; i++) {
// 		if (num % i == 0) return false;
// 	}
// 	return true;
// }

// for (var i = 0; i < input.length; i++) {
// 	if (isPrime(input[i])) {
// 		console.log(input[i]);
// 	}
// }

/************************************************************************************ */

// 6. Write a function that takes three numbers and returns the largest of the three
// without using the Math.max() method.
// Input: 3, 5, 1
// Output: 5

// function max(...nums) {
// 	let biggest = Math.max(...nums);
// 	return biggest;
// }
// console.log(max(3, 5, 1));

/************************************************************************************* */
// 7. Write a function that takes an array of numbers and returns the product of all the
// numbers in the array.
// Input: [1, 2, 3, 4]
// Output: 24

// let input = [1, 2, 3, 4];
// function product(input) {
// 	let p = 1;
// 	for (var i = 0; i < input.length; i++) {
// 		p = p * input[i];
// 	}
// 	return p;
// }
// console.log(product(input));
/************************************************************************************** */
// 8. Write a function that takes a string and an optional character. The function should
// return the number of times the character appears in the string. If the character is
// not provided, count the number of spaces in the string.
// Input: ("Hello World", "o")
// Output: 2
// Input: ("Hello World")
// Output: 1

// function charCount(value, char) {
// 	if (char === "" || char === undefined) {
// 		let space = 0;
// 		for (var i = 0; i < value.length; i++) {
// 			if (value.charAt(i) === " ") space++;
// 		}
// 		return space;
// 	}
// 	let count = 0;
// 	for (var i = 0; i < value.length; i++) {
// 		if (value.charAt(i) === char) count++;
// 	}
// 	return count;
// }

// console.log(charCount("hello world", "o"));
// console.log(charCount("hello world"));

/*************************************************************************************** */
// 9. Write a function that takes a score (0-100) and returns the corresponding grade (A,
//     B, C, D, F) based on standard grading scale. Use a switch statement with a default
//     case for invalid scores.
//     Input: 85
//     Output: B

// function score(value) {
// 	switch (true) {
// 		case value > 85 && value <= 100:
// 			return "A";
// 		case value > 70 && value <= 85:
// 			return "B";
// 		case value > 55 && value <= 70:
// 			return "C";
// 		case value > 40 && value <= 55:
// 			return "D";
// 		case value >= 0 && value <= 40:
// 			return "F";
// 		default:
// 			return "Invalid score";
// 	}
// }

// console.log(score(90));
// console.log(score(75));
// console.log(score(60));
// console.log(score(45));
// console.log(score(30));
// console.log(score(-5));
// console.log(score(105));
/********************************************************************************************** */
// 10. Write a function that takes an array of strings and returns an object where the
// keys are the strings and the values are the lengths of those strings. The function
// should exclude strings that have a length of 3 or less.
// Input: ["apple", "bat", "car", "dolphin"]
// Output: {"apple": 5, "dolphin": 7}

// let inputs = ["apple", "bat", "car", "dolphin"];

//method-1 (using for each)
// function output(inputs) {
// 	let emptyObj = {};
// 	for (let input of inputs) {
// 		if (input.length > 3) {
// 			emptyObj[input] = input.length;
// 		}
// 	}
// 	return emptyObj;
// }
// console.log(output(inputs));

//method2 (through reduce method)
// function output(inputs) {
// 	let newArray = inputs.reduce((acc, start) => {
// 		if (start.length > 3) {
// 			acc[start] = start.length;
// 		}
// 		return acc;
// 	}, {});
// 	return newArray;
// }
// console.log(output(inputs));
