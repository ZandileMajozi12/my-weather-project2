function refreshTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = temperature;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;

  iconElement.innerHTML = `<img src="${
    response.data.condition.icon - url
  }" class="forecast-icon"/>`;
}
function formatDate(date) {
  const now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  console.log(`${day},${hours}:${minutes}`);
}

function searchCity(city) {
  let apiKey = "f328aco26t5c73b7f0428bcfa5c26da0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city} &key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshTemperature);
}

function searchFormSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchFormSubmit);

searchCity("Pretoria");
