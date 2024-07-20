// function sumOfAllNumber(start, end) {
// 	var count = 0;
// 	for (var i = start; i <= end; i++) {
// 		count = count + i;
// 	}
// 	console.log(`sum of all number from ${start} and ${end} is ${count}`);
// }
// sumOfAllNumber(10, 40);

// function findFactorial(number) {
// 	var factorial = 1;
// 	for (var i = 2; i <= number; i++) {
// 		factorial = factorial * i;
// 	}
// 	console.log(`factorial of ${number} is ${factorial}`);
// }
// findFactorial(5);

// function isPalindrome(string) {
// 	var start = 0;
// 	var end = string.length - 1;
// 	var flag = true;
// 	// console.log(end);
// 	while (start <= end) {
// 		if (string[start] !== string[end]) {
// 			flag = false;
// 			break;
// 		}
// 		start++;
// 		end--;
// 	}
// 	if (flag) console.log(`string is palindrome`);
// 	else console.log(`string is not a palindrome`);
// }
// isPalindrome("repaper");

function isPalindrome(string) {
	var start = 0;
	var end = string.length - 1;
	var flag = true;
	for (; start <= end; start++, end--) {
		if (string[start] !== string[end]) {
			flag = false;
			break;
		}
	}
	if (flag) console.log(`string is palindrome`);
	else console.log(`string is not a palindrome`);
}
isPalindrome("repaper");
isPalindrome("repapr");
