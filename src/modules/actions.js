import {
  displayUnits, resetUnitsButton, displayCelcius, displayError,
} from './methods';
import { apiKey } from './apiKEY';

export const findLocation = () => {
  const inputLocation = document.querySelector('#location');
  const formLocation = document.querySelector('form');

  formLocation.addEventListener('submit', async (e) => {

    e.preventDefault();

    const locationError = document.querySelector('.error');
    locationError.style.cssText = '';
    locationError.textContent = '';

    const content = document.querySelector('.content');
    const previousContent = content.innerHTML;

    try {
      const unitsButton = document.querySelector('.units-button');
      // ------ When submitting the form, a loading animation is displayed ------ //
      content.classList.toggle('content');
      content.classList.toggle('loading');
      content.innerHTML = `
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      `;

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation.value}&appid=${apiKey}&units=metric`, { mode: 'cors' });

      const weatherData = await response.json();

      // ------ Once Fetch retrieves the data from the OpenWeather API without any problems, it will load all the weather data for the location entered in the input. ------//

      content.classList.toggle('loading');
      content.classList.toggle('content');

      displayCelcius(weatherData);
      resetUnitsButton(unitsButton);

      unitsButton.onclick = (f) => {
        displayUnits(f, weatherData);
      };

    } catch (error) {
      content.className = 'content';
      content.innerHTML = previousContent;
      displayError();
    }
  });
};
