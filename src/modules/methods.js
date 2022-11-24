export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const getDay = (date) => new Date(date * 1000).getDay();
// eslint-disable-next-line no-mixed-operators
const toFahrenheit = (temp) => ((temp * 9 / 5) + 32).toFixed(2);

export const displayFahrenheit = (weatherData) => {
  const content = document.querySelector('.content');
  content.innerHTML = `
  <div class='basic-weather-info'>
    <div class='weather-info'>
      <div class='weather-data-section'>
        <div class='day-state'>
          <img src='http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png' alt='weather-img'>
          <p>${weatherData.weather[0].description}</p>  
        </div>
        <div class='data'>
          <p>${days[getDay(weatherData.dt)]}</p>
          <p>${weatherData.name}</p>
          <p>${toFahrenheit(weatherData.main.temp)}°F</p>
        </div>
      </div>
    </div>

    <div class='weather-temps-info'>
      <p>Max: ${toFahrenheit(weatherData.main.temp_max)}°F</p>
      <p>Min: ${toFahrenheit(weatherData.main.temp_min)}°F</p>
    </div>
  </div>

  <div class='detailed-weather-info'>
    <p>Humidity: ${weatherData.main.humidity} %</p>
    <p>Feels Like: ${toFahrenheit(weatherData.main.feels_like)}°F</p>
    <p>Wind Speed: ${weatherData.wind.speed} km/h</p>
    <p>Cloudiness: ${weatherData.clouds.all} %</p>
  </div>
  `;
};

export const displayCelcius = (weatherData) => {
  const content = document.querySelector('.content');
  content.innerHTML = `
  <div class='basic-weather-info'>
    <div class='weather-info'>
      <div class='weather-data-section'>
        <div class='day-state'>
          <img src='http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png' alt='weather-img'>
          <p>${weatherData.weather[0].description}</p>  
        </div>
        <div class='data'>
          <p>${days[getDay(weatherData.dt)]}</p>
          <p>${weatherData.name}</p>
          <p>${weatherData.main.temp}°C</p>
        </div>
      </div>
    </div>

    <div class='weather-temps-info'>
      <p>Max: ${weatherData.main.temp_max}°C</p>
      <p>Min: ${weatherData.main.temp_min}°C</p>
    </div>
  </div>

  <div class='detailed-weather-info'>
    <p>Humidity: ${weatherData.main.humidity} %</p>
    <p>Feels Like: ${weatherData.main.feels_like}°C</p>
    <p>Wind Speed: ${weatherData.wind.speed} km/h</p>
    <p>Cloudiness: ${weatherData.clouds.all} %</p>
  </div>
  `;
};
