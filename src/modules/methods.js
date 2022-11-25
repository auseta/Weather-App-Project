export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export const getDay = (date) => new Date(date * 1000).getDay();

const toFahrenheit = (temp) => ((temp * 9) / 5 + 32).toFixed(2);

const displayFahrenheit = (weatherData) => {
  const content = document.querySelector('.content');
  content.innerHTML = `
  <div class='basic-weather-info'>
    <div class='weather-info'>
      <div class='weather-data-section'>
        <div class='day-state'>
          <img src='http://openweathermap.org/img/wn/${
  weatherData.weather[0].icon
}@2x.png' alt='weather-img'>
          <p class='weather-state'>${weatherData.weather[0].description}</p>  
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
          <p class='weather-state'>${weatherData.weather[0].description}</p>  
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

export const resetUnitsButton = (button) => {
  button.className = 'units-button fahrenheit';
  button.textContent = 'DISPLAY °F';
};

export const displayUnits = (e, weatherData) => {
  if (e.target.classList.contains('fahrenheit')) {
    displayFahrenheit(weatherData);
    e.target.classList.toggle('fahrenheit');
    e.target.classList.toggle('celcius');
    e.target.textContent = 'DISPLAY °C';
  } else {
    displayCelcius(weatherData);
    e.target.classList.toggle('celcius');
    e.target.classList.toggle('fahrenheit');
    e.target.textContent = 'DISPLAY °F';
  }
};

export const displayError = () => {
  const error = document.querySelector('.error');
  error.style.cssText = 'top: 120px;color: red;background-color: #000000;padding:5px;border: 5px solid red;right: 60px; font-size: 12px;';
  error.textContent = 'THE LOCATION YOU ENTERED DOES NOT EXIST.';
  setTimeout(() => {
    error.style.cssText = '';
    error.textContent = '';
  }, 2000);
};
