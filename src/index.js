import './styles/style.css';
import { ui } from './modules/ui';
import loadMainConent from './modules/loadContent';

// const getWeather = async () => {
//   const img = document.querySelector('img');

//   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Argentina&APPID=d0c81f539747596641485b095cf691a1&units=metric', { mode: 'cors' });

//   const info = await response.json();
//   const weatherImg = info.weather[0].icon;
//   console.log(weatherImg);
//   img.src = `http://openweathermap.org/img/wn/${weatherImg}@2x.png`;
// };

// getWeather();

//* obtener dia

// const getDay = async () => {
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=d0c81f539747596641485b095cf691a1&units=metric', { mode: 'cors' });

//   const weatherData = await response.json();
//   const currentDay = new Date(weatherData.dt);
//   console.log(days[currentDay.getDay()]);
// };

// getDay();

document.addEventListener('DOMContentLoaded', () => {
  ui();
  loadMainConent();
});
