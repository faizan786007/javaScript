const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "82234c6f51b1b050c06733fd2d18d8b7";

weatherForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	const city = cityInput.value.trim();

	if (city) {
		try {
			const weatherData = await getWeatherData(city);
			console.log(weatherData);
			displayWeatherInfo(weatherData);
		} catch (error) {
			console.error(error);
			displayError("Could not fetch weather data. Please try again later.");
		}
	} else {
		displayError("Please enter a city");
	}
});

async function getWeatherData(city) {
	// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${356}&appid=${apiKey}`;

	const response = await fetch(apiUrl);

	if (!response.ok) {
		throw new Error("Could not fetch weather data");
	}

	return await response.json();
}

function displayWeatherInfo(data) {
	const {
		name: city,
		main: { temp, humidity },
		weather: [{ description, id }],
	} = data;

	card.textContent = "";
	card.style.display = "flex";

	const cityDisplay = document.createElement("h1");
	console.log(cityDisplay);
	const tempDisplay = document.createElement("p");
	const humidityDisplay = document.createElement("p");
	const descDisplay = document.createElement("p");
	const weatherEmoji = document.createElement("p");
	const tempCelsius = (temp - 273.15).toFixed(1);

	cityDisplay.textContent = city;
	tempDisplay.textContent = `${tempCelsius}°C`;
	humidityDisplay.textContent = `Humidity: ${humidity}%`;
	descDisplay.textContent =
		description.charAt(0).toUpperCase() + description.slice(1);
	weatherEmoji.textContent = getWeatherEmoji(id);

	cityDisplay.classList.add("cityDisplay");
	// console.log(cityDisplay);
	tempDisplay.classList.add("tempDisplay");
	humidityDisplay.classList.add("humidityDisplay");
	descDisplay.classList.add("descDisplay");
	weatherEmoji.classList.add("weatherEmoji");

	card.appendChild(cityDisplay);
	card.appendChild(tempDisplay);
	card.appendChild(humidityDisplay);
	card.appendChild(descDisplay);
	card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
	switch (true) {
		case weatherId >= 200 && weatherId < 300:
			return "⛈️"; // Thunderstorm
		case weatherId >= 300 && weatherId < 400:
			return "🌧️"; // Drizzle
		case weatherId >= 500 && weatherId < 600:
			return "🌧️"; // Rain
		case weatherId >= 600 && weatherId < 700:
			return "❄️"; // Snow
		case weatherId >= 700 && weatherId < 800:
			return "🌫️"; // Atmosphere (fog, mist, etc.)
		case weatherId === 800:
			return "☀️"; // Clear sky
		case weatherId >= 801 && weatherId < 810:
			return "🌤️"; // Clouds
		default:
			return "❓"; // Unknown
	}
}

function displayError(message) {
	const errorDisplay = document.createElement("p");
	errorDisplay.textContent = message;
	errorDisplay.classList.add("errorDisplay");

	card.textContent = "";
	card.style.display = "flex";
	card.appendChild(errorDisplay);
}
