import {
  displayUnits, resetUnitsButton, displayCelcius,
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
      // ------ When submitting the form, a loading animation is displayed ------ //
      content.classList.toggle('content');
      content.classList.toggle('loading');
      content.innerHTML = `
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      `;

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation.value}&appid=d0c81f539747596641485b095cf691a1&units=metric`, { mode: 'cors' });

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
    }
  });
};
