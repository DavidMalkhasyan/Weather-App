const searchBtn = document.querySelector(".search__button");
const searchInput = document.querySelector(".search__input");

const weekDay = document.querySelector(".weather__day");
const weather__date = document.querySelector(".weather__date");
const city = document.querySelector(".weather__city");
const weather__icon = document.querySelector(".weather__icon");
const weather__temperature = document.querySelector(".weather__temperature");
const weather__description = document.querySelector(".weather__description");

const precipitation = document.querySelector(".precipitation");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const date = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getOneDayWeather(cityName) {
    const apiKey = "4cb20e03d2b9c30bac99c404a89b1f79";
    const oneDayUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    

    fetch(oneDayUrl)
        .then((response) => response.json())
        .then((weatherData) => {
            if (weatherData.cod === 200) {
                city.textContent = weatherData.name;
                weekDay.textContent = daysOfWeek[date.getDay()];
                weather__date.textContent = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                city.textContent = `${weatherData.name}, ${weatherData.sys.country}`;

                const iconCode = weatherData.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                weather__icon.src = iconUrl;
                weather__temperature.textContent = `${Math.round(weatherData.main.temp)}°C`;
                weather__description.textContent = weatherData.weather[0].description;

                precipitation.textContent = weatherData.weather[0].main;
                humidity.textContent = `${weatherData.main.humidity}%`;
                wind.textContent = `${weatherData.wind.speed}km/h`;
            } else {
                alert(`Error: ${weatherData.message}`);
            }
        })
        .catch((err) => alert("Error: " + err.message));
};

getOneDayWeather("Yerevan");

searchBtn.addEventListener("click", () => {
    getOneDayWeather(searchInput.value);
    searchInput.value = "";
});


const fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
