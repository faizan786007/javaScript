// You work in the weather department
// and have been tasked with tracking temperature fluctuations throughout the day.
//  You start measuring when the temperature is exactly 0 degrees. From this point,
// the temperature can either rise or fall.
// Write a function findMax Temperature that takes an integer n,
// representing the number of temperature readings taken during the day,
// and an array TemperatureChange that indicates the change in temperature
// from one reading to the next. Your function should return the highest
// temperature reached during the day, after the measurement has started.
// Note: Positive numbers in the TemperatureChange array represent an
// increase in temperature. Negative numbers in the TemperatureChange
// array represent a decrease in temperature. The highest temperature
//can be at or below 0 degrees.
function findMaxTemperature(n, tempChange) {
	let currentTemp = 0;
	let maxTemp = 0;
	for (let temp of tempChange) {
		currentTemp += temp;
		maxTemp = Math.max(maxTemp, currentTemp);
	}
	return maxTemp;
}
let tempChange = [1, 2, -3, 5, -1, -2, 8, -10, 7];
let n = tempChange.length;
console.log(findMaxTemperature(n, tempChange));
