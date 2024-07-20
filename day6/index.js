function oddReverse(start, end) {
	for (var i = start; i >= end; i--) {
		if (i % 2 == 1) console.log(i);
	}
}

oddReverse(40, 0);

function countEvenOdd(start, end) {
	var evenCount = 0;
	var oddCount = 0;
	for (var i = start; i >= end; i--) {
		if (i % 2 == 0) evenCount++;
		else oddCount++;
	}
	console.log(`even count is ${evenCount}`);
	console.log(`odd count is ${oddCount}`);
}

countEvenOdd(60, 20);
