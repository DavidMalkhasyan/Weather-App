# Weather App

A simple weather application that provides current weather information for any city. The app fetches data from the OpenWeather API and displays the weather details such as temperature, humidity, wind speed, and precipitation.

## Features

- Search for the weather by city name.
- Displays current weather information including:
  - Temperature (°C)
  - Weather description (e.g., Sunny, Cloudy)
  - Humidity
  - Wind speed
  - Precipitation
- Weather icon based on the current weather.
- Dynamic date and weekday based on the current location.

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling the web page with a responsive design.
- **JavaScript**: For dynamic content and API interaction.
- **OpenWeather API**: For fetching weather data.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DavidMalkhasyan/Weather-App.git
   cd Weather-App
2. 

Open the index.html file in your browser to run the app.

3. **API Key:**

You need an API key from OpenWeather. Replace the placeholder in the JavaScript file with your actual API key:
javascript
const apiKey = "your_api_key_here";

4. **Modify the cityName in the script:**

Initially, the app is set to fetch weather data for "Yerevan", but you can change it or leave it as is to test the app with your city.

**Files**

index.html: The main HTML file for the app.
index.css: The styling for the app.
index.js: The JavaScript code that fetches data from the API and dynamically updates the UI.

**Example**
The weather app will show something like:

City: Yerevan, AM
Temperature: 23°C
Humidity: 52%
Wind: 5 km/h
Description: Sunny


You can search for different cities and see their respective weather information.

