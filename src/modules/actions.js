import {
  days, getDay, displayUnits, resetUnitsButton,
} from './methods';

export const findLocation = () => {
  const inputLocation = document.querySelector('#location');
  const formLocation = document.querySelector('form');

  formLocation.addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = document.querySelector('.content');
    const previousContent = content.innerHTML;
    try {
      const unitsButton = document.querySelector('.units-button');
      content.classList.toggle('content');
      content.classList.toggle('loading');
      content.innerHTML = `

      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      `;

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation.value}&appid=d0c81f539747596641485b095cf691a1&units=metric`, { mode: 'cors' });

      const weatherData = await response.json();

      const weatherIcon = weatherData.weather[0].icon;
      const weatherLocation = weatherData.name;
      const weatherDay = days[getDay(weatherData.dt)];
      const weatherMin = weatherData.main.temp_min;
      const weatherMax = weatherData.main.temp_max;
      const weatherState = weatherData.weather[0].description;
      const weatherTemp = weatherData.main.temp;
      const weatherHumidity = weatherData.main.humidity;
      const weatherFeelsLike = weatherData.main.feels_like;
      const weatherWindSpeed = weatherData.wind.speed;
      const weatherCloudiness = weatherData.clouds.all;

      content.classList.toggle('loading');
      content.classList.toggle('content');
      content.innerHTML = `
      <div class='basic-weather-info'>
        <div class='weather-info'>
          <div class='weather-data-section'>
            <div class='day-state'>
              <img src='http://openweathermap.org/img/wn/${weatherIcon}@2x.png' alt='weather-img'>
              <p class='weather-state'>${weatherState}</p>  
            </div>
            <div class='data'>
              <p>${weatherDay}</p>
              <p>${weatherLocation}</p>
              <p>${weatherTemp}°C</p>
            </div>
          </div>
        </div>

        <div class='weather-temps-info'>
          <p>Max: ${weatherMax}°C</p>
          <p>Min: ${weatherMin}°C</p>
        </div>
      </div>
    
      <div class='detailed-weather-info'>
        <p>Humidity: ${weatherHumidity} %</p>
        <p>Feels Like: ${weatherFeelsLike}°C</p>
        <p>Wind Speed: ${weatherWindSpeed} km/h</p>
        <p>Cloudiness: ${weatherCloudiness} %</p>
      </div>
      `;

      resetUnitsButton(unitsButton);

      unitsButton.onclick = (f) => {
        displayUnits(f, weatherData);
      };

    } catch (error) {
      content.className = 'content';
      content.innerHTML = previousContent;
    }
  });
};