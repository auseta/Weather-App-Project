import { displayUnits, displayCelcius } from './methods';

const loadMainConent = async () => {
  const loading = document.querySelector('.loading');

  try {

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=d0c81f539747596641485b095cf691a1&units=metric', { mode: 'cors' });

    const weatherData = await response.json();

    loading.innerHTML = '';
    loading.classList.toggle('loading');
    loading.classList.toggle('content');

    displayCelcius(weatherData);

    const unitsButton = document.querySelector('.units-button');
    unitsButton.onclick = (e) => {
      displayUnits(e, weatherData);
    };

  } catch (error) {
    console.error('Error de conexion');
  }
};

export default loadMainConent;
