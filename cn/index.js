//&& =>last truthy and first falsy
//|| =>first truthy and last falsy
// null,undefinded,false,0,'',Nan====>falsy

// console.log(5 && 1 && 3);
// console.log(5 && false && 3);
// console.log(false || "" || null || 2);
// console.log(1 || false || "" || null || 2);

// console.log(3 > 2 > 1); //false ==>true==1 && false==0
// console.log(1 < 2 < 3); //true

// console.log(undefined == null); //both are false but type is different
// console.log(undefined === null);

// console.log(String(100));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));

// console.log(Number("123")); //123
// console.log(Number("ali")); //nan
// console.log(Number(true)); //1
// console.log(Number(undefined));//nan
// console.log(Number(null));//0
// console.log(Number(""));//0
// console.log(Number("123abs"));//nan

// let n = "231";
// console.log(+n);//231
// let m = "231m";
// console.log(+m);//nan

// console.log(parseFloat("123.32"));   //123.32
// console.log(parseFloat("123.32mn"));  //123.32
// console.log(parseFloat("mn123.32"));  //nan

// console.log(parseInt("123")); //123
// console.log(parseInt("123nm")); //123
// console.log(parseInt("nm123")); //nan

// console.log(Boolean(0));//f
// console.log(Boolean(""));//f
// console.log(Boolean(null));//f
// console.log(Boolean(undefined));//f
// console.log(Boolean(1));//t
// console.log(Boolean("32131"));//t

// console.log("abc" + undefined);
// console.log("abc" + NaN);

// let x = 0;
// if (x++) console.log("ali");
// else if (x == 0) console.log("faizan");
// else console.log("koi ni");

// let no = ["1abc", "2def", "3ghi", "4jkl"];
// output:30
// let no1 = [];
// no.forEach(square);
// function square(ele) {
// 	let n = parseInt(ele);
// 	no1.push(Math.pow(n, 2));
// 	console.log(no1);
// }
// let total = no1.reduce((sum, cv) => sum + cv, 0);
// console.log(total);
// console.log(parseInt("1a1ab"));

// ["1a2b3c", "2d4e5f", "3g6h7i", "4j8k9l"]
// output:30
// let flag;
// let no = flag ? 100 : 200;
// console.log(no);
// let i=11;
// let j=--(i++)
// console.log(j)
// function main(tempF) {
// 	let result;

// 	// write your code here
// 	let c = ((tempF - 32) * 5) / 9;
// 	c = c.toFixed(2);
// 	result =
// 		c >= 37
// 			? `You have a fever! Your temperature is ${c}°C.`
// 			: `You don't have a fever! Your temperature is  ${c}°C.`;

// 	return result;
// }
// console.log(main(98.6));
// console.log(main(99));
// console.log(main(97));
// function isValidIdentifier(string) {
// 	let ch = string[0];
// 	if (ch >= 0 && ch <= 9) console.log("invalid");
// 	else console.log("valid");
// }

// isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
// isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
// isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.
// let ch = "k";
// if (ch > "a" && ch < "z") console.log("hi");

/****************************************************************** */
// function get() {
// 	return 1, 2, 3;
// }
// console.log(get());//3

/*************************************************************** */

// const arr = ["apple"];
// arr.unshift("mango", "banana");
// console.log(arr);

/********************************************************************* */
// const arr = ["apple", "mango", "bananaa"];
// const arr1 = arr.slice(); // ["apple", "mango", "bananaa"]
// console.log(arr1);

/******************************************************************** */
// const arr = ["a", "b", "c", "d"];
// arr.splice(2, "x", "y");
// console.log(arr);
// arr.splice(2, 0, "x", "y");
// console.log(arr);
/************************************************************* */
// const arr = [5, 3, 2, 1, 9, 7];
// const newArr = arr.toSorted();
// console.log(newArr);
// // let i=0;
// // let j=newArr.length-1
// // while(i<j){
// //     if(newArr[i]+newArr[j]>9)

// // }
/******************************************************************* */
// function reverseString(str) {
// 	//Implement Your function here
// 	let newStr = str.split("");
// 	console.log(newStr);
// 	console.log(newStr.reverse());
// 	console.log(newStr.join(""));

// 	// let newStr = "";
// 	// let li = str.length - 1;
// 	// while (li >= 0) {
// 	// 	newStr += str[li];
// 	// 	li--;
// 	// }
// 	// return newStr;
// }
// console.log(reverseString("Hello"));
// //Output : "olleH"

/****************************************************************************** */
// let nums = [2, 7, 11, 15];
// var twoSum = function (nums, target) {
// 	let newNums = nums.map((ele, index) => ({ ele, index }));
// 	// console.log(newNums);
// 	newNums.sort((a, b) => a.ele - b.ele);
// 	let s = 0;
// 	let e = nums.length - 1;
// 	let output = [];
// 	while (s < e) {
// 		if (newNums[s].ele + newNums[e].ele > target) e--;
// 		else if (newNums[s].ele + newNums[e].ele < target) s++;
// 		else {
// 			output.push(newNums[s].index);
// 			output.push(newNums[e].index);
// 			e--;
// 		}
// 	}
// 	return output;
// };
// console.log(twoSum(nums, 9));
/************************************************************************************* */
// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// let ele = 56;
// function deleteOccur(arr, ele) {
// 	let i = arr.indexOf(56);
// 	// console.log(i);
// 	arr.splice(i, 1);
// 	return arr;
// 	//Implement Your function here
// }

// console.log(deleteOccur(arr, ele));
//Output: [23,4,78,5,63,45,210];
/*************************************************************************************** */
// let arr = [4, 2, 34, 4, 1, 12, 1, 4];

// function findDuplicate(arr) {
// 	let counts = {};
// 	let duplicates = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		let num = arr[i];
// 		counts[num] = (counts[num] || 0) + 1;
// 	}
// 	console.log(counts);
// 	for (let num in counts) {
// 		if (counts[num] > 1) {
// 			duplicates.push(parseInt(num));
// 		}
// 	}

// 	return duplicates;
// }

// console.log(findDuplicate(arr));
// Output: [4, 1]

// let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// function findDuplicate(arr) {
// 	let ob = {};
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		let num = arr[i];
// 		ob[num] = (ob[num] || 0) + 1;
// 	}
// 	for (let e in ob) {
// 		if (ob[e] > 1) newArr.push(parseInt(e));
// 	}
// 	return newArr;
// 	//Implement your function here
// }
// console.log(findDuplicate(arr));
/************************************************************************ */
