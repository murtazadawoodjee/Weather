const apiKey = "4f89aca7c6f5c0e5307a8ffc9f28b2c4";
const weatherInfo = document.getElementById("weather-info");
const locationInput = document.getElementById("location-input");
const getWeatherBtn = document.getElementById("get-weather-btn");

getWeatherBtn.addEventListener("click", () => {
  const location = locationInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0];
      const description = weather.main;
      const temperature = Math.round(data.main.temp - 273.15);

      weatherInfo.style.display = "block";
      weatherInfo.innerHTML = `
        <p>Location: ${location}</p>
        <p>Weather: ${description}</p>
        <p>Temperature: ${temperature} °C</p>
      `;
    })
    .catch((error) => {
      console.error(error);
      alert("Error: Unable to fetch weather data");
    });
});
