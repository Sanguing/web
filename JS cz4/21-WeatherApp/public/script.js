const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=...';
const API_UNITS = '&units=metric';


const getWeather = () => {
  const city = input.value.trim() || 'London';

  axios
    .get('/api/weather', {
      params: { city }
    })
    .then((res) => {
      const { main, weather: conditions, name } = res.data;
      const status = conditions[0];

      cityName.textContent = name;
      temperature.textContent = Math.floor(main.temp) + '°C';
      humidity.textContent = main.humidity + '%';
      weather.textContent = status.main;
      warning.textContent = '';
      input.value = '';

      const id = status.id;
      let image = 'unknown.png';

      if (id >= 200 && id < 300) {
        image = 'thunderstorm.png';
      } else if (id >= 300 && id < 400) {
        image = 'drizzle.png';
      } else if (id >= 500 && id < 600) {
        image = 'rain.png';
      } else if (id >= 600 && id < 700) {
        image = 'ice.png';
      } else if (id >= 700 && id < 800) {
        image = 'fog.png';
      } else if (id === 800) {
        image = 'sun.png';
      } else if (id > 800 && id < 900) {
        image = 'cloud.png';
      }

      photo.setAttribute('src', '/img/' + image);
    })
    .catch(() => {
      warning.textContent = 'Wpisz poprawną nazwę miasta.';
    });
};



const enterCheck = (e) => {
	if (e.key === 'Enter') {
		getWeather();
	}
};

input.addEventListener('keyup', enterCheck);
getWeather();
button.addEventListener('click', getWeather);
