// console.log("a");
// function outer(fn) {
// 	setTimeout(() => {
// 		console.log("b");
// 		fn();
// 	}, 2000);
// }

function c() {
	console.log("c");
}
outer(c);

try {
	outer();
} catch (error) {
	console.error("error");
} finally {
	console.log("finally");
}
function outer() {
	console.log("outer");
}

let promise = new Promise((resolve, reject) => {
	// resolve("resolve");
	reject("reject");
});
promise.then((res) => console.log(res)).catch((err) => console.log(err));
